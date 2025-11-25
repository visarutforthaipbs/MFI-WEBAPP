import { useState, useEffect } from "react";
import Papa from "papaparse";
import { MFIData, RawData } from "../utils";

export const useMFIData = () => {
  const [data, setData] = useState<MFIData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/MFI_Results_2025_Enhanced.csv");
        const csv = await response.text();

        Papa.parse<MFIData>(csv, {
          header: true,
          complete: (results) => {
            setData(results.data.filter((row) => row.Province));
            setLoading(false);
          },
          error: (err: Error) => {
            setError(err);
            setLoading(false);
          },
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useRawData = () => {
  const [data, setData] = useState<RawData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/data/JUMPSTART - MFI  - [THAI]MFI Data Collection Sheet Structure.csv"
        );
        const csv = await response.text();

        Papa.parse<RawData>(csv, {
          header: true,
          complete: (results) => {
            setData(results.data.filter((row) => row.Province));
            setLoading(false);
          },
          error: (err: Error) => {
            setError(err);
            setLoading(false);
          },
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
