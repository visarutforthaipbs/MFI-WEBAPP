"use client";

import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="sm"
    >
      <Box
        maxW="1200px"
        mx="auto"
        py={4}
        px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
      >
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={3}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box position="relative" w="120px" h="40px">
              <Image
                src="/logo/logo-mfi.svg"
                alt="MFI Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
                priority
              />
            </Box>
          </Link>

          <HStack gap={{ base: 3, md: 6 }} flexWrap="wrap">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: "#519acb" }}
                whiteSpace="nowrap"
              >
                หน้าแรก
              </Text>
            </Link>
            <Link href="/ranking" style={{ textDecoration: "none" }}>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: "#519acb" }}
                whiteSpace="nowrap"
              >
                จัดอันดับ
              </Text>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: "#519acb" }}
                whiteSpace="nowrap"
              >
                เกี่ยวกับ
              </Text>
            </Link>
            <Link href="/methodology" style={{ textDecoration: "none" }}>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: "#519acb" }}
                whiteSpace="nowrap"
              >
                วิธีการ
              </Text>
            </Link>
            <Link href="/get-involved" style={{ textDecoration: "none" }}>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="medium"
                color="gray.600"
                _hover={{ color: "#519acb" }}
                whiteSpace="nowrap"
              >
                ร่วมงาน
              </Text>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
