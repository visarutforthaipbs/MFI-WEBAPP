# MFI (Migrant Friendly Index) Web Application

A Next.js web application displaying Thailand's Migrant Friendly Index (MFI) data for 2024. This index measures how friendly each province is toward migrant workers in Thailand across 5 key dimensions.

[🇹🇭 อ่านเป็นภาษาไทย](./README_TH.md)

## 🚀 Live Demo

- **GitHub Repository**: https://github.com/visarutforthaipbs/MFI-WEBAPP
- **Production URL**: Coming soon on Vercel

## About MFI

The Migrant Friendly Index (MFI) is a comprehensive measurement tool that evaluates how welcoming and supportive each province in Thailand is toward migrant workers. The index assesses 5 key dimensions:

1. **Economic Opportunities** - Job opportunities and income
2. **Health Access** - Access to healthcare services
3. **Family Welfare** - Family support and education
4. **Safety** - Personal and property safety
5. **Community Acceptance** - Social integration and acceptance

## ✨ Features

- �️ **Interactive Map** - Explore MFI scores across Thailand with Leaflet maps
- � **Province Rankings** - Complete list of all 77 provinces with score-based color coding
- 📈 **Detailed Analytics** - In-depth province analysis with radar charts (Chart.js)
- 📱 **Mobile-First Design** - Fully responsive across all devices
- 🔍 **Search & Filter** - Find provinces quickly with real-time search
- 🎨 **Custom Theme** - Brand colors (#50E3C4 and #4C90E2)
- 🇹🇭 **Full Thai Language** - Complete Thai language support
- ✨ **Custom Font** - DB HelvethaicaX Thai font
- ⚡ **Performance Optimized** - React.memo, code splitting, and optimized rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1 (App Router with Turbopack)
- **UI Library**: Chakra UI v3
- **Maps**: Leaflet with GeoJSON
- **Charts**: Chart.js (radar charts)
- **Data**: PapaParse (CSV parsing)
- **Language**: TypeScript
- **Styling**: Custom CSS with Thai fonts (DB HelvethaicaX)

## 🚀 Getting Started

First, install dependencies:

```bash
# Clone the repository
git clone https://github.com/visarutforthaipbs/MFI-WEBAPP.git
cd MFI-WEBAPP

# Install dependencies
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click "Import Project"
3. Import from GitHub: `https://github.com/visarutforthaipbs/MFI-WEBAPP`
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Deployment Configuration

The app includes a `vercel.json` file with optimal settings:

- Framework: Next.js (auto-detected)
- Region: Singapore (sin1) for best performance in Thailand
- No environment variables required (uses static CSV files)

## 📁 Project Structure

```
mfi-webapp/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Page footer
│   │   ├── ThailandMap.tsx # Interactive Leaflet map
│   │   └── RankingPanel.tsx
│   ├── about/              # About page
│   ├── methodology/        # Methodology page (optimized)
│   ├── ranking/            # Rankings page (no legend)
│   ├── province/[province] # Dynamic province detail pages
│   ├── get-involved/       # Get Involved page
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage with map & rankings
│   ├── providers.tsx       # Chakra UI provider
│   └── globals.css         # Global styles & optimizations
├── public/
│   ├── data/               # CSV data files (2024)
│   ├── geojson/            # Thailand provinces GeoJSON
│   └── fonts/              # DB HelvethaicaX fonts
├── vercel.json             # Vercel deployment config
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 📊 Data Structure

The MFI data includes:

- **Province rankings** (1-77)
- **Overall MFI scores** (calculated composite score)
- **Sub-scores for 5 dimensions**:
  - Economic Opportunities (Score_Economic)
  - Health Access (Score_Health)
  - Family Welfare (Score_Family)
  - Safety (Score_Safety)
  - Community Acceptance (Score_Community)
- **Friendliness tier classification** (Top Tier, High, Medium, Low)

Data files located in `/public/data/`:

- `MFI_Results_2025_Enhanced.csv` - Provincial MFI scores and rankings
- `JUMPSTART - MFI - [THAI]MFI Data Collection Sheet Structure.csv` - Raw data

## 🎨 Key Pages

- **Homepage** (`/`) - Hero section with interactive map and top rankings
- **Ranking** (`/ranking`) - Full 77 province rankings with search (no legend)
- **Province Details** (`/province/[name]`) - Detailed analytics with radar charts
- **Methodology** (`/methodology`) - MFI calculation methodology (optimized)
- **About** (`/about`) - Project information and objectives
- **Get Involved** (`/get-involved`) - Contribution opportunities

## 🔧 Optimizations Implemented

- ✅ **React.memo()** for expensive components (IndicatorCard, StepCard)
- ✅ **Code reduction** - Methodology page: 820 lines → 380 lines (53% reduction)
- ✅ **Dynamic imports** for client-side components (map, charts)
- ✅ **Data-driven rendering** with .map() instead of repetitive JSX
- ✅ **TypeScript strict mode** - No `any` types, proper type definitions
- ✅ **ESLint compliant** - All warnings fixed
- ✅ **Proper viewport config** - Using Next.js 16's `generateViewport`
- ✅ **Mobile-first responsive** - Optimized for all screen sizes
- ✅ **Bundle optimization** - Code splitting by route

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🌐 Production Build

Build is optimized and production-ready:

- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ All pages pre-rendered as static content (except dynamic province pages)
- ✅ Fast compilation with Turbopack (~3 seconds)

## 📝 Notes

- This application displays data from **2024** (ข้อมูล ปี 2024)
- All text and content are in Thai language
- Uses DB HelvethaicaX custom font for authentic Thai typography

## 👥 Credits

Developed by Thai PBS team for the Migrant Friendly Index project.

---

**© 2024 Thai PBS. All rights reserved.**

## License

ISC
