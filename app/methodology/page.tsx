"use client";

import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { memo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Memoized indicator card component to prevent re-renders
const IndicatorCard = memo(function IndicatorCard({
  number,
  title,
  data,
  reason,
  bgColor,
}: {
  number: string;
  title: string;
  data: string;
  reason: string;
  bgColor: string;
}) {
  return (
    <Box
      bg={`${bgColor}1A`}
      p={{ base: 4, md: 6, lg: 8 }}
      borderRadius="lg"
      borderLeft="4px solid"
      borderColor={bgColor}
    >
      <Heading
        as="h3"
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight="bold"
        color="#519acb"
        mb={3}
      >
        {number}: {title}
      </Heading>
      <VStack gap={2} align="stretch">
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="gray.700"
          lineHeight="tall"
        >
          <Text as="strong" fontWeight="semibold">
            ข้อมูล:
          </Text>{" "}
          {data}
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="gray.700"
          lineHeight="tall"
        >
          <Text as="strong" fontWeight="semibold">
            เหตุผล:
          </Text>{" "}
          {reason}
        </Text>
      </VStack>
    </Box>
  );
});

// Memoized step card component
const StepCard = memo(function StepCard({
  number,
  title,
  description,
  bgColor,
}: {
  number: number;
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <HStack align="start" gap={{ base: 3, md: 4 }}>
      <Box
        minW={{ base: 8, md: 10, lg: 12 }}
        h={{ base: 8, md: 10, lg: 12 }}
        bg={bgColor}
        color="white"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "md", md: "lg", lg: "xl" }}
        fontWeight="bold"
        flexShrink={0}
      >
        {number}
      </Box>
      <VStack align="stretch" gap={1} flex={1}>
        <Heading
          as="h3"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          fontWeight="bold"
          color="#519acb"
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="gray.700"
          lineHeight="tall"
        >
          {description}
        </Text>
      </VStack>
    </HStack>
  );
});

// Data arrays for cleaner code
const indicators = [
  {
    number: "I-1",
    title: "พื้นฐานทางเศรษฐกิจ",
    data: "ค่าจ้างขั้นต่ำตามกฎหมาย (กระทรวงแรงงาน)",
    reason:
      "มาตรวัดที่เรียบง่ายและแข็งแกร่งของนโยบายเศรษฐกิจพื้นฐานของจังหวัดสำหรับแรงงานทุกคน",
    bgColor: "#8aba8a",
  },
  {
    number: "I-2",
    title: "ตาข่ายความปลอดภัยด้านสุขภาพ",
    data: "จำนวนแรงงานข้ามชาติที่ลงทะเบียนในกองทุนประกันสุขภาพแรงงานข้ามชาติ (กระทรวงสาธารณสุข)",
    reason:
      "นี่คือตัวแทนที่มีประสิทธิภาพสำหรับการเข้าถึงสุขภาพ มันนับจำนวนแรงงานข้ามชาตินอกระบบ ปกส. อย่างเป็นทางการ (เช่น เด็ก ผู้อยู่ในอุปการะ แรงงานนอกระบบ) ที่ลงทะเบียนสำเร็จในตาข่ายความปลอดภัยด้านสุขภาพสาธารณะ",
    bgColor: "#519acb",
  },
  {
    number: "I-3",
    title: "การรวมครอบครัว",
    data: "จำนวนนักเรียน รหัส G (ไม่ใช่คนไทย) (สพฐ.)",
    reason:
      "นี่คือตัวแทนที่ดีที่สุดของเราสำหรับความเป็นมิตรต่อครอบครัว มันวัดจำนวนเด็กข้ามชาติที่บูรณาการสำเร็จในระบบการศึกษาสาธารณะ",
    bgColor: "#8aba8a",
  },
  {
    number: "I-4",
    title: "ความปลอดภัยในที่ทำงาน",
    data: "จำนวนการบาดเจ็บจากการทำงานสำหรับแรงงานข้ามชาติ (กระทรวงสาธารณสุข)",
    reason:
      "การวัดความปลอดภัยในที่ทำงานโดยตรง นี่คือตัวชี้วัดที่กลับด้าน ซึ่งการบาดเจ็บน้อยลง = คะแนนสูงขึ้น",
    bgColor: "#519acb",
  },
  {
    number: "I-5",
    title: "การสนับสนุนชุมชน",
    data: "การนับด้วยตนเองของเราของ NGO คลินิก และสื่อที่รู้จักที่สนับสนุนแรงงานข้ามชาติ",
    reason:
      "ตัวแทนสำหรับ ตาข่ายความปลอดภัย ที่ไม่ใช่ภาครัฐและโครงสร้างพื้นฐานชุมชนที่มีให้แรงงานข้ามชาติ",
    bgColor: "#8aba8a",
  },
];

const steps = [
  {
    title: "การเก็บรวบรวมข้อมูล",
    description:
      "เรารวบรวมชุดข้อมูลดิบ 6 ชุด (ประชากรข้ามชาติ ค่าจ้างขั้นต่ำ การลงทะเบียนกองทุนสุขภาพ นักเรียนรหัส G การบาดเจ็บจากการทำงาน และการนับการสนับสนุนชุมชน) สำหรับทั้ง 77 จังหวัด",
    bgColor: "#519acb",
  },
  {
    title: "คำนวณความหนาแน่น",
    description:
      "เพื่อเปรียบเทียบจังหวัดอย่างยุติธรรม เราแปลงตัวชี้วัดส่วนใหญ่เป็น คะแนนความหนาแน่น (เช่น นักเรียนรหัส G ต่อประชากรข้ามชาติ 10,000 คน) สิ่งนี้ป้องกันไม่ให้จังหวัดขนาดใหญ่ชนะเสมอ",
    bgColor: "#8aba8a",
  },
  {
    title: "การทำให้เป็นมาตรฐาน (0-100)",
    description:
      "เราแปลงตัวชี้วัดทั้ง 5 ตัวให้เป็นมาตราส่วน 0-100 เดียวกันโดยใช้การทำให้เป็นมาตรฐาน Min-Max จังหวัดที่มีคะแนน ดีที่สุด (เช่น ค่าจ้างสูงสุด) ได้ 100 และ แย่ที่สุด ได้ 0 คะแนนความปลอดภัยในที่ทำงานถูกกลับด้านเพื่อให้จังหวัดที่มีการบาดเจ็บน้อยที่สุดได้ 100",
    bgColor: "#519acb",
  },
  {
    title: "คะแนนสุดท้าย",
    description:
      "คะแนน MFI สุดท้ายคือค่าเฉลี่ยน้ำหนักเท่ากันที่เรียบง่ายของคะแนนที่ทำให้เป็นมาตรฐานห้าตัว (20% แต่ละตัว)",
    bgColor: "#8aba8a",
  },
];

const limitations = [
  {
    title: "ไม่มีข้อมูลเกี่ยวกับการจ้างงานอย่างเป็นทางการ",
    description:
      "รัฐบาลไม่เปิดเผยข้อมูลระดับจังหวัดสำหรับแรงงานข้ามชาติที่ลงทะเบียนในประกันสังคม (มาตรา 33) นี่คือช่องว่างสำคัญและป้องกันไม่ให้เราวัดการจ้างงานอย่างเป็นทางการที่ได้รับการคุ้มครอง",
  },
  {
    title: "ไม่มีข้อมูลเกี่ยวกับค่าจ้าง จริง",
    description:
      "เราใช้ค่าจ้างขั้นต่ำตามกฎหมาย แต่เราไม่สามารถติดตามค่าจ้างที่จ่ายจริงหรือความชุกของการขโมยค่าจ้าง",
  },
  {
    title: "ปริมาณ ไม่ใช่คุณภาพ",
    description:
      "ดัชนีของเรานับบริการ (NGO คลินิก) แต่ไม่สามารถวัดคุณภาพ การเข้าถึง หรือความไวทางวัฒนธรรมของพวกเขา",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <Box
        as="main"
        maxW="1200px"
        mx="auto"
        px={{ base: "1rem", md: "2rem", lg: "3rem" }}
        py={{ base: "1.5rem", md: "2.5rem", lg: "3.5rem" }}
      >
        <VStack gap={{ base: 8, md: 10, lg: 12 }} align="stretch">
          {/* Page Title */}
          <VStack gap={4} align="center">
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
              fontWeight="bold"
              color="#519acb"
              textAlign="center"
            >
              วิธีการของเรา
            </Heading>

            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="gray.700"
              lineHeight="tall"
              textAlign="center"
              maxW="800px"
            >
              นี่คือกระบวนการ 4 ขั้นตอนที่แน่นอนที่เราใช้ในการสร้าง MFI
              จากข้อมูลปี 2024 ดัชนีนี้โปร่งใส 100% และสามารถทำซ้ำได้
            </Text>
          </VStack>

          {/* The 5 Key Indicators */}
          <VStack gap={6} align="stretch">
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="#519acb"
            >
              5 ตัวชี้วัดหลัก
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              เรารวมชุดข้อมูลดิบ 6 ชุดเพื่อสร้างตัวชี้วัด 5
              ตัวที่มีน้ำหนักเท่ากัน:
            </Text>

            <VStack gap={4} align="stretch">
              {indicators.map((indicator) => (
                <IndicatorCard key={indicator.number} {...indicator} />
              ))}
            </VStack>
          </VStack>

          {/* The 4-Step Calculation */}
          <VStack gap={6} align="stretch">
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="#519acb"
            >
              การคำนวณ 4 ขั้นตอน
            </Heading>

            <VStack gap={4} align="stretch">
              {steps.map((step, index) => (
                <StepCard key={index} number={index + 1} {...step} />
              ))}
            </VStack>
          </VStack>

          {/* Limitations & Data Black Holes */}
          <VStack gap={6} align="stretch">
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="#519acb"
            >
              ข้อจำกัดและ &ldquo;หลุมดำข้อมูล&rdquo;
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="gray.700"
              lineHeight="tall"
            >
              ดัชนีนี้ดีเท่าที่ข้อมูลสาธารณะที่มีอยู่ การวิจัยของเราระบุ
              &ldquo;หลุมดำข้อมูล&rdquo;
              ที่สำคัญหลายประการที่ต้องได้รับการแก้ไขเพื่อให้ได้ภาพรวมที่สมบูรณ์ของความเป็นมิตรต่อแรงงานข้ามชาติ:
            </Text>

            <VStack gap={3} align="stretch" pl={{ base: 2, md: 4, lg: 6 }}>
              {limitations.map((limitation, index) => (
                <Box
                  key={index}
                  bg="red.50"
                  p={{ base: 3, md: 4, lg: 6 }}
                  borderRadius="lg"
                  borderLeft="4px solid"
                  borderColor="red.500"
                >
                  <Heading
                    as="h4"
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="red.700"
                    mb={2}
                  >
                    {limitation.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    color="gray.700"
                    lineHeight="tall"
                  >
                    {limitation.description}
                  </Text>
                </Box>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Box>
      <Footer />
    </>
  );
}
