"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useMFIData, useRawData } from "../../hooks/useMFIData";
import { MFIData, RawData } from "../../utils";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Grid,
} from "@chakra-ui/react";
import Script from "next/script";

// Extend Window interface for Chart.js
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Chart: any;
  }
}

interface ProvinceDetailClientProps {
  province: string;
}

export default function ProvinceDetailClient({
  province,
}: ProvinceDetailClientProps) {
  const provinceName = decodeURIComponent(province);

  const { data: mfiData } = useMFIData();
  const { data: rawDataList } = useRawData();

  const [provinceData, setProvinceData] = useState<MFIData | null>(null);
  const [rawData, setRawData] = useState<RawData | null>(null);
  const [chartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    if (mfiData.length > 0) {
      const found = mfiData.find((d) => d.Province === provinceName);
      setProvinceData(found || null);
    }
  }, [mfiData, provinceName]);

  useEffect(() => {
    if (rawDataList.length > 0) {
      const found = rawDataList.find((d) => d.Province === provinceName);
      setRawData(found || null);
    }
  }, [rawDataList, provinceName]);

  useEffect(() => {
    if (
      chartLoaded &&
      provinceData &&
      typeof window !== "undefined" &&
      window.Chart
    ) {
      const ctx = document.getElementById("radarChart") as HTMLCanvasElement;
      if (ctx) {
        // Destroy existing chart if it exists to prevent canvas reuse errors
        const existingChart = window.Chart.getChart(ctx);
        if (existingChart) {
          existingChart.destroy();
        }

        new window.Chart(ctx, {
          type: "radar",
          data: {
            labels: [
              "การรวมครอบครัว",
              "ความปลอดภัย",
              "พื้นฐานเศรษฐกิจ",
              "ตาข่ายสุขภาพ",
              "การสนับสนุนชุมชน",
            ],
            datasets: [
              {
                label: provinceName,
                data: [
                  parseFloat(provinceData.Score_Family),
                  parseFloat(provinceData.Score_Safety),
                  parseFloat(provinceData.Score_Economic),
                  parseFloat(provinceData.Score_Health),
                  parseFloat(provinceData.Score_Community),
                ],
                backgroundColor: "rgba(80, 227, 196, 0.2)",
                borderColor: "#8aba8a",
                borderWidth: 2,
                pointBackgroundColor: "#519acb",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 5,
              },
            ],
          },
          options: {
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }
  }, [chartLoaded, provinceData, provinceName]);

  if (!provinceData || !rawData) {
    return (
      <>
        <Header />
        <Box
          minH="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text>กำลังโหลดข้อมูล...</Text>
        </Box>
        <Footer />
      </>
    );
  }

  const migrantPop = parseFloat(
    rawData["จำนวนแรงงานข้ามชาติ"].replace(/,/g, "")
  );
  const gCodeStudents = parseFloat(
    rawData["จำนวนเด็กนักเรียนเลข G"].replace(/,/g, "")
  );
  const workInjuries =
    rawData["จำนวนอุบัติเหตุ"] === "NA"
      ? 0
      : parseFloat(rawData["จำนวนอุบัติเหตุ"].replace(/,/g, ""));
  const healthFund = parseFloat(
    rawData["จำนวนแรงงานข้ามชาติที่มีประกันสุขภาพ"].replace(/,/g, "")
  );
  const ngoCount = parseFloat(rawData["จำนวน NGO/CSO ในพื้นที่"]);
  const minWage = parseFloat(rawData["ค่าแรงขั้นต่ำ"]);

  const studentsPerTenK = ((gCodeStudents / migrantPop) * 10000).toFixed(0);
  const injuriesPerTenK = ((workInjuries / migrantPop) * 10000).toFixed(0);
  const healthPerTenK = ((healthFund / migrantPop) * 10000).toFixed(0);
  const ngoPerTenK = ((ngoCount / migrantPop) * 10000).toFixed(2);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js"
        onLoad={() => setChartLoaded(true)}
      />
      <Header />

      <Box bg="white">
        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
          py={{ base: "2rem", md: "3rem", lg: "4rem" }}
        >
          {/* Province Header */}
          <VStack gap={4} align="start" mb={8}>
            <HStack gap={4} flexWrap="wrap">
              <Badge
                bg="#519acb"
                color="white"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                px={{ base: 3, md: 4 }}
                py={{ base: 1, md: 2 }}
                borderRadius="md"
              >
                อันดับ {provinceData.Rank} / 77
              </Badge>
              <Badge
                bg="#8aba8a"
                color="white"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                px={{ base: 3, md: 4 }}
                py={{ base: 1, md: 2 }}
                borderRadius="md"
              >
                คะแนน {parseFloat(provinceData.MFI_Score).toFixed(2)} / 100
              </Badge>
            </HStack>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="gray.800"
            >
              จังหวัด{provinceName}
            </Heading>
          </VStack>

          {/* Two Column Layout */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} mb={8}>
            {/* Left Column - Chart & Analysis */}
            <VStack gap={6} align="stretch">
              <Box bg="gray.50" p={{ base: 4, md: 6 }} borderRadius="lg">
                <Heading size={{ base: "md", md: "lg" }} mb={4} color="#519acb">
                  การแบ่งคะแนน MFI (v0.1)
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={6}>
                  กราฟนี้แสดงประสิทธิภาพของ{provinceName} ในตัวชี้วัดหลัก 5
                  ประการ คะแนน 100 คือดีที่สุด
                </Text>
                <Box h={{ base: "300px", md: "400px" }} position="relative">
                  <canvas id="radarChart"></canvas>
                </Box>
              </Box>

              <Box bg="gray.50" p={{ base: 4, md: 6 }} borderRadius="lg">
                <Heading size={{ base: "sm", md: "md" }} mb={4} color="#519acb">
                  การวิเคราะห์จากข้อมูลปี 2024
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  จังหวัด{provinceName} อยู่ในอันดับที่ {provinceData.Rank}{" "}
                  ของดัชนีจากข้อมูลปี 2024
                  {parseFloat(provinceData.Score_Family) > 70 &&
                    " โดดเด่นด้านการรวมครอบครัว"}
                  {parseFloat(provinceData.Score_Safety) > 70 &&
                    " มีความปลอดภัยในที่ทำงานสูง"}
                  {parseFloat(provinceData.Score_Economic) > 70 &&
                    " มีนโยบายเศรษฐกิจที่ดี"}
                  {parseFloat(provinceData.Score_Health) > 70 &&
                    " มีระบบสุขภาพที่แข็งแกร่ง"}
                  {parseFloat(provinceData.Score_Community) > 70 &&
                    " มีการสนับสนุนชุมชนที่ดี"}
                </Text>
              </Box>
            </VStack>

            {/* Right Column - Key Data Points */}
            <VStack gap={4} align="stretch">
              <Heading size={{ base: "md", md: "lg" }} color="#519acb">
                ข้อมูลสำคัญสำหรับ{provinceName}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={2}>
                นี่คือข้อมูลดิบที่ใช้ในการคำนวณคะแนน
              </Text>

              {/* 1. Family Inclusion */}
              <Box
                bg="white"
                border="2px solid"
                borderColor="#8aba8a"
                p={{ base: 4, md: 5 }}
                borderRadius="lg"
              >
                <HStack justify="space-between" mb={3}>
                  <Text fontWeight="bold" fontSize="lg">
                    1. การรวมครอบครัว
                  </Text>
                  <Badge bg="#8aba8a" color="white" fontSize="md" px={3} py={1}>
                    {parseFloat(provinceData.Score_Family).toFixed(2)}
                  </Badge>
                </HStack>
                <VStack align="stretch" gap={2} fontSize="sm">
                  <HStack justify="space-between">
                    <Text color="gray.600">จำนวนเด็กนักเรียนเลข G:</Text>
                    <Text fontWeight="bold">
                      {gCodeStudents.toLocaleString()}
                    </Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600">จำนวนแรงงานข้ามชาติ:</Text>
                    <Text fontWeight="bold">{migrantPop.toLocaleString()}</Text>
                  </HStack>
                  <Box bg="gray.50" p={2} borderRadius="md" mt={2}>
                    <Text fontWeight="bold" color="#519acb">
                      ตัวชี้วัด: {studentsPerTenK} นักเรียนต่อแรงงานข้ามชาติ
                      10,000 คน
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* 2. Workplace Safety */}
              <Box
                bg="white"
                border="2px solid"
                borderColor="#519acb"
                p={5}
                borderRadius="lg"
              >
                <HStack justify="space-between" mb={3}>
                  <Text fontWeight="bold" fontSize="lg">
                    2. ความปลอดภัยในที่ทำงาน
                  </Text>
                  <Badge bg="#519acb" color="white" fontSize="md" px={3} py={1}>
                    {parseFloat(provinceData.Score_Safety).toFixed(2)}
                  </Badge>
                </HStack>
                <VStack align="stretch" gap={2} fontSize="sm">
                  <HStack justify="space-between">
                    <Text color="gray.600">จำนวนอุบัติเหตุ:</Text>
                    <Text fontWeight="bold">
                      {workInjuries.toLocaleString()}
                    </Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600">จำนวนแรงงานข้ามชาติ:</Text>
                    <Text fontWeight="bold">{migrantPop.toLocaleString()}</Text>
                  </HStack>
                  <Box bg="gray.50" p={2} borderRadius="md" mt={2}>
                    <Text fontWeight="bold" color="#519acb">
                      ตัวชี้วัด: {injuriesPerTenK} อุบัติเหตุต่อแรงงานข้ามชาติ
                      10,000 คน
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* 3. Economic Floor */}
              <Box
                bg="white"
                border="2px solid"
                borderColor="#f1d47b"
                p={5}
                borderRadius="lg"
              >
                <HStack justify="space-between" mb={3}>
                  <Text fontWeight="bold" fontSize="lg">
                    3. พื้นฐานทางเศรษฐกิจ
                  </Text>
                  <Badge
                    bg="#f1d47b"
                    color="gray.800"
                    fontSize="md"
                    px={3}
                    py={1}
                  >
                    {parseFloat(provinceData.Score_Economic).toFixed(2)}
                  </Badge>
                </HStack>
                <VStack align="stretch" gap={2} fontSize="sm">
                  <HStack justify="space-between">
                    <Text color="gray.600">ค่าแรงขั้นต่ำ:</Text>
                    <Text fontWeight="bold">{minWage} บาท</Text>
                  </HStack>
                  <Box bg="gray.50" p={2} borderRadius="md" mt={2}>
                    <Text fontWeight="bold" color="gray.700">
                      ตัวชี้วัด: ค่าจ้างนี้อยู่ในระดับ{" "}
                      {minWage >= 370 ? "สูง" : minWage >= 350 ? "กลาง" : "ต่ำ"}{" "}
                      ของประเทศ
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* 4. Health Safety-Net */}
              <Box
                bg="white"
                border="2px solid"
                borderColor="#8aba8a"
                p={5}
                borderRadius="lg"
              >
                <HStack justify="space-between" mb={3}>
                  <Text fontWeight="bold" fontSize="lg">
                    4. ตาข่ายความปลอดภัยด้านสุขภาพ
                  </Text>
                  <Badge bg="#8aba8a" color="white" fontSize="md" px={3} py={1}>
                    {parseFloat(provinceData.Score_Health).toFixed(2)}
                  </Badge>
                </HStack>
                <VStack align="stretch" gap={2} fontSize="sm">
                  <HStack justify="space-between">
                    <Text color="gray.600">จำนวนที่มีประกันสุขภาพ:</Text>
                    <Text fontWeight="bold">{healthFund.toLocaleString()}</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600">จำนวนแรงงานข้ามชาติ:</Text>
                    <Text fontWeight="bold">{migrantPop.toLocaleString()}</Text>
                  </HStack>
                  <Box bg="gray.50" p={2} borderRadius="md" mt={2}>
                    <Text fontWeight="bold" color="#519acb">
                      ตัวชี้วัด: {healthPerTenK} การลงทะเบียนต่อแรงงานข้ามชาติ
                      10,000 คน
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* 5. Community Support */}
              <Box
                bg="white"
                border="2px solid"
                borderColor="#519acb"
                p={5}
                borderRadius="lg"
              >
                <HStack justify="space-between" mb={3}>
                  <Text fontWeight="bold" fontSize="lg">
                    5. การสนับสนุนชุมชน
                  </Text>
                  <Badge bg="#519acb" color="white" fontSize="md" px={3} py={1}>
                    {parseFloat(provinceData.Score_Community).toFixed(2)}
                  </Badge>
                </HStack>
                <VStack align="stretch" gap={2} fontSize="sm">
                  <HStack justify="space-between">
                    <Text color="gray.600">จำนวน NGO/CSO ในพื้นที่:</Text>
                    <Text fontWeight="bold">{ngoCount}</Text>
                  </HStack>
                  <Box bg="gray.50" p={2} borderRadius="md" mt={2}>
                    <Text fontWeight="bold" color="#519acb">
                      ตัวชี้วัด: {ngoPerTenK} บริการต่อแรงงานข้ามชาติ 10,000 คน
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
