"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="linear-gradient(135deg, #4C90E2 0%, #50E3C4 100%)"
      color="white"
      py={12}
    >
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={8}
        >
          {/* About Section */}
          <VStack align="start" flex={1} gap={3}>
            <Text fontSize="lg" fontWeight="bold" color="white">
              ดัชนีความเป็นมิตรต่อแรงงานข้ามชาติ
            </Text>
            <Text fontSize="sm" color="whiteAlpha.900" maxW="400px">
              ดัชนีชี้วัดที่ใช้ในการสำรวจความเป็นมิตรต่อแรงงานข้ามชาติในประเทศไทย
              ครอบคลุมด้านโอกาสทางเศรษฐกิจ การเข้าถึงสุขภาพ ความปลอดภัย และชุมชน
            </Text>
          </VStack>

          {/* Info Section */}
          <VStack align={{ base: "start", md: "end" }} gap={3}>
            <Text fontSize="sm" fontWeight="medium" color="white">
              ข้อมูล ปี 2024
            </Text>
            <Text fontSize="xs" color="whiteAlpha.900">
              จำนวนจังหวัดที่สำรวจ: 77 จังหวัด
            </Text>
            <Text fontSize="xs" color="whiteAlpha.900">
              คะแนนเฉลี่ย MFI: 27.94
            </Text>
          </VStack>
        </Flex>

        {/* Copyright */}
        <Box mt={8} pt={6} borderTop="1px solid" borderColor="whiteAlpha.300">
          <Text fontSize="xs" color="whiteAlpha.800" textAlign="center">
            © 2025 Migrant Friendly Index. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
