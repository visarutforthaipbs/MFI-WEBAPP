"use client";

import { useEffect, useRef } from "react";
import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MFIData {
  Rank: string;
  Province: string;
  MFI_Score: string;
  Score_Economic: string;
  Score_Health: string;
  Score_Family: string;
  Score_Safety: string;
  Score_Community: string;
  Tier: string;
}

interface ThailandMapProps {
  data: MFIData[];
  onProvinceClick?: (province: string) => void;
  showLegend?: boolean;
}

export default function ThailandMap({
  data,
  onProvinceClick,
  showLegend = true,
}: ThailandMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const geoJsonLayer = useRef<L.GeoJSON | null>(null);

  // Create a map of province names to MFI data
  const provinceDataMap = new Map(data.map((item) => [item.Province, item]));

  // Get color based on MFI score
  const getColor = (score: number) => {
    if (score >= 40) return "#50E3C4"; // High - brand color
    if (score >= 35) return "#75AFED"; // Upper-mid - light blue
    if (score >= 30) return "#9BC5F2"; // Mid - lighter blue
    if (score >= 25) return "#C2DCF7"; // Lower-mid - very light blue
    return "#E8F2FC"; // Lowest - very pale blue
  };

  // Get opacity based on score for gradient effect
  const getOpacity = (score: number) => {
    return 0.5 + (score / 100) * 0.5; // Range from 0.5 to 1.0
  };

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    console.log("Initializing map...");

    // Wait for next tick to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (!mapContainer.current) {
        console.log("Map container not found");
        return;
      }

      console.log("Creating map instance...");

      // Initialize map
      const map = L.map(mapContainer.current, {
        center: [13.7563, 100.5018],
        zoom: 6,
        zoomControl: false,
        attributionControl: false,
        dragging: true,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
      });

      mapInstance.current = map;
      console.log("Map created successfully");

      // Add zoom controls at bottom right
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Load GeoJSON
      console.log("Loading GeoJSON...");
      fetch("/geojson/provinces.geojson")
        .then((response) => response.json())
        .then((geoData) => {
          console.log("GeoJSON loaded, adding to map...");
          if (!mapInstance.current) return;

          const geoJson = L.geoJSON(geoData, {
            style: (feature) => {
              const provinceName = feature?.properties?.pro_th;
              const provinceData = provinceDataMap.get(provinceName);
              const score = provinceData
                ? parseFloat(provinceData.MFI_Score)
                : 0;

              return {
                fillColor: getColor(score),
                weight: 1,
                opacity: 1,
                color: "white",
                fillOpacity: getOpacity(score),
              };
            },
            onEachFeature: (feature, layer) => {
              const provinceName = feature.properties.pro_th;
              const provinceData = provinceDataMap.get(provinceName);

              layer.on({
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    weight: 2,
                    color: "#4C90E2",
                    fillOpacity: 0.9,
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  const score = provinceData
                    ? parseFloat(provinceData.MFI_Score)
                    : 0;
                  layer.setStyle({
                    weight: 1,
                    color: "white",
                    fillOpacity: getOpacity(score),
                  });
                },
                click: () => {
                  if (onProvinceClick) {
                    onProvinceClick(provinceName);
                  }
                },
              });

              // Bind tooltip
              if (provinceData) {
                layer.bindTooltip(
                  `
                <div style="font-family: 'DB HelvethaicaX', sans-serif; padding: 4px;">
                  <strong>${provinceName}</strong><br/>
                  คะแนน MFI: ${parseFloat(provinceData.MFI_Score).toFixed(2)}
                </div>
              `,
                  {
                    sticky: true,
                    className: "custom-tooltip",
                  }
                );
              }
            },
          });

          geoJson.addTo(map);
          geoJsonLayer.current = geoJson;

          // Fit bounds to Thailand
          map.fitBounds(geoJson.getBounds());
        })
        .catch((error) => {
          console.error("Error loading GeoJSON:", error);
        });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update styles when data changes
  useEffect(() => {
    if (!geoJsonLayer.current) return;

    geoJsonLayer.current.eachLayer((layer: L.Layer) => {
      const featureLayer = layer as L.Path & {
        feature: { properties: { pro_th: string } };
      };
      const provinceName = featureLayer.feature.properties.pro_th;
      const provinceData = provinceDataMap.get(provinceName);
      const score = provinceData ? parseFloat(provinceData.MFI_Score) : 0;

      featureLayer.setStyle({
        fillColor: getColor(score),
        fillOpacity: getOpacity(score),
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Box position="relative" w="100%" h="100%">
      <Box
        ref={mapContainer}
        w="100%"
        h="100%"
        minH="400px"
        borderRadius="md"
        overflow="hidden"
        bg="transparent"
        style={{ background: "transparent" }}
      />

      {/* Legend */}
      {showLegend && (
        <Box
          position="absolute"
          top={{ base: "280px", md: "350px", lg: "550px" }}
          left={{ base: "20px", md: "120px", lg: "430px" }}
          bg="white"
          p={{ base: 2, md: 3 }}
          borderRadius="md"
          boxShadow="lg"
          zIndex={1000}
        >
          <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold" mb={2}>
            คะแนน MFI
          </Text>
          <VStack align="stretch" gap={1}>
            <HStack gap={2}>
              <Box
                w={{ base: "16px", md: "20px" }}
                h="15px"
                bg="#50E3C4"
                borderRadius="sm"
              />
              <Text fontSize="xs">40+ (สูงมาก)</Text>
            </HStack>
            <HStack gap={2}>
              <Box
                w={{ base: "16px", md: "20px" }}
                h="15px"
                bg="#75AFED"
                borderRadius="sm"
              />
              <Text fontSize="xs">35-40</Text>
            </HStack>
            <HStack gap={2}>
              <Box
                w={{ base: "16px", md: "20px" }}
                h="15px"
                bg="#9BC5F2"
                borderRadius="sm"
              />
              <Text fontSize="xs">30-35</Text>
            </HStack>
            <HStack gap={2}>
              <Box
                w={{ base: "16px", md: "20px" }}
                h="15px"
                bg="#C2DCF7"
                borderRadius="sm"
              />
              <Text fontSize="xs">25-30</Text>
            </HStack>
            <HStack gap={2}>
              <Box
                w={{ base: "16px", md: "20px" }}
                h="15px"
                bg="#E8F2FC"
                borderRadius="sm"
              />
              <Text fontSize="xs">&lt;25</Text>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
}
