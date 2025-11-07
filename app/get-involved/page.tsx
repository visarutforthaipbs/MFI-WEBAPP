"use client";

import { Box, Heading, Text, VStack, Button, Link } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GetInvolvedPage() {
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
            ขั้นตอนต่อไป? ช่วยเราสร้างฉบับที่ 2
          </Heading>

          {/* Intro */}
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.700"
            lineHeight="tall"
            textAlign="center"
          >
            MFI จากข้อมูลปี 2024 เป็นพื้นฐานที่มีประสิทธิภาพ
            แต่ไม่ใช่เรื่องราวสุดท้าย เป้าหมายของเราคือการเคลื่อนย้ายจาก
            "เรื่องราวอย่างเป็นทางการ" นี้ (ข้อมูลสาธารณะ) ไปสู่
            "เรื่องราวที่แท้จริง" (ข้อมูลภาคสนาม)
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            lineHeight="tall"
            textAlign="center"
          >
            ขณะนี้เรากำลังแสวงหาพันธมิตรอย่างแข็งขันเพื่อช่วยเราสร้าง MFI ปี
            2026 โดยการเพิ่มข้อมูลระดับชุมชนที่ดัชนีนี้ไม่สามารถจับได้
          </Text>

          {/* For NGOs, CBOs, and Academics */}
          <Box
            bg="linear-gradient(135deg, #50E3C4 0%, #4C90E2 100%)"
            p={{ base: 8, md: 10 }}
            borderRadius="xl"
            color="white"
          >
            <VStack gap={6} align="stretch">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="white"
              >
                สำหรับ NGO องค์กรชุมชน และนักวิชาการ
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                คุณทำงานโดยตรงกับชุมชนข้ามชาติหรือไม่?
                ข้อมูลของเราตรงกับสิ่งที่คุณเห็นภาคสนามหรือไม่?
                เราต้องการเป็นพันธมิตรกับคุณเพื่อตรวจสอบผลการค้นพบของเรา
                แบ่งปันข้อมูล
                และรวบรวมเรื่องราวเชิงคุณภาพที่จะทำให้ตัวเลขเหล่านี้มีชีวิต
              </Text>
              <Box>
                <Link href="mailto:contact@webelong.org">
                  <Button
                    size={{ base: "lg", md: "xl" }}
                    bg="white"
                    color="#4C90E2"
                    _hover={{ bg: "gray.100" }}
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    px={8}
                    py={6}
                  >
                    ติดต่อทีมของเรา
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Box>

          {/* For Citizen Journalists & Community Members */}
          <Box
            bg="linear-gradient(135deg, #4C90E2 0%, #50E3C4 100%)"
            p={{ base: 8, md: 10 }}
            borderRadius="xl"
            color="white"
          >
            <VStack gap={6} align="stretch">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="white"
              >
                สำหรับนักข่าวพลเมืองและสมาชิกชุมชน
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                คุณอาศัยหรือทำงานในจังหวัดเหล่านี้หรือไม่?
                คุณมีเรื่องราวที่จะแบ่งปันเกี่ยวกับการเข้าถึงบริการ โรงเรียน
                หรือความปลอดภัยหรือไม่? เสียงของคุณมีความสำคัญต่อการสร้าง
                "เรื่องราวที่แท้จริง"
              </Text>
              <Box>
                <Link href="mailto:stories@webelong.org">
                  <Button
                    size={{ base: "lg", md: "xl" }}
                    bg="white"
                    color="#4C90E2"
                    _hover={{ bg: "gray.100" }}
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    px={8}
                    py={6}
                  >
                    แบ่งปันเรื่องราวของคุณ (แบบฟอร์มปลอดภัย)
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Box>

          {/* For Policymakers & Journalists */}
          <Box
            bg="#f7fafc"
            p={{ base: 8, md: 10 }}
            borderRadius="xl"
            borderWidth={2}
            borderColor="#4C90E2"
          >
            <VStack gap={6} align="stretch">
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="#4C90E2"
              >
                สำหรับผู้กำหนดนโยบายและนักข่าว
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="tall"
              >
                ต้องการเรียนรู้เพิ่มเติมเกี่ยวกับข้อมูล วิธีการ
                หรือผลการค้นพบของเรา?
                เราพร้อมให้บริการสำหรับการบรรยายสรุปและการสัมภาษณ์เพื่อช่วยคุณใช้ข้อมูลนี้เพื่อขับเคลื่อนการเปลี่ยนแปลงเชิงบวก
              </Text>
              <Box>
                <Link href="mailto:media@webelong.org">
                  <Button
                    size={{ base: "lg", md: "xl" }}
                    bg="#4C90E2"
                    color="white"
                    _hover={{ bg: "#3a7bc8" }}
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    px={8}
                    py={6}
                  >
                    สอบถามข้อมูลสื่อและนโยบาย
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Box>

          {/* Call to Action */}
          <Box textAlign="center" py={{ base: 8, md: 12 }}>
            <VStack gap={6}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="#4C90E2"
              >
                มาร่วมสร้างอนาคตที่เป็นมิตรต่อแรงงานข้ามชาติไปด้วยกัน
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                lineHeight="tall"
                maxW="3xl"
              >
                ไม่ว่าคุณจะเป็นนักวิจัย ผู้เคลื่อนไหว นักข่าว หรือผู้กำหนดนโยบาย
                มีบทบาทสำหรับคุณในการทำให้ดัชนีนี้แข็งแกร่งและมีผลกระทบมากขึ้น
                ติดต่อเราวันนี้เพื่อค้นหาว่าคุณสามารถมีส่วนร่วมได้อย่างไร
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
      <Footer />
    </>
  );
}
