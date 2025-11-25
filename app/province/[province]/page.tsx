import ProvinceDetailClient from "./ProvinceDetailClient";
import { promises as fs } from "fs";
import path from "path";
import Papa from "papaparse";

// Define the type for the CSV data we need for static params
interface MFIData {
  Province: string;
  // ... other fields if needed
}

export async function generateStaticParams() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "MFI_Results_2025_Enhanced.csv"
  );
  const fileContent = await fs.readFile(filePath, "utf8");

  const { data } = Papa.parse<MFIData>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return data.map((row) => ({
    province: row.Province,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ province: string }>;
}) {
  const { province } = await params;
  return <ProvinceDetailClient province={province} />;
}
