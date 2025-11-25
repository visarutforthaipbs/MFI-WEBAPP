import type { Metadata, Viewport } from "next";
import { Mitr } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const mitr = Mitr({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-mitr",
});

export const metadata: Metadata = {
  title: "ดัชนีความเป็นมิตรต่อแรงงานข้ามชาติ (MFI)",
  description:
    "Migrant Friendly Index - ดัชนีวัดความเป็นมิตรของจังหวัดต่อแรงงานข้ามชาติในประเทศไทย พ.ศ. 2568",
  icons: {
    icon: "/logo/logo-mfi.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={mitr.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
