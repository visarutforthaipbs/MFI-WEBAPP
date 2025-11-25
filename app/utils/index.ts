export interface MFIData {
  Rank: string;
  Province: string;
  MFI_Score: string;
  Score_Economic: string;
  Score_Health: string;
  Score_Family: string;
  Score_Safety: string;
  Score_Community: string;
  Tier: string;
  Score_StdDev?: string;
  Score_CV?: string;
}

export interface RawData {
  Province: string;
  "จำนวน NGO/CSO ในพื้นที่": string;
  จำนวนอุบัติเหตุ: string;
  ค่าแรงขั้นต่ำ: string;
  จำนวนแรงงานข้ามชาติที่มีประกันสุขภาพ: string;
  จำนวนแรงงานข้ามชาติ: string;
  "จำนวนเด็กนักเรียนเลข G": string;
}

export const getScoreColor = (score: number) => {
  if (score >= 40) return "#8aba8a"; // High - brand color
  if (score >= 35) return "#75AFED"; // Upper-mid - light blue
  if (score >= 30) return "#9BC5F2"; // Mid - lighter blue
  if (score >= 25) return "#C2DCF7"; // Lower-mid - very light blue
  return "#E8F2FC"; // Lowest - very pale blue
};
