"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Badge,
} from "@chakra-ui/react";

// Dynamically import map
const ThailandMap = dynamic(() => import("../components/ThailandMap"), {
  ssr: false,
});

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

export default function RankingPage() {
  const router = useRouter();
  const [mfiData, setMfiData] = useState<MFIData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Load MFI results
    Papa.parse("/data/MFI_Results_2025_Enhanced.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setMfiData(results.data as MFIData[]);
      },
    });
  }, []);

  const filteredData = mfiData.filter(
    (item) =>
      item &&
      item.Province &&
      item.Province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProvinceClick = (provinceName: string) => {
    // Navigate to province detail page
    router.push(`/province/${encodeURIComponent(provinceName)}`);
  };

  // Get color based on MFI score (same as map)
  const getScoreColor = (score: number) => {
    if (score >= 40) return "#50E3C4"; // High - brand color
    if (score >= 35) return "#75AFED"; // Upper-mid - light blue
    if (score >= 30) return "#9BC5F2"; // Mid - lighter blue
    if (score >= 25) return "#C2DCF7"; // Lower-mid - very light blue
    return "#E8F2FC"; // Lowest - very pale blue
  };

  return (
    <>
      <Header />

      <Box bg="gray.50" minH="100vh">
        {/* Page Header */}
        <Box bg="white" borderBottom="1px solid" borderColor="gray.200">
          <Box
            maxW="1400px"
            mx="auto"
            px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
            py={{ base: "2rem", md: "3rem" }}
          >
            <VStack gap={4} align="start">
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color="#4C90E2"
              >
                การจัดอันดับทั้ง 77 จังหวัด
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                คลิกที่จังหวัดบนแผนที่หรือรายการด้านล่างเพื่อดูรายละเอียด
              </Text>
            </VStack>
          </Box>
        </Box>

        {/* Main Content - Map + Sidebar */}
        <Box
          maxW="1400px"
          mx="auto"
          px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
          py={{ base: "2rem", md: "3rem" }}
        >
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", lg: "1fr 400px" }}
            gap={6}
          >
            {/* Map Section */}
            <Box>
              <Box
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="sm"
                h={{ base: "500px", md: "700px" }}
                position="relative"
              >
                <ThailandMap
                  data={mfiData}
                  onProvinceClick={handleProvinceClick}
                  showLegend={false}
                />
              </Box>
            </Box>

            {/* Sidebar - Province List */}
            <Box>
              <VStack gap={4} align="stretch">
                {/* Search Box */}
                <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
                  <Input
                    placeholder="ค้นหาจังหวัด..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    size="lg"
                  />
                </Box>

                {/* Province List */}
                <Box
                  bg="white"
                  borderRadius="lg"
                  boxShadow="sm"
                  maxH="600px"
                  overflowY="auto"
                >
                  <VStack gap={0} align="stretch">
                    {filteredData.map((province, index) => {
                      const score = parseFloat(province.MFI_Score);
                      const scoreColor = getScoreColor(score);

                      return (
                        <Box
                          key={province.Province}
                          p={4}
                          borderBottom={
                            index < filteredData.length - 1
                              ? "1px solid"
                              : "none"
                          }
                          borderColor="gray.100"
                          cursor="pointer"
                          _hover={{ bg: "gray.50" }}
                          onClick={() => handleProvinceClick(province.Province)}
                        >
                          <HStack justify="space-between" align="start">
                            <HStack gap={3} flex={1}>
                              <Badge
                                bg={scoreColor}
                                color={score >= 25 ? "white" : "gray.700"}
                                fontSize="sm"
                                fontWeight="bold"
                                px={2}
                                py={1}
                                borderRadius="md"
                                minW="40px"
                                textAlign="center"
                              >
                                {province.Rank}
                              </Badge>
                              <VStack align="start" gap={1} flex={1}>
                                <Text fontWeight="bold" color="gray.800">
                                  {province.Province}
                                </Text>
                                <Text fontSize="sm" color="gray.500">
                                  คะแนน: {score.toFixed(2)}
                                </Text>
                              </VStack>
                            </HStack>
                            <Badge
                              bg={scoreColor}
                              color={score >= 25 ? "white" : "gray.700"}
                              fontSize="xs"
                              px={2}
                              py={1}
                            >
                              {province.Tier}
                            </Badge>
                          </HStack>
                        </Box>
                      );
                    })}
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
