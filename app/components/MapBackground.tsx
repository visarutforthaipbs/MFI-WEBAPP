"use client";

import { Box } from "@chakra-ui/react";

export default function MapBackground() {
  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      zIndex={0}
      pointerEvents="none"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          {/* Grid pattern */}
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(156, 163, 175, 0.15)"
              strokeWidth="1"
            />
          </pattern>

          {/* Gradient overlay */}
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#f3f4f6", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#e5e7eb", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#f3f4f6", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Background gradient */}
        <rect width="100%" height="100%" fill="url(#gridGradient)" />

        {/* Grid pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Subtle circles for visual interest */}
        <circle cx="15%" cy="20%" r="150" fill="rgba(80, 227, 196, 0.03)" />
        <circle cx="85%" cy="70%" r="200" fill="rgba(76, 144, 226, 0.03)" />
        <circle cx="50%" cy="50%" r="250" fill="rgba(80, 227, 196, 0.02)" />
      </svg>
    </Box>
  );
}
