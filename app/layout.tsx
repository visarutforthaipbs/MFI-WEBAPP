import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ดัชนีความเป็นมิตรต่อแรงงานข้ามชาติ (MFI)",
  description:
    "Migrant Friendly Index - ดัชนีวัดความเป็นมิตรของจังหวัดต่อแรงงานข้ามชาติในประเทศไทย พ.ศ. 2568",
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
