"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import EmotionRootStyleRegistry from "./emotion-registry";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRootStyleRegistry>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </EmotionRootStyleRegistry>
  );
}
