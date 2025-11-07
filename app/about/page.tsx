"use client";

import { Box, Heading, Text, VStack, HStack, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
        py={{ base: "2rem", md: "3rem", lg: "4rem" }}
      >
        <VStack gap={12} align="stretch">
          {/* Page Title */}
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="#4C90E2"
            textAlign="center"
          >
            เกี่ยวกับโครงการ MFI
          </Heading>

          {/* Our Mission Section */}
          <VStack gap={6} align="stretch">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="#4C90E2"
            >
              พันธกิจของเรา
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              ดัชนีความเป็นมิตรต่อแรงงานข้ามชาติ WeBelong (MFI)
              ถูกสร้างขึ้นเพื่อทำให้สิ่งที่มองไม่เห็นกลายเป็นสิ่งที่มองเห็นได้
              แรงงานข้ามชาตินับล้านคนและครอบครัวของพวกเขาเป็นส่วนสำคัญของเศรษฐกิจและสังคมไทย
              แต่การเข้าถึงบริการและความปลอดภัยของพวกเขามักจะถูกซ่อนอยู่ในข้อมูลที่ยังไม่ได้รับการวิเคราะห์
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              พันธกิจของเราคือการจัดหาเครื่องมือที่ชัดเจน เป็นกลาง
              และโปร่งใสสำหรับ:
            </Text>
            <VStack gap={4} align="stretch" pl={{ base: 4, md: 6 }}>
              <HStack align="start" gap={3}>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#4C90E2"
                  fontWeight="bold"
                >
                  •
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>ผู้กำหนดนโยบาย</strong> เพื่อระบุและทำซ้ำนโยบายที่ดี
                </Text>
              </HStack>
              <HStack align="start" gap={3}>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#4C90E2"
                  fontWeight="bold"
                >
                  •
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>องค์กรพัฒนาเอกชนและองค์กรชุมชน</strong>{" "}
                  เพื่อมุ่งเป้าทรัพยากรไปยังพื้นที่ที่ต้องการมากที่สุด
                </Text>
              </HStack>
              <HStack align="start" gap={3}>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#4C90E2"
                  fontWeight="bold"
                >
                  •
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>นักข่าวและนักวิจัย</strong>{" "}
                  เพื่อยึดเรื่องราวของพวกเขาด้วยข้อมูลที่ตรวจสอบได้
                </Text>
              </HStack>
              <HStack align="start" gap={3}>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#4C90E2"
                  fontWeight="bold"
                >
                  •
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>ประชาชน</strong>{" "}
                  เพื่อเริ่มการสนทนาที่มีข้อมูลเกี่ยวกับความเป็นมิตรต่อแรงงานข้ามชาติ
                </Text>
              </HStack>
            </VStack>
          </VStack>

          {/* 2024 Data Jumpstart Edition Section */}
          <VStack gap={6} align="stretch">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="#4C90E2"
            >
              ฉบับ "เริ่มต้น" จากข้อมูลปี 2024
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              ฉบับแรกของ MFI นี้เป็น "ดัชนีเริ่มต้น"
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              เราเชื่อว่าการเริ่มการสนทนาตอนนี้ด้วยข้อมูลที่เราสามารถตรวจสอบได้
              ดีกว่าการรอข้อมูลที่สมบูรณ์แบบซึ่งอาจไม่มีวันมาถึง
              ฉบับนี้เป็นพื้นฐานโครงสร้างที่สร้างขึ้นจากข้อมูลภาครัฐอย่างเป็นทางการเกือบทั้งหมด
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              มันแสดงให้เห็น "เรื่องราวอย่างเป็นทางการ"
              ระยะต่อไปของเราคือการเพิ่ม "เรื่องราวที่แท้จริง"
            </Text>
          </VStack>

          {/* What This Index IS vs IS NOT Section */}
          <VStack gap={6} align="stretch">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="#4C90E2"
            >
              ดัชนีนี้คืออะไร vs ไม่ใช่อะไร
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              ความโปร่งใสคือคุณค่าที่สำคัญที่สุดของเรา
              สิ่งสำคัญคือต้องเข้าใจว่าดัชนีนี้สามารถและไม่สามารถบอกคุณได้อะไรบ้าง
            </Text>

            {/* What it IS */}
            <Box
              bg="#50E3C4"
              bg-opacity={0.1}
              p={{ base: 6, md: 8 }}
              borderRadius="lg"
              borderLeft="4px solid"
              borderColor="#50E3C4"
            >
              <Heading
                as="h3"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="#4C90E2"
                mb={4}
              >
                ✅ ดัชนีนี้คือ:
              </Heading>
              <VStack gap={4} align="stretch">
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>"แผนที่นโยบาย":</strong>{" "}
                  มันแสดงให้เห็นว่าจังหวัดใดมีระบบโครงสร้างที่แข็งแกร่งบนกระดาษ
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>"จุดเริ่มต้นการสนทนา":</strong>{" "}
                  มันถูกออกแบบมาเพื่อให้คนถาม "ทำไม?"
                  มันเน้นค่าผิดปกติและระบุพื้นที่สำหรับการตรวจสอบเชิงลึก
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>โปร่งใส 100%:</strong> วิธีการเปิดเผยสู่สาธารณะ
                  ไม่ใช่คะแนน "กล่องดำ"
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>"พื้นฐานที่เป็นกลาง":</strong>{" "}
                  ใช้ตัวเลขอย่างเป็นทางการ ไม่ใช่ความคิดเห็น
                  เพื่อสร้างการจัดอันดับครั้งแรกในประเภทนี้
                </Text>
              </VStack>
            </Box>

            {/* What it IS NOT */}
            <Box
              bg="#4C90E2"
              bg-opacity={0.1}
              p={{ base: 6, md: 8 }}
              borderRadius="lg"
              borderLeft="4px solid"
              borderColor="#4C90E2"
            >
              <Heading
                as="h3"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="#4C90E2"
                mb={4}
              >
                ❌ ดัชนีนี้ไม่ใช่:
              </Heading>
              <VStack gap={4} align="stretch">
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>"คะแนนคุณภาพชีวิต":</strong> มันวัดปริมาณของบริการ
                  ไม่ใช่คุณภาพ มันสามารถนับแรงงานข้ามชาติในกองทุนสุขภาพได้
                  แต่ไม่สามารถบอกคุณได้ว่าพวกเขาได้รับการปฏิบัติด้วยความเคารพหรือไม่
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>"การสำรวจประสบการณ์จริง":</strong>{" "}
                  ดัชนีนี้ขาดเสียงของแรงงานข้ามชาติเอง มันวัดนโยบาย
                  ไม่ใช่การปฏิบัติ
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  lineHeight="tall"
                >
                  <strong>"เรื่องราวสุดท้าย":</strong> มันเป็นจุดเริ่มต้น
                  มันบอกเราว่าข้อมูลของรัฐบาลพูดอะไร
                  แต่มันไม่สามารถจับการขโมยค่าจ้าง การเลือกปฏิบัติ
                  หรืออุปสรรคในระดับชุมชน
                </Text>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </Box>
      <Footer />
    </>
  );
}
