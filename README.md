# MFI (Migrant Friendly Index) Web Application

A Next.js web application displaying Thailand's Migrant Friendly Index (MFI) data for 2025. This index measures how friendly each province is toward migrant workers in Thailand across 5 key dimensions.

[🇹🇭 อ่านเป็นภาษาไทย](./README_TH.md)

## About MFI

The Migrant Friendly Index (MFI) is a comprehensive measurement tool that evaluates how welcoming and supportive each province in Thailand is toward migrant workers. The index assesses 5 key dimensions:

1. **Economic Opportunities** - Job opportunities and income
2. **Health Access** - Access to healthcare services
3. **Family Welfare** - Family support and education
4. **Safety** - Personal and property safety
5. **Community Acceptance** - Social integration and acceptance

## Features

- 📊 Interactive dashboard with statistics
- 🔍 Search and filter by province and friendliness tier
- 📱 Responsive design
- 🎨 Custom theme with brand colors (#50E3C4 and #4C90E2)
- 🇹🇭 Full Thai language support
- ✨ Custom DB HelvethaicaX Thai font

## Tech Stack

- Next.js 16
- Chakra UI v3
- TypeScript
- Papaparse (CSV parsing)
- DB HelvethaicaX custom font

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data Structure

The MFI data includes:

- Province rankings
- Overall MFI scores
- Sub-scores for 5 dimensions:
  - Economic Opportunities
  - Health Access
  - Family Welfare
  - Safety
  - Community Acceptance
- Friendliness tier classification (High, Upper-Mid, Lower-Mid)

## License

ISC
