export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  avatar: string;
  bio: string;
  location: string;
  twitter?: string;
  linkedin?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: "world" | "war-conflict" | "geo-politics" | "cybersecurity" | "dark-web" | "investigation";
  categoryLabel: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  image: string;
  imageCaption?: string;
  isLead?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  popularityRank?: number;
  trending?: boolean;
  flashNews?: boolean;
  tags: string[];
}

export interface CategoryInfo {
  slug: string;
  label: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { slug: "world", label: "World", description: "Global breaking news, international diplomacy, and multilateral developments." },
  { slug: "war-conflict", label: "Conflict & Defense", description: "In-depth battlefield intelligence, tactical analysis, and security updates." },
  { slug: "geo-politics", label: "Geo-Politics", description: "Strategic alliances, international relations, trade wars, and sovereign politics." },
  { slug: "cybersecurity", label: "Technology & AI", description: "Zero-day exploits, critical infrastructure threats, state-backed hacking, and defence." },
  { slug: "dark-web", label: "Dark Web & Cyber", description: "Underground marketplace intelligence, data breaches, and digital contraband investigations." },
  { slug: "investigation", label: "Investigations", description: "Independent investigative journalism, forensic finance, and deep undercover exposes." },
];

export const AUTHORS: Record<string, Author> = {
  diana: {
    id: "diana-reeves",
    name: "Diana Reeves",
    slug: "diana-reeves",
    role: "Senior Diplomatic Correspondent",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    bio: "Diana Reeves is a senior foreign affairs correspondent for DOMMY based in Europe. She has reported on international diplomatic summits, treaty negotiations, and multilateral foreign policy developments across three continents for over a decade.",
    location: "Geneva, Switzerland",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
  },
  james: {
    id: "james-calloway",
    name: "James Calloway",
    slug: "james-calloway",
    role: "Defense & Maritime Security Analyst",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    bio: "James Calloway is a defense correspondent specializing in maritime choke-points, coastal security operations, autonomous weapons systems, and naval task forces.",
    location: "London, United Kingdom",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
  },
  claire: {
    id: "claire-donovan",
    name: "Claire Donovan",
    slug: "claire-donovan",
    role: "Cybersecurity & Technology Reporter",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    bio: "Claire covers enterprise software vulnerabilities, open-source digital infrastructure, state-backed cyber intrusions, and artificial intelligence governance standards.",
    location: "San Francisco, USA",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
  },
  marcus: {
    id: "marcus-vance",
    name: "Marcus Vance",
    slug: "marcus-vance",
    role: "Investigative Financial Journalist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    bio: "Marcus Vance specializes in forensic investigations into transnational illicit capital flows, sanctions evasion networks, offshore corporate registries, and digital asset forensics.",
    location: "Washington, D.C., USA",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
  },
};

export const ARTICLES: Article[] = [
  // ==========================================
  // GEO-POLITICS (6 Articles)
  // ==========================================
  {
    id: "art-1",
    title: "High-Stakes Diplomatic Talks in Geneva Yield Preliminary Framework on Red Sea Transit Security",
    slug: "high-stakes-diplomatic-envoy-meets-leaders-peace-framework",
    excerpt: "GENEVA — Special envoys concluded intensive closed-door deliberations today in an effort to de-escalate maritime tensions and solidify terms for humanitarian stabilization across critical corridors.",
    content: [
      "In what diplomats are describing as the most substantial multilateral effort in several years, senior foreign ministry officials and international mediators concluded a marathon 12-hour session on Monday, agreeing in principle to the architecture of a regional de-escalation treaty.",
      "The talks, held under strict confidentiality at the United Nations complex in Switzerland, brought together key regional stakeholders following months of escalating naval tensions that had threatened to disrupt international shipping and energy markets across the hemisphere.",
      "According to two European delegates familiar with the discussions who spoke on the condition of anonymity, negotiations centered on the reopening of commercial maritime lanes, mutual commitments to freeze long-range coastal artillery deployments, and the structured phased exchange of detained maritime personnel.",
      "“Both delegations came to the table with a realistic appraisal of the economic and humanitarian stakes,” said one senior mediator during a late-evening press briefing. “While significant details regarding technical enforcement remain to be settled, the consensus to establish direct verification mechanisms represents a genuine milestone.”",
      "A draft working agreement circulating among delegations outlines the deployment of an independent maritime monitoring mission, supported by commercial tracking buoys and coordinated naval communication hotlines, to ensure safe passage for commercial cargo and energy tankers."
    ],
    category: "geo-politics",
    categoryLabel: "Geo-Politics",
    author: AUTHORS.diana,
    publishedAt: "August 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1400",
    imageCaption: "Senior diplomatic delegations gather for closed-door discussions at the Palais des Nations in Geneva.",
    isLead: true,
    flashNews: true,
    tags: ["Diplomacy", "GenevaSummit", "MaritimeTrade", "WorldNews"],
  },
  {
    id: "art-8",
    title: "Nine Emerging Economies Sign Multi-Billion Dollar Local Currency Settlement Accords",
    slug: "global-summit-explores-currency-swaps-de-dollarization",
    excerpt: "Finance ministers finalize framework to ease transaction friction in raw materials commerce.",
    content: [
      "Finance ministers from nine emerging economies signed a comprehensive bilateral currency settlement agreement on Tuesday, establishing direct central bank swap lines for cross-border raw materials trade.",
      "The agreement enables commercial exporters and importers to settle energy and agricultural shipments in local sovereign currencies, eliminating third-party conversion surcharges.",
      "Central bank governors stated that the clearing network will be overseen by a joint oversight board to ensure liquidity equilibrium and transparent exchange benchmarks."
    ],
    category: "geo-politics",
    categoryLabel: "Geo-Politics",
    author: AUTHORS.diana,
    publishedAt: "July 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    imageCaption: "Finance ministers and central bank delegations during the bilateral accord signing.",
    isFeatured: true,
    trending: true,
    tags: ["Economy", "Trade Policy", "Global Finance", "Markets"],
  },
  {
    id: "art-23",
    title: "Sovereignty Treaty Signed to Settle 40-Year Arctic Continental Shelf Boundary Dispute",
    slug: "sovereignty-treaty-signed-arctic-boundary-dispute",
    excerpt: "OSLO — Nordic and North American delegations establish joint maritime research zone across contested undersea ridge.",
    content: [
      "Delegates from five Arctic coastal states formalized a landmark maritime delimitation accord in Oslo on Wednesday, concluding four decades of contested continental shelf jurisdiction.",
      "Under the treaty, conflicting claims across 180,000 square kilometers of undersea seabed will transition into an internationally supervised scientific reserve, prohibiting unilateral fossil fuel exploitation.",
      "The United Nations Commission on the Limits of the Continental Shelf commended the agreement as an exemplary model of peaceful international dispute resolution."
    ],
    category: "geo-politics",
    categoryLabel: "Geo-Politics",
    author: AUTHORS.diana,
    publishedAt: "September 02, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Arctic research vessel conducting seabed bathymetry surveys in the newly demarked scientific reserve.",
    tags: ["Arctic", "Treaty", "Maritime Law", "Diplomacy"],
  },
  {
    id: "art-24",
    title: "Strategic Trade Corridor Agreement Connects Central Asian Railway Grids to Mediterranean Ports",
    slug: "strategic-trade-corridor-central-asia-mediterranean",
    excerpt: "A new multi-modal freight network promises to cut transit times for containerized cargo between East Asia and Southern Europe by 40%.",
    content: [
      "Transportation ministers from six Eurasian nations signed construction charters for the Southern Trans-Caspian Corridor on Monday in Tashkent.",
      "The $14 billion infrastructure pact will modernize gauge-switching freight hubs and build electrified double-track links connecting landlocked industrial basins directly to Mediterranean sea terminals.",
      "International development banks have confirmed primary financing tranches with construction scheduled to commence before year-end."
    ],
    category: "geo-politics",
    categoryLabel: "Geo-Politics",
    author: AUTHORS.diana,
    publishedAt: "August 30, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Intermodal rail terminal operations along the Trans-Caspian logistics corridor.",
    tags: ["Infrastructure", "Trade", "Central Asia", "Logistics"],
  },
  {
    id: "art-25",
    title: "Bilateral Semiconductor Export Pacts Signed Between East Asian Tech Hubs and European Union",
    slug: "bilateral-semiconductor-export-pacts-eu-asia",
    excerpt: "Unified export controls seek to harmonize supply chain traceability for cutting-edge lithography equipment.",
    content: [
      "European Union digital policy chiefs and East Asian trade envoys finalized a synchronized regulatory framework governing the transfer of advanced silicon manufacturing technology.",
      "The pact creates a mutual recognition system for certified commercial foundries while prohibiting unvetted secondary resales of dual-use semiconductor tools.",
      "Industry analysts observe that the treaty offers essential regulatory stability for next-generation automated fabrication facilities."
    ],
    category: "geo-politics",
    categoryLabel: "Geo-Politics",
    author: AUTHORS.diana,
    publishedAt: "August 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Advanced semiconductor fabrication cleanroom undergoing bilateral compliance audits.",
    tags: ["Semiconductors", "Trade", "Technology", "EU Policy"],
  },
  {
    id: "art-26",
    title: "Multilateral Non-Proliferation Envoys Convene in Vienna for Strategic Arsenal Oversight",
    slug: "multilateral-non-proliferation-envoys-vienna",
    excerpt: "Technical inspection protocols and uncrewed verification sensors dominate agenda at IAEA headquarters.",
    content: [
      "Nuclear non-proliferation working groups convened for a crucial five-day plenary session at the International Atomic Energy Agency in Vienna on Tuesday.",
      "Negotiations are focused on standardizing automated optical and gamma-ray telemetry monitors across enrichment facilities subject to international inspection safeguards.",
      "Chief inspectors noted that incorporating continuous tamper-evident telemetry reduces diplomatic disputes and provides real-time verification assurances."
    ],
    category: "geo-politics",
    categoryLabel: "Geo-Politics",
    author: AUTHORS.diana,
    publishedAt: "July 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Delegates assemble at the International Atomic Energy Agency plenary hall in Vienna.",
    tags: ["IAEA", "Non-Proliferation", "Diplomacy", "Security"],
  },

  // ==========================================
  // CONFLICT & DEFENSE (6 Articles)
  // ==========================================
  {
    id: "art-7",
    title: "Naval Patrols Intercept Four Uncrewed Drone Vessels Near Strategic Shipping Lanes",
    slug: "naval-task-forces-intercept-uncrewed-surface-vessels",
    excerpt: "Escort flotillas confirmed that non-kinetic countermeasures safely disabled four uncrewed craft attempting to enter container transit channels.",
    content: [
      "Coalition naval task forces operating in contested international waterways successfully intercepted and neutralized four remote-controlled surface vessels on Monday morning without incident.",
      "Naval defense spokespersons indicated that coordinated electronic warfare units disrupted the vessels' guidance links before they could approach scheduled merchant convoy formations.",
      "Commercial maritime shipping associations expressed appreciation for the prompt response while advising vessels to maintain designated escort corridors."
    ],
    category: "war-conflict",
    categoryLabel: "Conflict & Defense",
    author: AUTHORS.james,
    publishedAt: "August 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Naval patrol vessel conducting high-readiness reconnaissance in coastal transit corridors.",
    isPopular: true,
    popularityRank: 4,
    tags: ["Defense", "Maritime Security", "Naval Operations", "Conflict"],
  },
  {
    id: "art-12",
    title: "Precision Loitering Munitions Neutralize Radar Guidance Facility Near Border Sector",
    slug: "covert-drone-strike-neutralizes-arms-depot-border-enclave",
    excerpt: "Precision-guided defense systems neutralized an uncrewed radar facility threatening civilian airspace corridors.",
    content: [
      "Military defense units confirmed that precision loitering systems neutralized an uncrewed radar installation near the northern border zone early this morning.",
      "The targeted facility had reportedly been utilized to track civilian commercial airspace and coordinate unauthorized electronic interference across air traffic corridors.",
      "Air traffic controllers confirmed that all commercial airline flight routes have returned to standard scheduled flight paths."
    ],
    category: "war-conflict",
    categoryLabel: "Conflict & Defense",
    author: AUTHORS.james,
    publishedAt: "June 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Defense command monitors border perimeter surveillance telemetry.",
    tags: ["Defense", "Conflict", "Airspace Security", "Aviation"],
  },
  {
    id: "art-16",
    title: "Air Defense Networks Upgraded Across Eastern Flank Following Hypersonic Flight Tests",
    slug: "air-defense-networks-upgraded-eastern-flank",
    excerpt: "Allied military commands deploy phased-array radar batteries and interceptor missiles to reinforce airspace corridors.",
    content: [
      "Allied defense ministries announced on Thursday the operational commissioning of advanced multi-spectrum air defense batteries across three forward operating sectors.",
      "The modernized radar installations feature gallium-nitride active electronically scanned arrays capable of tracking low-radar-cross-section threats and high-velocity maneuvering gliders at extreme ranges.",
      "Military leadership stated the deployments represent a defensive counterweight designed to safeguard critical energy hubs and civilian transport infrastructure."
    ],
    category: "war-conflict",
    categoryLabel: "Conflict & Defense",
    author: AUTHORS.james,
    publishedAt: "September 05, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Phased-array early warning radar facility operating on elevated tactical alert.",
    tags: ["Air Defense", "Military", "Hypersonics", "Tactical Systems"],
  },
  {
    id: "art-17",
    title: "Submarine Cable Security Task Force Deployed to Secure Baltic Communication Nodes",
    slug: "submarine-cable-security-task-force-deployed-baltic",
    excerpt: "Naval acoustic surveillance cutters initiate 24/7 seabed patrols over critical transatlantic fibre links.",
    content: [
      "A multinational naval flotilla equipped with autonomous underwater search vehicles began continuous acoustic patrols across shallow continental shelf choke-points on Monday.",
      "The task force is tasked with preventing unauthorized seabed tampering and inspecting commercial fibre-optic cable landing stations following recent subsea acoustic anomalies.",
      "Telecommunications infrastructure operators praised the protective initiative, citing the critical nature of subsea data highways for international financial settlements."
    ],
    category: "war-conflict",
    categoryLabel: "Conflict & Defense",
    author: AUTHORS.james,
    publishedAt: "August 26, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Specialized oceanographic defense cutter monitoring seabed infrastructure arrays.",
    tags: ["Subsea Cables", "Maritime Security", "Naval Task Force", "Infrastructure"],
  },
  {
    id: "art-18",
    title: "Autonomous Electronic Countermeasure Drones Enter Operational Deployment in Coastal Straits",
    slug: "autonomous-electronic-countermeasure-drones-deployed",
    excerpt: "Naval aviation units integrate low-observable decoy drones to deflect coastal anti-ship missile guidance links.",
    content: [
      "Naval defense commands confirmed that squadron tests for shipborne electronic countermeasure unmanned aerial systems concluded with a 100% intercept success rate during live-fire littoral exercises.",
      "The autonomous craft emit broad-spectrum radiofrequency jamming patterns to mask commercial cargo formations and disrupt incoming seeker radars.",
      "Military analysts note that modular electronic warfare payloads offer cost-effective shielding compared to traditional kinetic missile interceptors."
    ],
    category: "war-conflict",
    categoryLabel: "Conflict & Defense",
    author: AUTHORS.james,
    publishedAt: "August 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Naval reconnaissance drone launch sequence aboard coastal patrol frigate.",
    tags: ["Drones", "Electronic Warfare", "Coastal Defense", "Naval Systems"],
  },
  {
    id: "art-19",
    title: "Specialized Mountain Infantry Brigades Conclude High-Altitude Reconnaissance Exercises",
    slug: "specialized-mountain-infantry-concludes-recon-exercises",
    excerpt: "Alpine combat battalions demonstrate satellite telemetry sync and cold-weather supply logistics above 4,000 meters.",
    content: [
      "Elite alpine reconnaissance brigades successfully completed a rigorous three-week cold-weather field exercise in high-altitude glaciated passes.",
      "Troops tested uncrewed robotic cargo mules, heated composite bivouac structures, and encrypted low-earth-orbit mesh communications under blizzard conditions.",
      "Commanding officers highlighted that high-altitude tactical readiness is essential for securing contested sovereign border ridges."
    ],
    category: "war-conflict",
    categoryLabel: "Conflict & Defense",
    author: AUTHORS.james,
    publishedAt: "July 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Mountain reconnaissance unit during high-altitude patrol coordination.",
    tags: ["Mountain Warfare", "Tactical Training", "Infantry", "Border Defense"],
  },

  // ==========================================
  // WORLD (6 Articles)
  // ==========================================
  {
    id: "art-10",
    title: "Strait Transit Deal Leaves Commercial Shipping Chokepoints Under Strict Escort",
    slug: "strategic-maritime-strait-reopening-deal-falls-short",
    excerpt: "Commercial carriers remain cautious as specialized naval flotillas coordinate escort convoys through key waterways.",
    content: [
      "Commercial cargo vessels began escorted transit through strategic waterways on Tuesday following the signing of a provisional maritime navigation pact between regional coast guard commands.",
      "Under the terms of the agreement, commercial convoys are accompanied by designated naval patrol craft along a verified 120-kilometer maritime corridor.",
      "Maritime insurance syndicates noted that while war-risk premiums remain elevated, the establishment of scheduled convoy timings provides essential predictability for global supply chains."
    ],
    category: "world",
    categoryLabel: "World",
    author: AUTHORS.james,
    publishedAt: "August 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Commercial container vessel navigating designated coastal escort lane.",
    isPopular: true,
    popularityRank: 5,
    tags: ["World News", "Shipping", "Maritime Trade", "Supply Chains"],
  },
  {
    id: "art-11",
    title: "Island Nation Extends Maritime Buffer Zones to Safeguard Fisheries and Critical Reefs",
    slug: "island-nation-extends-maritime-buffer-zones",
    excerpt: "Sovereignty patrol boats step up reconnaissance across shallow reefs as international flotillas conduct continuous surveillance drills.",
    content: [
      "In response to escalating regional maritime activity, authorities in the island nation have declared an expanded environmental and sovereign buffer perimeter around key offshore archipelagos.",
      "Coast guard units have been equipped with advanced long-range marine radar and automated tracking buoys to prevent unauthorized commercial dredging and illegal fishing.",
      "Diplomatic delegations from neighboring coastal states have welcomed the establishment of joint ecological monitoring committees."
    ],
    category: "world",
    categoryLabel: "World",
    author: AUTHORS.james,
    publishedAt: "July 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Coastal reconnaissance vessel operating along protected maritime reef boundaries.",
    tags: ["World News", "Sovereignty", "Environment", "Ocean Policy"],
  },
  {
    id: "art-14",
    title: "Critical Minerals Pact Established Between Southern Hemisphere Mining Nations",
    slug: "critical-minerals-pact-established-southern-hemisphere",
    excerpt: "Major lithium, copper, and rare-earth producers agree to form a cooperative trade alliance to protect export value and encourage local refining.",
    content: [
      "Ministers of natural resources from four leading mining nations signed a historic cooperative charter on Thursday, establishing the Southern Critical Minerals Alliance.",
      "The alliance is designed to coordinate investment into domestic battery chemical refining facilities, reducing raw ore exports and generating high-skilled manufacturing opportunities.",
      "Automotive and renewable energy manufacturing consortiums in Europe and Asia have already begun preliminary negotiations for direct multi-year off-take agreements."
    ],
    category: "world",
    categoryLabel: "World",
    author: AUTHORS.diana,
    publishedAt: "August 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Rare-earth processing facility operations undergoing international standards certification.",
    tags: ["World News", "Energy Transition", "Critical Minerals", "Global Trade"],
  },
  {
    id: "art-20",
    title: "Global Food Security Accord Establishes Emergency Grain Corridors Across Black Sea Ports",
    slug: "global-food-security-accord-grain-corridors",
    excerpt: "United Nations and regional trade bodies guarantee safe transit for 14 million metric tons of essential agricultural exports.",
    content: [
      "Diplomatic mediators confirmed on Wednesday that agricultural export terminals across three major coastal ports have resumed loading bulk grain carriers under the Global Food Security Accord.",
      "The agreement establishes an independent international inspection team stationed in neutral territorial waters to verify bulk cargo manifests and ensure no military equipment is transported.",
      "World Food Programme directors stated the resumption of shipments provides immediate price stabilization for vulnerable importing nations across North Africa and the Middle East."
    ],
    category: "world",
    categoryLabel: "World",
    author: AUTHORS.diana,
    publishedAt: "September 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Bulk grain carrier loading agricultural cargo under international inspection safeguards.",
    tags: ["Food Security", "Agriculture", "Global Trade", "UN"],
  },
  {
    id: "art-21",
    title: "International Climate Tribunal Mandates Cross-Border Flood Mitigation Funding for Coastal Cities",
    slug: "international-climate-tribunal-flood-mitigation",
    excerpt: "Judicial panel in The Hague rules that sovereign development funds must allocate $8 billion to low-lying delta preservation.",
    content: [
      "In a landmark international environmental ruling, an international judicial arbitration panel held that industrialized economies share enforceable obligations to co-finance tidal barrier infrastructure for vulnerable delta regions.",
      "The verdict establishes a binding escrow mechanism overseen by regional development banks to deploy emergency mangrove reforestation and sea-wall construction.",
      "Legal experts describe the decision as a decisive precedent for future cross-border environmental liability litigation."
    ],
    category: "world",
    categoryLabel: "World",
    author: AUTHORS.diana,
    publishedAt: "August 22, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Coastal delta engineering project implementing tidal flood barriers.",
    tags: ["Climate Law", "Environment", "The Hague", "Infrastructure"],
  },
  {
    id: "art-22",
    title: "Hydroelectric Dam Modernization Accord Signed Between Three Southeast Asian Neighbors",
    slug: "hydroelectric-dam-modernization-accord-southeast-asia",
    excerpt: "Cross-border river commission agrees on synchronized seasonal water discharge schedules to protect delta agriculture.",
    content: [
      "Energy and environmental ministers from three riverine states signed a comprehensive transboundary river management pact on Friday in Vientiane.",
      "The accord introduces synchronized acoustic sensors and real-time telemetry sharing along a 1,200-kilometer river basin to prevent sudden downstream dry-outs during dry seasons.",
      "Agricultural associations along lower delta estuaries welcomed the agreement, highlighting that predictable seasonal river flows are vital for rice cultivation."
    ],
    category: "world",
    categoryLabel: "World",
    author: AUTHORS.diana,
    publishedAt: "July 29, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Hydroelectric reservoir and automated spillway telemetry installation.",
    tags: ["Energy", "Water Security", "Southeast Asia", "Environment"],
  },

  // ==========================================
  // CYBERSECURITY & TECHNOLOGY (6 Articles)
  // ==========================================
  {
    id: "art-2",
    title: "Emergency Patches Deployed After Automated Attack Targets Open-Source Repositories",
    slug: "autonomous-ai-agent-infiltration-breaches-open-source-repositories",
    excerpt: "SAN FRANCISCO — Software security consortiums mobilized over the weekend to neutralize automated scripts attempting to inject unauthorized dependencies into public developer registries.",
    content: [
      "Security researchers and open-source foundation maintainers deployed emergency cryptographic patches across global package registries on Monday after discovering an automated campaign designed to tamper with upstream dependencies.",
      "The intrusion routine leveraged automated crawlers that attempted to publish lookalike packages containing subtle logic flaws aimed at bypassing standard continuous integration checks.",
      "Major developer platforms have since mandated two-factor hardware authentication and verified publisher signatures for all top-tier packages to prevent automated supply-chain contamination."
    ],
    category: "cybersecurity",
    categoryLabel: "Technology & AI",
    author: AUTHORS.claire,
    publishedAt: "August 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Security operations engineer monitoring automated repository verification streams.",
    isFeatured: true,
    isPopular: true,
    popularityRank: 1,
    flashNews: true,
    trending: true,
    tags: ["Software Security", "Cybersecurity", "Supply Chain", "Open Source"],
  },
  {
    id: "art-3",
    title: "Hospital Network Restores Systems Following Ransomware Incident",
    slug: "medical-device-giant-paralyzed-by-ransomware-infiltration",
    excerpt: "Emergency offline procedures enabled surgical teams to continue treatments while IT units remediated telemetry server outages.",
    content: [
      "A regional healthcare provider operating across six metropolitan hospitals successfully restored its patient telemetry and medical diagnostic systems on Monday following an attempted ransomware extortion attack.",
      "Hospital administrators credited strict network segmentation and isolated offline backup routines for ensuring emergency operating theaters remained operational throughout the incident.",
      "Federal cybersecurity investigators are assisting the health authority in auditing gateway firewalls and verifying that no patient confidentiality records were exfiltrated during the breach attempt."
    ],
    category: "cybersecurity",
    categoryLabel: "Technology & AI",
    author: AUTHORS.claire,
    publishedAt: "July 18, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    imageCaption: "Medical center reception and surgical telemetry suites operating under restored protocols.",
    isFeatured: true,
    tags: ["Healthcare", "Ransomware", "Data Protection", "Infrastructure"],
  },
  {
    id: "art-4",
    title: "Tech Companies Combat Social Engineering Schemes Targeting Helpdesks",
    slug: "scattered-cyber-syndicates-shift-to-insider-access",
    excerpt: "Security administrators introduce hardware token verification after criminal groups attempted to solicit unauthorized credential resets.",
    content: [
      "Enterprise security leadership across leading cloud and technology vendors is overhauling customer support authentication workflows following a coordinated wave of social engineering impersonations.",
      "Under newly issued enterprise guidelines, identity reset requests for administrative accounts now require cryptographic confirmation from secondary managers and in-person verification checks.",
      "The move follows warnings from security advisory agencies that threat actors have been targeting third-party helpdesk contractors with deceptive phone-based voice phishing tactics."
    ],
    category: "cybersecurity",
    categoryLabel: "Technology & AI",
    author: AUTHORS.claire,
    publishedAt: "June 29, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    imageCaption: "Enterprise cloud security control room during identity access audits.",
    isPopular: true,
    popularityRank: 2,
    tags: ["Corporate Security", "Social Engineering", "Identity Management"],
  },
  {
    id: "art-13",
    title: "European Union Finalizes New Directives on Sovereign AI Infrastructure and Chip Standards",
    slug: "eu-finalizes-directives-on-sovereign-ai-infrastructure",
    excerpt: "BRUSSELS — Regulatory commissioners agree on unified standards for artificial intelligence model verification, data center efficiency, and silicon traceability.",
    content: [
      "European Union trade and digital policy ministers finalized a landmark regulatory package on Wednesday setting binding security requirements for artificial intelligence infrastructure.",
      "The new rules mandate transparent provenance tracking for advanced semiconductor components and enforce strict energy-efficiency benchmarks on sovereign compute facilities.",
      "Technology industry associations stated they are working closely with regional compliance bodies to implement the technical validation standards ahead of the 2027 enforcement deadline."
    ],
    category: "cybersecurity",
    categoryLabel: "Technology & AI",
    author: AUTHORS.claire,
    publishedAt: "August 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "High-density data center racks operating under sovereign efficiency benchmarks.",
    tags: ["Artificial Intelligence", "EU Policy", "Technology", "Infrastructure"],
  },
  {
    id: "art-27",
    title: "Critical Telecom Switchboards Patched Following Disclosure of Core Firmware Vulnerability",
    slug: "critical-telecom-switchboards-firmware-vulnerability",
    excerpt: "Network operators roll out emergency microcode updates across core optical routing nodes.",
    content: [
      "Telecommunications operators across North America and Europe deployed out-of-band firmware updates on Tuesday to remediate a memory-corruption vulnerability affecting enterprise routing switches.",
      "The flaw, discovered during a joint vulnerability research audit, could theoretically have allowed remote code execution if packet filtering rules were improperly configured.",
      "Cyber defense agencies confirmed there is no evidence of active in-the-wild exploitation prior to the public patch release."
    ],
    category: "cybersecurity",
    categoryLabel: "Technology & AI",
    author: AUTHORS.claire,
    publishedAt: "September 07, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Telecommunications optical routing hardware in enterprise server facility.",
    tags: ["Telecom", "Zero-Day", "Firmware", "Infrastructure"],
  },
  {
    id: "art-28",
    title: "Zero-Knowledge Proof Cryptography Mandated for Sovereign Identity Authentication Systems",
    slug: "zero-knowledge-cryptography-mandated-sovereign-identity",
    excerpt: "Digital governance boards adopt privacy-preserving cryptographic standards for citizen credentials.",
    content: [
      "National identity regulatory bodies announced a five-year transition roadmap mandating zero-knowledge proof (ZKP) cryptographic mechanisms for digital citizenship services.",
      "The standard allows citizens to verify age, residency, or professional licenses without disclosing underlying sensitive personal identifiable records to verifying terminals.",
      "Privacy advocacy consortiums hailed the regulation as a model benchmark for democratic digital identity architectures."
    ],
    category: "cybersecurity",
    categoryLabel: "Technology & AI",
    author: AUTHORS.claire,
    publishedAt: "August 09, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Cryptographic protocol verification workstation running privacy benchmark tests.",
    tags: ["Cryptography", "Privacy", "Zero Knowledge", "Identity"],
  },

  // ==========================================
  // DARK WEB & CYBER (6 Articles)
  // ==========================================
  {
    id: "art-5",
    title: "Cyber Forum Database Leak Exposes 320,000 User Records Online",
    slug: "major-dark-web-syndicate-doxxed-database-leak",
    excerpt: "A leaked archive reveals communication threads, server access logs, and registration details from an underground messaging board.",
    content: [
      "In one of the most consequential underground disclosures of the year, a comprehensive database containing user credentials, private correspondence, and server IP logs from an invite-only cybercrime board has been published on public research repositories.",
      "Threat intelligence analysts note that the exposed records contain crucial transaction hashes and communication records connecting multiple high-profile extortion campaigns.",
      "International law enforcement agencies have initiated cross-referencing operations against existing cybercrime databases to identify key infrastructure operators."
    ],
    category: "dark-web",
    categoryLabel: "Dark Web & Cyber",
    author: AUTHORS.claire,
    publishedAt: "July 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    imageCaption: "Data forensic analysis workstation parsing leaked server database logs.",
    isPopular: true,
    popularityRank: 3,
    tags: ["Data Leak", "Cybercrime", "Dark Web", "Investigations"],
  },
  {
    id: "art-29",
    title: "International Law Enforcement Joint Task Force Seizes Major Darknet Contraband Marketplace",
    slug: "law-enforcement-seizes-darknet-marketplace",
    excerpt: "Europol and federal agents seize 14 bulletproof servers across three continents in coordinated takedown.",
    content: [
      "In a coordinated global law enforcement strike code-named Operation Blacklight, judicial authorities seized the hosting servers and darknet domain mirrors of a prominent illicit goods forum on Tuesday.",
      "The marketplace had operated for four years, facilitating over $800 million in illicit cryptocurrency transactions shielded by multi-sig escrow contracts.",
      "Federal prosecutors have unsealed indictments against five primary administrators arrested in simultaneous dawn raids across Western Europe."
    ],
    category: "dark-web",
    categoryLabel: "Dark Web & Cyber",
    author: AUTHORS.claire,
    publishedAt: "September 03, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Digital forensics command center during the marketplace server seizure.",
    tags: ["Law Enforcement", "Europol", "Darknet", "Cryptocurrency"],
  },
  {
    id: "art-30",
    title: "Underground Data Broker Syndicate Doxxed After Internal Administrator Dispute",
    slug: "underground-data-broker-syndicate-doxxed",
    excerpt: "Disgruntled conspirator publishes 45 gigabytes of internal chat logs, crypto payout receipts, and victim target lists.",
    content: [
      "An acrimonious financial dispute inside a prominent initial-access broker syndicate has resulted in the full disclosure of the group’s internal operations.",
      "The leaked archive reveals exact corporate targets, negotiation scripts used in ransomware extortions, and the real-world Telegram identities of several core negotiators.",
      "Cyber intelligence firms are actively notifying targeted enterprises whose network access tokens were cataloged in the dump."
    ],
    category: "dark-web",
    categoryLabel: "Dark Web & Cyber",
    author: AUTHORS.claire,
    publishedAt: "August 29, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Security researchers inspecting leaked threat actor communication logs.",
    tags: ["Data Broker", "Leak", "Cybercrime", "Ransomware"],
  },
  {
    id: "art-31",
    title: "Encrypted Messaging Service Zero-Day Exploit Sold for $3.5 Million on Private Cyber Auction",
    slug: "encrypted-messaging-zero-day-sold-private-auction",
    excerpt: "Bidding records on private escrow board illustrate escalating financial stakes for zero-click mobile intrusion tools.",
    content: [
      "Threat intelligence monitors have documented the sale of a remote zero-click code execution vulnerability targeting a popular cross-platform mobile messaging app on an invite-only exploit clearinghouse.",
      "The exploit payload, verified by an independent cryptographic broker, bypasses modern memory sandboxing without requiring user interaction.",
      "Security engineers from the affected vendor have initiated emergency code reviews to trace and seal the reported memory-offset logic flaw."
    ],
    category: "dark-web",
    categoryLabel: "Dark Web & Cyber",
    author: AUTHORS.claire,
    publishedAt: "August 16, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Reverse engineering interface analyzing compiled zero-day exploit assembly code.",
    tags: ["Zero-Day", "Mobile Security", "Exploits", "Dark Web"],
  },
  {
    id: "art-32",
    title: "Ransomware Cartel Infrastructure Infiltrated by Cybersecurity Researchers via Exposed SSH Key",
    slug: "ransomware-cartel-infrastructure-infiltrated-ssh-key",
    excerpt: "Misconfigured staging server allows analysts to obtain master decryption keys for 140 corporate victims.",
    content: [
      "Security researchers at a prominent cyber threat consortium gained access to an active extortion group’s command-and-control cluster after discovering an unprotected administrative SSH private key on an open code repository.",
      "The researchers quietly exfiltrated master cryptographic decryption matrices, allowing more than 140 afflicted organizations to recover locked databases without paying ransom demands.",
      "The threat group has since scrambled to decommission its public negotiation portals."
    ],
    category: "dark-web",
    categoryLabel: "Dark Web & Cyber",
    author: AUTHORS.claire,
    publishedAt: "July 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Network traffic telemetry isolating compromised threat actor staging nodes.",
    tags: ["Ransomware", "Decryption", "Threat Intel", "Cybersecurity"],
  },
  {
    id: "art-33",
    title: "Decentralized Escrow Protocol Exploit Discloses Thousands of Cybercrime Wallet Transactions",
    slug: "decentralized-escrow-protocol-exploit-discloses-wallets",
    excerpt: "Flaw in smart-contract mixing logic strips pseudonymity from darknet narcotics and ransomware settlements.",
    content: [
      "An unexpected re-entrancy bug in a privacy-focused smart contract protocol has allowed blockchain forensic investigators to trace transaction linkages across 40,000 previously shielded transfers.",
      "The exposed ledger records directly connect cryptocurrency deposits from major ransomware extortion payments to verified custodial exchange off-ramps.",
      "Financial intelligence units have filed freezing petitions with designated exchanges."
    ],
    category: "dark-web",
    categoryLabel: "Dark Web & Cyber",
    author: AUTHORS.claire,
    publishedAt: "July 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Forensic graph visualization of blockchain transaction deanonymization.",
    tags: ["Blockchain", "Smart Contracts", "Forensics", "Dark Web"],
  },

  // ==========================================
  // INVESTIGATIONS (6 Articles)
  // ==========================================
  {
    id: "art-6",
    title: "How Investigators Traced a $4.2B Cryptocurrency Mixing Network",
    slug: "secret-swiss-offshore-accounts-uncovered-sanctions-evasion",
    excerpt: "Financial analysts have mapped the complex international web of digital asset mixing services used to evade global banking regulations.",
    content: [
      "A collaborative international investigative effort has successfully unraveled a multi-billion dollar digital asset mixing architecture spanning decentralized liquidity bridges and non-compliant offshore virtual asset providers.",
      "Drawing from over three million on-chain transaction records, forensic accountants traced how illicit funds were fragmented into micro-deposits across multiple blockchain protocols before being reconverted into sovereign currencies.",
      "Financial regulators across seven jurisdictions have issued coordinated freezing orders against associated wallet clusters and custodial exchanges."
    ],
    category: "investigation",
    categoryLabel: "Investigations",
    author: AUTHORS.marcus,
    publishedAt: "June 14, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    imageCaption: "Cryptographic ledger visualization of cross-chain transaction flows.",
    isFeatured: true,
    tags: ["Financial Crime", "Forensics", "Cryptocurrency", "Regulatory Policy"],
  },
  {
    id: "art-9",
    title: "Parliamentary Panel Subpoenas Pharmaceutical Research Memos in Clinical Trial Probe",
    slug: "parliamentary-probe-expands-covert-drug-trials-data-exfiltration",
    excerpt: "Investigative findings examine regulatory compliance in overseas clinical trials.",
    content: [
      "A parliamentary oversight committee has issued formal subpoenas for internal research communications from major pharmaceutical corporations following reports of regulatory discrepancies in overseas trials.",
      "The inquiry is focused on whether standard informed consent guidelines were strictly observed across contracted regional clinic networks during phase-three therapeutic testing.",
      "Public health ethicists and legal experts are scheduled to testify before the committee next month regarding cross-border healthcare oversight."
    ],
    category: "investigation",
    categoryLabel: "Investigations",
    author: AUTHORS.marcus,
    publishedAt: "August 05, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    imageCaption: "Medical laboratory research facility where regulatory compliance audits are underway.",
    tags: ["Healthcare", "Investigation", "Regulatory Oversight", "Bioethics"],
  },
  {
    id: "art-15",
    title: "Investigation Unmasks Clandestine Maritime Ghost Fleet Transporting Sanctioned Crude",
    slug: "investigation-unmasks-clandestine-maritime-ghost-fleet",
    excerpt: "Satellite radar data and maritime insurance registries expose over 80 decommissioned tankers operating under flags of convenience.",
    content: [
      "A four-month collaborative investigation by DOMMY's investigative desk has revealed the operational methods of an international shadow fleet transporting sanctioned crude oil through international waters.",
      "Using synthetic aperture radar imagery and automated identification system (AIS) telemetry discrepancies, journalists documented how tankers performed ship-to-ship transfers under cover of darkness to obscure cargo origins.",
      "Maritime safety authorities have issued urgent advisories regarding the environmental and navigational risks posed by aging, uninsured tankers operating in shallow coastal straits."
    ],
    category: "investigation",
    categoryLabel: "Investigations",
    author: AUTHORS.marcus,
    publishedAt: "August 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Commercial tanker vessel tracked via satellite maritime surveillance.",
    tags: ["Investigations", "Sanctions", "Maritime", "Energy", "Forensics"],
  },
  {
    id: "art-34",
    title: "Offshore Registry Leak Exposes $18 Billion in Hidden Real Estate Holdings Across European Capitals",
    slug: "offshore-registry-leak-exposes-hidden-real-estate",
    excerpt: "Leaked corporate registry dossiers reveal complex layers of shell companies used to obscure luxury property ownership.",
    content: [
      "A leaked cache of 2.4 million incorporation documents from four offshore fiduciary trusts has exposed the beneficial owners of over 1,200 luxury real estate assets across London, Paris, and Geneva.",
      "Forensic financial analysis shows how international politically exposed persons used nominee directors and bearer-share structures to circumvent municipal anti-money laundering registry filings.",
      "European tax authorities have announced immediate forensic audits targeting associated legal advisers and corporate services providers."
    ],
    category: "investigation",
    categoryLabel: "Investigations",
    author: AUTHORS.marcus,
    publishedAt: "September 04, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Corporate financial district where offshore holding trusts maintain registered agent offices.",
    tags: ["Offshore", "Tax Evasion", "Real Estate", "Investigations"],
  },
  {
    id: "art-35",
    title: "Forensic Audit Uncovers Opaque Government Defense Procurement Contracts in Aviation Supply Chains",
    slug: "forensic-audit-uncovers-aviation-procurement-contracts",
    excerpt: "Classified billing records reveal $640 million in inflated subcontracting fees paid to unvetted aerospace middlemen.",
    content: [
      "A three-month investigative audit into international military aviation supply chains has uncovered systematic billing markups by intermediary brokers holding exclusive distribution rights for critical titanium fasteners and avionics spares.",
      "Whistleblower affidavits and unredacted transport manifests demonstrate that components were repeatedly routed through shell entities in low-tax jurisdictions before delivery to defense assembly lines.",
      "Government oversight committees have launched formal inquests into departmental procurement oversight."
    ],
    category: "investigation",
    categoryLabel: "Investigations",
    author: AUTHORS.marcus,
    publishedAt: "August 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Aerospace logistics facility subject to procurement oversight audit.",
    tags: ["Defense Procurement", "Forensics", "Aviation", "Whistleblower"],
  },
  {
    id: "art-36",
    title: "How International Cartels Laundered Billions Through Synthetic Mineral Smuggling Networks",
    slug: "international-cartels-laundered-synthetic-minerals",
    excerpt: "Cross-border export records expose how lab-grown gemstone shipments were over-invoiced to clean illicit narcotics revenues.",
    content: [
      "Financial crime prosecutors in three countries have unsealed a comprehensive indictment detailing a multi-year trade-based money laundering scheme utilizing synthetic diamonds and rare-earth alloys.",
      "By vastly inflating customs declarations for lab-grown crystals, the syndicate transferred over $2.1 billion across sovereign banking systems without triggering standard currency transaction reports.",
      "Customs inspection agencies have introduced mandatory spectroscopic certification for high-value mineral exports."
    ],
    category: "investigation",
    categoryLabel: "Investigations",
    author: AUTHORS.marcus,
    publishedAt: "July 31, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Customs laboratory inspection facility verifying mineral export certificates.",
    tags: ["Money Laundering", "Minerals", "Forensics", "Financial Crime"],
  },
];

// Helper functions for data access
export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getLeadArticle(): Article {
  return ARTICLES.find((a) => a.isLead) || ARTICLES[0];
}

export function getLatestArticles(limit: number = 5): Article[] {
  return ARTICLES.filter((a) => !a.isLead).slice(0, limit);
}

export function getPopularArticles(limit: number = 5): Article[] {
  return ARTICLES.filter((a) => a.isPopular || a.popularityRank).sort(
    (a, b) => (a.popularityRank || 99) - (b.popularityRank || 99)
  ).slice(0, limit);
}

export function getFeaturedArticles(limit: number = 4): Article[] {
  return ARTICLES.filter((a) => a.isFeatured).slice(0, limit);
}

export function getArticlesByCategory(category: string): Article[] {
  return ARTICLES.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentArticleId: string, category: string, limit: number = 3): Article[] {
  return ARTICLES.filter((a) => a.id !== currentArticleId && a.category === category).slice(0, limit);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return Object.values(AUTHORS).find((author) => author.slug.toLowerCase() === slug.toLowerCase());
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return ARTICLES.filter((a) => a.author.slug.toLowerCase() === authorSlug.toLowerCase());
}

export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS);
}

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.categoryLabel.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}
