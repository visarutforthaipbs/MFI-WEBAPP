"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapBackground from "./components/MapBackground";
import { useMFIData } from "./hooks/useMFIData";
import {
  Box,
  Heading,
  Text,
  Table,
  Badge,
  VStack,
  HStack,
  Card,
  Link,
  Button,
} from "@chakra-ui/react";

// Dynamically import map to avoid SSR issues
const ThailandMap = dynamic(() => import("./components/ThailandMap"), {
  ssr: false,
  loading: () => (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <Text>กำลังโหลดแผนที่...</Text>
    </Box>
  ),
});

export default function Home() {
  const { data } = useMFIData();

  const topProvinces = data.slice(0, 5);

  return (
    <>
      <Header />

      {/* Hero Section with Map */}
      <Box
        position="relative"
        h={{ base: "100vh", md: "700px", lg: "800px" }}
        minH={{ base: "600px", md: "700px" }}
        overflow="hidden"
      >
        {/* SVG Grid Background */}
        <MapBackground />

        {/* Map Background */}
        <Box position="absolute" inset={0} zIndex={1} w="100%" h="100%">
          <ThailandMap data={data} />
        </Box>

        {/* Hero Text */}
        <Box
          maxW="1200px"
          h="100%"
          position="relative"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent={{ base: "flex-end", md: "flex-start" }}
          zIndex={3}
          px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
          py={{ base: "2rem", md: "0" }}
          mx="auto"
          w="100%"
        >
          <VStack
            align="start"
            gap={4}
            maxW={{ base: "100%", md: "600px" }}
            color="white"
            textShadow="0 2px 4px rgba(0,0,0,0.8)"
            pl={{ base: 0, md: 4 }}
            pr={{ base: 0, md: 0 }}
          >
            <Heading
              size={{ base: "2xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Migrant Friendly Index
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight="medium"
              color="brand.300"
            >
              ดัชนีความเป็นมิตรต่อแรงงานข้ามชาติ
            </Text>
            <Text fontSize={{ base: "md", md: "xl" }} maxW="500px">
              วัดระดับความเป็นมิตรของแต่ละจังหวัดในประเทศไทยต่อแรงงานข้ามชาติ
            </Text>
          </VStack>

          {/* Ranking Panel */}
          <Box
            position={{ base: "static", md: "absolute" }}
            right={{ base: "auto", md: 10, lg: 16 }}
            top={{ base: "auto", md: "50%" }}
            transform={{ base: "none", md: "translateY(-50%)" }}
            pointerEvents="auto"
            zIndex={4}
            mt={{ base: 6, md: 0 }}
            w={{ base: "100%", md: "auto" }}
          >
            <Card.Root
              bg="white"
              maxW={{ base: "100%", md: "350px" }}
              boxShadow="2xl"
              borderTop="4px solid"
              borderColor="brand.300"
            >
              <Card.Header>
                <HStack justify="space-between" flexWrap="wrap" gap={2}>
                  <Heading size={{ base: "md", md: "lg" }} color="gray.800">
                    อันดับและคะแนน
                  </Heading>
                  <Badge colorPalette="blue" size={{ base: "md", md: "lg" }}>
                    ข้อมูล 2024
                  </Badge>
                </HStack>
              </Card.Header>
              <Card.Body p={0}>
                <Table.Root size="sm">
                  <Table.Header>
                    <Table.Row bg="blue.400">
                      <Table.ColumnHeader color="white" w="60px">
                        อันดับ
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="white">
                        จังหวัด
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="white" textAlign="right">
                        คะแนน
                      </Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {topProvinces.slice(0, 5).map((item, index) => (
                      <Table.Row key={item.Rank}>
                        <Table.Cell>
                          <HStack gap={1}>
                            <Text
                              fontSize="lg"
                              fontWeight="bold"
                              color={
                                index === 0
                                  ? "brand.300"
                                  : index < 3
                                  ? "blue.400"
                                  : "gray.600"
                              }
                            >
                              {item.Rank}
                            </Text>
                            {index < 3 && (
                              <Badge
                                colorPalette={index === 0 ? "green" : "blue"}
                                size="xs"
                              >
                                ▲{index === 0 ? 1 : index + 1}
                              </Badge>
                            )}
                          </HStack>
                        </Table.Cell>
                        <Table.Cell fontWeight="semibold">
                          {item.Province}
                        </Table.Cell>
                        <Table.Cell textAlign="right">
                          <Text fontWeight="bold" color="brand.300">
                            {parseFloat(item.MFI_Score).toFixed(2)}
                          </Text>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Card.Body>
            </Card.Root>
          </Box>
        </Box>
      </Box>

      {/* What is MFI Section */}
      <Box bg="white" py={{ base: "3rem", md: "4rem" }}>
        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
        >
          <VStack gap={6} align="start" maxW="900px" mx="auto">
            <Heading size={{ base: "2xl", md: "3xl" }} color="gray.800">
              MFI คืออะไร?
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              lineHeight="tall"
            >
              MFI เป็นดัชนี &ldquo;เริ่มต้น&rdquo;
              ที่สร้างขึ้นเพื่อเป็นแผนที่นโยบายและจุดเริ่มต้นของการสนทนา
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="tall"
            >
              ดัชนีนี้ไม่ได้วัดประสบการณ์ที่เป็นจริงหรือความรู้สึก
              แต่ใช้ข้อมูลราชการอย่างเป็นทางการเพื่อวัด
              <strong>โครงสร้างความเป็นมิตร</strong>ของจังหวัด โดยตอบคำถามว่า:
              &ldquo;จังหวัดนี้มีระบบสำคัญ เช่น การเข้าถึงสุขภาพ
              ค่าจ้างตามกฎหมาย และการรวมครอบครัว
              เพื่อสนับสนุนชุมชนแรงงานข้ามชาติหรือไม่?&rdquo;
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="tall"
            >
              เราสร้างดัชนีนี้เพื่อช่วยผู้กำหนดนโยบาย NGO
              และนักวิจัยระบุแนวปฏิบัติที่ดีที่สุดและช่องว่างที่สำคัญในบริการทั่วประเทศ
            </Text>
          </VStack>
        </Box>
      </Box>

      {/* 2025 Key Findings Section */}
      <Box bg="gray.50" py={{ base: "3rem", md: "4rem" }}>
        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
        >
          <Heading
            size={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            mb={8}
            textAlign="center"
          >
            ผลการศึกษาสำคัญจากข้อมูลปี 2024
          </Heading>

          <VStack gap={6} maxW="1000px" mx="auto">
            {/* Top Province Card */}
            <Card.Root w="100%" borderLeft="4px solid" borderColor="brand.300">
              <Card.Body p={{ base: 6, md: 8 }}>
                <VStack align="start" gap={4}>
                  <Badge colorPalette="green" size="lg">
                    จังหวัดอันดับ 1
                  </Badge>
                  <Heading size={{ base: "lg", md: "xl" }} color="gray.800">
                    {topProvinces[0]?.Province || "กำลังโหลด..."}
                  </Heading>
                  <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
                    ข้อมูลปี 2024 ของเราแสดงให้เห็นว่า{" "}
                    <strong>{topProvinces[0]?.Province}</strong> มีคะแนนสูงสุด
                    โดยมีผลงานยอดเยี่ยมในด้านการยอมรับจากชุมชนและโอกาสทางเศรษฐกิจ
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold" color="brand.300">
                    คะแนน:{" "}
                    {topProvinces[0]?.MFI_Score
                      ? parseFloat(topProvinces[0].MFI_Score).toFixed(2)
                      : "-"}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Bottom Province Card */}
            {data.length > 0 && (
              <Card.Root w="100%" borderLeft="4px solid" borderColor="red.400">
                <Card.Body p={{ base: 6, md: 8 }}>
                  <VStack align="start" gap={4}>
                    <Badge colorPalette="red" size="lg">
                      ต้องการการพัฒนา
                    </Badge>
                    <Heading size={{ base: "lg", md: "xl" }} color="gray.800">
                      {data[data.length - 1]?.Province || "กำลังโหลด..."}
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
                      ข้อมูลระบุว่า{" "}
                      <strong>{data[data.length - 1]?.Province}</strong>{" "}
                      มีความท้าทายทางโครงสร้างที่สำคัญที่สุด
                      พบช่องว่างหลักในด้านความปลอดภัยในที่ทำงานและการเข้าถึงบริการสุขภาพ
                    </Text>
                    <Text fontSize="3xl" fontWeight="bold" color="red.500">
                      คะแนน:{" "}
                      {data[data.length - 1]?.MFI_Score
                        ? parseFloat(data[data.length - 1].MFI_Score).toFixed(2)
                        : "-"}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            )}

            <Box w="100%" textAlign="center" mt={6}>
              <Link href="/ranking" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  bg="linear-gradient(135deg, #519acb 0%, #8aba8a 100%)"
                  color="white"
                  fontWeight="bold"
                  px={8}
                  py={6}
                  fontSize={{ base: "md", md: "lg" }}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  ดูการจัดอันดับทั้ง 77 จังหวัด →
                </Button>
              </Link>
            </Box>
          </VStack>
        </Box>
      </Box>

      {/* What's Next Section */}
      <Box bg="white" py={{ base: "3rem", md: "4rem" }}>
        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
        >
          <VStack gap={8} align="start" maxW="900px" mx="auto">
            <Heading size={{ base: "2xl", md: "3xl" }} color="gray.800">
              ขั้นตอนต่อไป? นี่เป็นเพียง v0.1
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              lineHeight="tall"
            >
              ดัชนีจากข้อมูลปี 2024 นี้เป็นบทแรกที่สำคัญ ไม่ใช่เรื่องราวสุดท้าย
              มันสร้างขึ้นจากรากฐานที่แข็งแกร่งของข้อมูลราชการ
              แต่ยังขาดเสียงที่สำคัญที่สุด: <strong>ชุมชน</strong>
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="tall"
            >
              ขณะนี้เรากำลังมองหาพันธมิตรและนักข่าวพลเมืองเพื่อช่วยเราสร้างฉบับปี
              2026 ซึ่งจะรวม &ldquo;เรื่องราวอย่างเป็นทางการ&rdquo;
              นี้เข้ากับข้อมูล &ldquo;เรื่องราวจริง&rdquo; จากภาคสนาม
            </Text>

            <Box
              w="100%"
              p={{ base: 6, md: 8 }}
              bg="brand.50"
              borderRadius="lg"
              borderLeft="4px solid"
              borderColor="brand.300"
            >
              <VStack align="start" gap={4}>
                <Heading size={{ base: "md", md: "lg" }} color="gray.800">
                  มีส่วนร่วมกับเรา
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
                  หากคุณเป็นองค์กร NGO นักวิจัย
                  หรือสมาชิกชุมชนที่ต้องการช่วยปรับปรุงดัชนีนี้
                  เราต้องการความคิดเห็นและข้อมูลจากคุณ
                </Text>
                <a
                  href="mailto:contact@webelong.org"
                  style={{
                    display: "inline-block",
                    padding: "16px 32px",
                    backgroundColor: "#8aba8a",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  ติดต่อเรา
                </a>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
