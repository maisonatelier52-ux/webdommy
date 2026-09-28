import React from "react";
import HeroSection from "@/components/HeroSection";
import EditorialGrid from "@/components/EditorialGrid";
import TechFrontiersSection from "@/components/TechFrontiersSection";
import MaritimeChokepointsSection from "@/components/MaritimeChokepointsSection";
import DefenseSection from "@/components/DefenseSection";
import ForensicFinanceSection from "@/components/ForensicFinanceSection";
import GlobalMarketsSection from "@/components/GlobalMarketsSection";
import AirspaceDefenseSection from "@/components/AirspaceDefenseSection";
import WorldDiplomacySection from "@/components/WorldDiplomacySection";
import ClimateSecuritySection from "@/components/ClimateSecuritySection";
import DarkWebLeaderboardSection from "@/components/DarkWebLeaderboardSection";
import InvestigationsSpotlight from "@/components/InvestigationsSpotlight";
import TrendingCarousel from "@/components/TrendingCarousel";
import InDepthFeatured from "@/components/InDepthFeatured";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Broadsheet Front Page (Lead Story + Big Read + Live Wire) */}
      <HeroSection />

      {/* 2. Featured Investigations (3 Columns) + World Intel Briefs (4 Columns) */}
      <EditorialGrid />

      {/* 3. Technology Frontiers (1 Hero Feature + 4-Story 2x2 Grid) */}
      <TechFrontiersSection />

      {/* 4. NEW SECTION 1: Maritime Chokepoints (3-Card Horizontal Split + Naval Telemetry Ticker) */}
      <MaritimeChokepointsSection />

      {/* 5. Tactical Defense & Maritime Security (3-Column Photo Grid Model) */}
      <DefenseSection />

      {/* 6. NEW SECTION 2: Forensic Finance (Asymmetric 3-Column Broadsheet + Audit Metrics + Fast Wire) */}
      <ForensicFinanceSection />

      {/* 7. Global Markets & Trade (1 Panoramic Top Banner + 4-Column Broadsheet Row) */}
      <GlobalMarketsSection />

      {/* 8. NEW SECTION 3: Airspace Defense (4-Column Photo Gallery Broadsheet + Tactical Telemetry Banner) */}
      <AirspaceDefenseSection />

      {/* 9. World Treaties, Multilateral Trade & Diplomacy (2x2 Split Grid + Diplomatic Wire) */}
      <WorldDiplomacySection />

      {/* 10. NEW SECTION 4: Climate & Ecological Security (Field Dispatch & Quote Spotlight + 3-Story Ledger) */}
      <ClimateSecuritySection />

      {/* 11. Dark Web Top 5 Dossiers (2 Numbered Features + 3 Ranked List Items) */}
      <DarkWebLeaderboardSection />

      {/* 12. The Shadow Economy & Offshore Dossiers (Spotlight Feature + Vertical Dossier Ledger) */}
      <InvestigationsSpotlight />

      {/* 13. Perspectives & Editorial Columnists Board */}
      <TrendingCarousel />

      {/* 14. The DOMMY Daily Intelligence Newsletter */}
      <InDepthFeatured />
    </div>
  );
}
