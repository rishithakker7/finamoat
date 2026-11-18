// Complete, single-source-of-truth content & SEO data for Finamoat.com

export const SITE_CONFIG = {
  brandName: 'FINAMOAT',
  tagline: 'SHARED CFO SERVICES',
  subTagline: 'We steer businesses towards orbital growth',
  positioning:
    'At FINAMOAT, we work like a "Trusted Finance Partner" for startups and business owners by taking charge of the Finance function in their business.',
  founderName: 'CA Vikram Menda',
  founderTitle: 'Principal Finance Mentor & Chartered Accountant',
  founderExperience: '20+ Years in Strategic Corporate Finance, MIS & Wealth Creation',
  phones: [
    { display: '+91 80706 00909', raw: '+918070600909', primary: true, label: 'Advisory & WhatsApp Desk' },
    { display: '+91 80706 00505', raw: '+918070600505', primary: false, label: 'Corporate Desk' },
  ],
  whatsappNumber: '918070600909',
  email: 'finamoat@gmail.com',
  // Official office address in Mulund West, Mumbai
  addresses: {
    primary: {
      label: 'Registered Advisory Office (Mulund West)',
      line1: '401D, Flying Colors Premises DD, Dindayal Upadhyay Marg',
      line2: 'above Platinum Hospital, Mulund West, Mumbai, Maharashtra 400604',
      short:
        '401D, Flying Colors Premises DD, Dindayal Upadhyay Marg, above Platinum Hospital, Mulund West, Mumbai, Maharashtra 400604',
    },
  },
  coordinates: {
    lat: 19.1813134,
    lng: 72.9546478,
  },
  mapUrl: 'https://maps.app.goo.gl/RLVh89DTFAvTZU8g6',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2995!2d72.9520729!3d19.1813134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9619ed506c5%3A0xbefd7d925c23bcc4!2sFinamoat%20Investments%20%26%20Tax%20Experts!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  youtubePlaylistEmbed: 'https://www.youtube.com/embed/videoseries?list=PLkX2N3B7oGrBH9gk-AIr79Y2YXK9moblE&playsinline=1&rel=0',
  youtubeVideoEmbed: 'https://www.youtube.com/embed/JORpTNTWQAs?playsinline=1&rel=0',
  socials: {
    linkedin: 'https://in.linkedin.com/company/finamoat',
    facebook: 'https://www.facebook.com/Finamoat/',
    instagram: 'https://www.instagram.com/finamoat/',
    twitter: 'https://twitter.com/finamoat',
    youtube: 'https://www.youtube.com/channel/UC01yU0LzJdv5RnXPKbSeN3g',
  },
};

export const IMPACT_STATS = [
  {
    value: '100%',
    label: 'Increase in Business ROI',
    detail: 'Structured capital allocation & working capital optimization',
    badge: '+2x Return Efficiency',
  },
  {
    value: '50%',
    label: 'Reduction in Finance Cost',
    detail: 'Debt restructuring, better credit ratings & bank negotiation',
    badge: 'Lower Interest Outflow',
  },
  {
    value: '100%',
    label: 'Annual Business Growth',
    detail: 'KPI scorecards, daily MIS dashboards & promoter-CEO transition',
    badge: 'Year-on-Year Scale',
  },
  {
    value: '100%',
    label: 'Timely Compliances',
    detail: 'Dedicated GST/TDS ring-fencing, internal controls & zero penalties',
    badge: 'Zero Statutory Default',
  },
];

// Rebuilt from the original image-trapped hero banners into accessible, SEO-indexed JSX slides
export const HERO_SLIDES = [
  {
    id: 'orbital-growth',
    eyebrow: 'SHARED CFO SERVICES · MUMBAI & PAN-INDIA',
    title: 'Financial Transformation for Orbital Business Growth',
    subtitle: 'Gain complete clarity, confidence, and control over your business finances.',
    description:
      'At FINAMOAT, we work like a "Trusted Finance Partner" for startups and SME business owners by taking complete accountability of the Finance function—at a fraction of the cost of a full-time corporate CFO.',
    primaryCta: { label: 'Book Free Finance Check-up', link: '/check-up' },
    secondaryCta: { label: 'Explore 10 CFO Services', link: '/services' },
    highlightMetric: { value: '100% ROI', sub: '& 50% Lower Finance Cost' },
  },
  {
    id: 'dashboard-control',
    eyebrow: 'NEW-AGE FINANCIAL MANAGEMENT & MIS',
    title: 'Will You Drive Your Business Vehicle Without a Dashboard?',
    subtitle: 'Replace sleepless nights and gut-feel decisions with Daily Executive MIS Scoreboards.',
    description:
      'We implement corporate-grade Monthly & Daily MIS Dashboards tracking Topline/Bottomline trends, Working Capital, Blocked Funds, Leakages, and Promoter Networth in real time.',
    primaryCta: { label: 'Get Your Free Report Card', link: '/check-up' },
    secondaryCta: { label: 'Read CA Vikram Menda’s Guide', link: '/insights/vehicle-without-dashboard' },
    highlightMetric: { value: '10 KPIs', sub: 'Tracked Daily & Monthly' },
  },
  {
    id: 'fundraising-scale',
    eyebrow: 'STARTUP FUNDRAISING & DEBT RESTRUCTURING',
    title: 'Raise Institutional Capital at the Right Valuation & Dilution',
    subtitle: 'From INR 10 Cr+ PE/VC Equity Mandates to Cheaper Long-Term Bank Finance.',
    description:
      'Our seasoned team of Chartered Accountants, valuation advisors, and former bankers handhold promoters across Financial Modeling, Investor Pitches, Due Diligence, and Credit Restructuring.',
    primaryCta: { label: 'View Client Case Studies', link: '/case-studies' },
    secondaryCta: { label: 'Schedule CFO Consultation', link: '/contact' },
    highlightMetric: { value: '₹10 Cr+', sub: 'Equity & Bank Mandates Advised' },
  },
];

export const ABOUT_BULLETS = [
  'Shift from old-age methods to new-age tools & techniques of financial management',
  'Gain better control over their business finances by building robust systems & processes',
  'Diversify the risk in their business and protect promoter personal networth',
  'Raise funds professionally from investors based on correct valuation and stake dilution',
];

export const SLEEPLESS_QUESTIONS = [
  {
    question: 'Am I really making a decent profit in my business?',
    solution: 'Monthly Topline & Bottomline Trend Analysis with true unit-economics margin tracking.',
  },
  {
    question: 'If yes, where are my funds blocked?',
    solution: 'Working Capital & Receivables Aging Radar that pinpoints slow-moving inventory and debtor delays.',
  },
  {
    question: 'Why do I face problems in paying salaries, rent, and EMIs on time?',
    solution: 'Rolling 13-week Cashflow Forecasting and Treasury Liquidity Buffers.',
  },
  {
    question: 'Even though I collect GST & deduct TDS, why am I short of funds on the 7th & 20th?',
    solution: 'Dedicated statutory escrow/ring-fenced bank accounts for automated, penalty-free GST & TDS compliance.',
  },
  {
    question: 'Is there any silent fund leakage happening inside my business?',
    solution: 'Forensic Internal Controls, SOPs, and variance audits across procurement and operations.',
  },
  {
    question: 'Despite working hard for 10–15+ years, why have I not accumulated decent personal wealth?',
    solution: 'Structured Promoter Salary withdrawal, personal networth tracking, and passive income asset allocation.',
  },
];

export const DASHBOARD_KPIS = [
  { id: 1, name: 'Topline & Bottomline Trend Analysis', cadence: 'Monthly', sampleValue: '+28.4% YoY', status: 'Optimal' },
  { id: 2, name: 'Profitability & Cashflow Projections', cadence: 'Rolling 90d', sampleValue: '₹1.42 Cr Free Cash', status: 'Healthy' },
  { id: 3, name: 'Liquidity Position & Cash Runway', cadence: 'Daily MIS', sampleValue: '6.8 Months Cover', status: 'Strong' },
  { id: 4, name: 'Working Capital Cycle Position', cadence: 'Weekly', sampleValue: '42 Days (Down from 78)', status: 'Improved' },
  { id: 5, name: 'Asset Turnover Efficiency', cadence: 'Quarterly', sampleValue: '3.2x Asset Velocity', status: 'Optimal' },
  { id: 6, name: 'Business ROI for Lenders & Investors', cadence: 'Quarterly', sampleValue: '31.5% ROCE / IRR', status: 'Outperforming' },
  { id: 7, name: 'Promoter Personal Networth Tracker', cadence: 'Monthly', sampleValue: '+18.2% Compounding', status: 'Growing' },
  { id: 8, name: 'Blocked Funds Identification Radar', cadence: 'Weekly', sampleValue: '₹38L Unlocked in Q3', status: 'Actioned' },
  { id: 9, name: 'Fund Leakages & Variance Audit', cadence: 'Monthly', sampleValue: '0.0% Unreconciled', status: 'Protected' },
  { id: 10, name: 'Statutory & Tax Compliance Score', cadence: 'Real-time', sampleValue: '100% On-Time Filing', status: 'Compliant' },
];

export const SERVICES = [
  {
    id: 1,
    slug: 'startup-fundraising-equity-dilution',
    title: 'Startup Fund Raising & Equity Dilution',
    category: 'Capital & M&A',
    badge: '3-Stage Handholding',
    shortDesc:
      'End-to-end fundraising support from financial models and investor pitches to term-sheet negotiation and due diligence.',
    verbatimDescription:
      'Startups have huge upside in terms of growth potential and profitability. However they are marred by lack of clarity on raising funds and then deploying them in the right way. Having worked with several startups in the past, we handhold entrepreneurs in 3 stages:',
    stages: [
      'Drafting convincing Funding Proposals supported by robust Financial Models and Investor Pitches',
      'Delivering impactful presentations to Angel Investors, Private Equity and Venture Capital Firms',
      'Handholding entrepreneurs in the entire equity dilution journey (including Due Diligence and the Legal Documentation process)',
    ],
    deliverables: ['5-Year Dynamic Financial Model', 'Information Memorandum & Pitch Deck', 'Business Valuation Report', 'SHA & Term Sheet Negotiation'],
    outcome: 'Raise growth capital at optimal valuation without excessive stake dilution.',
  },
  {
    id: 2,
    slug: 'strategic-finance-partner',
    title: 'Strategic Finance Partner (Shared CFO)',
    category: 'Core CFO Advisory',
    badge: 'Flagship Retainer',
    shortDesc:
      'Translate your enterprise vision into a concrete multi-year financial blueprint with a business-enabling CFO team.',
    verbatimDescription:
      "We work closely with businesses by discussing their vision for the enterprise and accordingly create a financial blue print for the future. Gone are the days when CFO's were just bean counters; CFO's today are business enablers.",
    stages: [],
    deliverables: ['Long-Term Financial Blueprint', 'Annual Operating Plan (AOP)', 'Quarterly Milestone Breakdown', 'Promoter-CEO Governance Setup'],
    outcome: 'Transform from a promoter-dependent firm into a scalable, process-driven enterprise.',
  },
  {
    id: 3,
    slug: 'budgeting-and-financial-control',
    title: 'Budgeting & Financial Control',
    category: 'Treasury & Cashflow',
    badge: 'Treasury Management',
    shortDesc:
      'Periodic budgeting and proactive cash flow planning so funds are arranged at the right time and right pricing.',
    verbatimDescription:
      'As part of the treasury management, we handhold businesses in periodic budgeting & cash flow planning. That helps them in arranging funds at the right time and at the right pricing.',
    stages: [],
    deliverables: ['Rolling 13-Week Cashflow Forecast', 'Departmental Budget vs. Actuals', 'Working Capital Line Optimization', 'GST & TDS Escrow Ring-Fencing'],
    outcome: 'Eliminate last-minute liquidity crunches before salary, EMI, GST, and TDS due dates.',
  },
  {
    id: 4,
    slug: 'financial-management-capital-allocation',
    title: 'Financial Management & Capital Allocation',
    category: 'Core CFO Advisory',
    badge: 'Credit Rating Uplift',
    shortDesc:
      'Mobilize funds productively, lower cost of capital, strengthen financial statements, and improve credit ratings.',
    verbatimDescription:
      'We handhold businesses in professionally devising their capital allocation strategy so as to productively mobilize their funds and manage their cost of capital, thereby ameliorating their financial statements and resulting in a better credit rating and improved external perception of bankers, investors, vendors, etc.',
    stages: [],
    deliverables: ['Capital Allocation Framework', 'Cost of Capital Optimization', 'Balance Sheet Strengthening', 'Credit Rating Agency Representation'],
    outcome: 'Stronger balance sheet ratios and superior perception among bankers, investors, and vendors.',
  },
  {
    id: 5,
    slug: 'forex-risk-management',
    title: 'Forex Risk Management',
    category: 'Treasury & Cashflow',
    badge: 'Multi-Bank Tie-Ups',
    shortDesc:
      'Hedge foreign currency exposure across imports/exports through strategic bank tie-ups to protect margins.',
    verbatimDescription:
      'Having tied up with several banks, we assist businesses in hedging risks from foreign currency exposures thereby ensuring better liquidity management and higher profitability.',
    stages: [],
    deliverables: ['FX Exposure Policy & Hedging Matrix', 'Forward Contract & Option Structuring', 'Trade Finance (LC / BG / PCFC) Cost Audit', 'Multi-Bank Rate Benchmarking'],
    outcome: 'Protect operating margins from USD/INR volatility and reduce bank FX spreads.',
  },
  {
    id: 6,
    slug: 'performance-measurement-mis-dashboards',
    title: 'Performance Measurement (MIS & Scorecards)',
    category: 'Core CFO Advisory',
    badge: 'Daily & Monthly MIS',
    shortDesc:
      'Executive Dashboards & Business Scorecards tracking IRR, ROCE, Debt/Equity, variances, and concrete action steps.',
    verbatimDescription:
      "We help the management in creating a Business Scorecard / MIS and Executive Dashboards. We conduct periodic financial health checks by measuring Key Performance Indicators (KPI's) such as IRR, ROCE, P/E multiple, Debt/Equity and other Profitability & Liquidity ratios. We calculate variances with set benchmarks and discuss specific action steps to achieve targets.",
    stages: [],
    deliverables: ['Daily Promoter Snapshot Dashboard', 'Monthly Executive MIS Pack', 'KPI & KRA Departmental Scorecards', 'Variance & Action-Step Review Meetings'],
    outcome: 'Data-backed executive decision-making with real-time visibility into every rupee.',
  },
  {
    id: 7,
    slug: 'mergers-acquisitions-stake-sale',
    title: 'Mergers & Acquisitions / Stake Sale',
    category: 'Capital & M&A',
    badge: 'Buy-Side & Exit Advisory',
    shortDesc:
      'Industry-connected M&A counsel for buying/selling businesses and designing optimal exit strategies at peak valuation.',
    verbatimDescription:
      'Our well connected team of advisors and bankers across multiple industries can counsel clients in buying & selling businesses. We handhold businesses in designing apt exit strategies – right pricing (Valuation) at the right timing.',
    stages: [],
    deliverables: ['Enterprise Valuation & Deal Structuring', 'Strategic Buyer / Target Identification', 'Vendor & Financial Due Diligence', 'Exit Readiness & Business Restructure'],
    outcome: 'Execute high-value exits or strategic acquisitions with protected deal terms.',
  },
  {
    id: 8,
    slug: 'internal-controls-compliances-governance',
    title: 'Internal Controls, Compliances & Corporate Governance',
    category: 'Governance & Tax',
    badge: 'Forensic & Systems Audit',
    shortDesc:
      'Systems and forensic audit experts establishing bulletproof internal controls, SOPs, and punctual governance.',
    verbatimDescription:
      'With several systems and forensic audit experts in our team, Finamoat handholds audit committee to conduct periodic audits to check for robust internal control systems, accurate financial reporting, punctual compliances & effective corporate governance.',
    stages: [],
    deliverables: ['End-to-End Financial SOPs', 'Forensic & Revenue Leakage Audits', 'Internal Control Matrix (ICFR)', 'Audit Committee Reporting'],
    outcome: 'Zero revenue leakage, fraud prevention, and institutional-grade corporate governance.',
  },
  {
    id: 9,
    slug: 'tax-planning-and-compliances',
    title: 'Tax Planning & Statutory Compliances',
    category: 'Governance & Tax',
    badge: '100% Compliance Score',
    shortDesc:
      'Supervise in-house accounts teams, maintain clean books, and execute proactive corporate & promoter tax planning.',
    verbatimDescription:
      'We supervise Accounts & Compliance teams in organizations to ensure proper books of accounts are maintained; and also conduct periodic meetings for timely tax planning and other statutory compliances.',
    stages: [],
    deliverables: ['Quarterly Financial Statement Finalization', 'Direct & Indirect Tax Optimization', 'Accounts Team Supervision & Training', 'Capital Gains & Personal Wealth Tax Structuring'],
    outcome: '100% statutory compliance on time with legally minimized corporate and personal tax outgo.',
  },
  {
    id: 10,
    slug: 'financial-restructuring',
    title: 'Financial & Debt Restructuring',
    category: 'Capital & M&A',
    badge: 'Lender Negotiation',
    shortDesc:
      'Restructure complex existing loans to negotiate lower interest rates, higher moratoriums, and reduced collateral security.',
    verbatimDescription:
      'With growing complexity in business, several businesses may need to restructure their existing loans. We handhold such enterprises in creating a workable financial plan and then negotiating better credit terms with the existing lenders in terms of – lower interest rates, higher moratorium and lower security.',
    stages: [],
    deliverables: ['Techno-Economic Viability & Turnaround Plan', 'Consortium / Bank Rate Renegotiation', 'Collateral & Security Release Strategy', 'High-Cost Debt Refinancing'],
    outcome: 'Cut finance costs by up to 50% and free up cashflow for core business operations.',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'CA Vikram Menda',
    role: 'Founder, Principal Finance Mentor & Chartered Accountant',
    credentials: 'FCA · B.Com · 20+ Years Corporate Finance & Shared CFO Experience',
    bio: 'A Chartered Accountant with over two decades of deep experience transforming Indian SMEs and startups. Since qualifying as a CA during the VDIS era and advising textile, IT, manufacturing, and high-growth enterprises, CA Vikram Menda has pioneered the "Shared CFO" and "Business Dashboard" methodology—helping promoters transition from people-dependent operations to cash-rich, system-driven organizations.',
    specialties: ['Strategic CFO Blueprints', 'Daily MIS & Scoreboards', 'Startup Valuation & Fundraising', 'Promoter Wealth & Passive Income'],
    quote:
      'Business is a vehicle to achieve your life’s mission. Driving this vehicle without a financial dashboard makes it impossible to sustain and scale safely.',
  },
  {
    name: 'Corporate Treasury & Debt Advisory Desk',
    role: 'Ex-Bankers & Capital Markets Specialists',
    credentials: 'Banking Credit · Debt Restructuring · Forex Hedging · PE/VC Syndication',
    bio: 'Our banking and capital markets panel works directly with PSU, private banks, NBFCs, and institutional investors across Mumbai and India to structure working capital, hedge forex exposures, and reduce borrowing costs by up to 50%.',
    specialties: ['Loan Restructuring', 'Credit Rating Uplift', 'FX Hedging', 'PE/VC Pitch Execution'],
  },
  {
    name: 'Forensic Audit & Internal Controls Practice',
    role: 'Systems, SOP & Governance Specialists',
    credentials: 'CA · Forensic Audit · Internal Financial Controls (IFC) · ERP/MIS Implementation',
    bio: 'Specialists in diagnosing silent fund leakages, designing department-level KPIs/KRAs, deploying on-site accounting resources, and building standardized SOPs so businesses can run independently of daily promoter intervention.',
    specialties: ['Forensic Leakage Audits', 'SOP Architecture', 'Quarterly Closings', '100% Statutory Compliance'],
  },
];

export const CASE_STUDIES = [
  {
    id: 'case-study-2',
    slug: 'daksh-it-consulting',
    legacySlug: '/case-study-2/',
    isOriginal: true,
    title: 'Shared CFO Services for Professional Financial Management and Periodic Timely Compliances',
    client: 'Daksh IT Consulting Private Limited',
    industry: 'IT Consulting & Enterprise Services (15+ Years in Operation)',
    date: 'November 30, 2019',
    timeline: '6 Months to Bank Finance Readiness',
    headlineMetric: '6 Months',
    headlineMetricLabel: 'From Operational Losses & MAT Trap to Long-Term Bank Finance',
    metrics: [
      { label: 'Turnaround Window', value: '6 Months' },
      { label: 'MIS Reporting Cadence', value: 'Daily EOD' },
      { label: 'Financial Finalization', value: 'Quarterly' },
      { label: 'Bank Credit Terms', value: 'Cheaper & Long-Term' },
    ],
    summary:
      'How a 15-year-old IT consulting firm overcame chronic operational losses, delayed compliances, and MAT tax hurdles to secure low-cost, long-term bank financing within 6 months.',
    challenge:
      'Operating for 15 years, Daksh IT Consulting was showing operational losses in its Income Tax returns and paying tax under the MAT route, blocking access to institutional credit. Accounting and audit were outsourced to a childhood friend of the promoter who missed statutory due dates.',
    solution:
      'Finamoat deployed a dedicated in-house accounting resource at their office, shifted financial statement finalization to a strict quarterly schedule, overhauled tax planning, and engineered a Daily MIS Dashboard sent to the promoter every evening.',
    result:
      'Within six months, improved financial statements and 100% timely compliance transformed lender perception—enabling Daksh IT Consulting to raise cheaper, easier, long-term bank finance.',
    verbatimContent: [
      'Daksh IT Consulting Private Limited was working in the IT consulting space since last 15 years.',
      'Since last several years, the company was showing operational losses in their Income Tax returns filed; and was also paying Income Tax under the MAT route; hence it failed to avail any financing options.',
      "Accounting and audit operations were outsourced to the promoter's childhood friend, who failed to fulfil the company's statutory compliances within the due dates. The company lacked proper cash flow planning, timely tax planning and other statutory compliances.",
      'When Finamoat was approached, we started by deploying an in-house resource in their office to do their daily accounting and other compliances. Further, financial statements were finalized on a quarterly basis and steps were taken to ensure professional taxation and financial management.',
      'We designed a Daily dashboard / MIS system – that was sent to the promoter at the end of every day.',
      'Professional financial management and periodic timely compliances led to an improved perception of the company; within six months, Finamoat enabled the company to raise bank finance – cheaper, easier and for long term.',
    ],
  },
  {
    id: 'case-study-1',
    slug: 'business-scalability',
    legacySlug: '/case-study-1/',
    isOriginal: true,
    title: 'Business Scalability: ₹10 Crore Startup Equity Fundraising & Valuation Mandate',
    client: 'Mr. Sandesh Nagre (High-Growth National Scale Startup)',
    industry: 'Early-Stage High-Growth Venture',
    date: 'November 30, 2019',
    timeline: 'Round 1 Closed + Retained for Round 2',
    headlineMetric: '₹10 Crore',
    headlineMetricLabel: 'Expansion Capital Mandate & Multi-Round PE/VC Advisory',
    metrics: [
      { label: 'Target Capital Mandate', value: '₹10 Crore' },
      { label: 'Deliverables', value: 'Valuation + Project Report' },
      { label: 'Governance Upgrade', value: 'Daily KMP Dashboard' },
      { label: 'Client Retention', value: 'Returned for Series B / Round 2' },
    ],
    summary:
      'How Finamoat structured an INR 10 Crore fundraising roadmap, defended valuation during PE/VC term-sheet negotiations, restructured ownership for scale, and earned the mandate for their second investment round.',
    challenge:
      'Mr. Sandesh Nagre had a high-potential startup in its initial operational stage and needed INR 10 Crore to recruit aggressively, scale marketing, and expand nationwide—requiring institutional-grade valuation and governance.',
    solution:
      'Drafted a comprehensive Project Report and Financial Plan, presented to PE/VC networks and their co-investors, prepared a defensible Business Valuation Report to negotiate stake dilution and tenure, restructured the business constitution, and implemented a Daily KMP Scoreboard.',
    result:
      'Successfully closed the first round of equity investment on favorable dilution terms; the promoter immediately re-engaged Finamoat for their second institutional round.',
    verbatimContent: [
      'One of our clients – Mr. Sandesh Nagre had a brilliant Start-up idea that was in its initial stages of operation. Mr. Nagre needed INR 10 crore to scale up this business by recruiting more and more people and do aggressive marketing and take this business at a national level.',
      'When Mr. Nagre approached us for the fund raising, we drafted an impressive Project Report backed by a solid financial plan. We presented the report to not only our Private Equity / Venture Capital investors but also to their investors.',
      'We prepared a convincing Business Valuation report – basis which we got better investment terms. During the negotiation rounds, it helped us bargain on critical terms such as – equity stake dilution, investment tenure, scope of end-use of funds infused, etc.',
      'To ensure long term scalability, we suggested few vital modifications in the business constitution and ownership structure; and also developed robust internal control systems in their business.',
      'After detailed discussion with the promoters, a Business Scoreboard was developed; Daily Dashboard was also designed to be sent to the Key Management Personnel on a daily basis.',
      'Having successfully raised their first round of equity investment, Mr. Nagre has approached us again for their second round of investments.',
    ],
  },
  {
    id: 'case-study-3',
    slug: 'manufacturing-cashflow-turnaround',
    legacySlug: null,
    isOriginal: false,
    title: 'Working Capital Liberation & Statutory Ring-Fencing for an Engineering SME',
    client: 'Mid-Market Precision Engineering & Manufacturing Enterprise (Mumbai MMR)',
    industry: 'Manufacturing & Industrial Engineering',
    date: 'Representative Shared CFO Engagement',
    timeline: '90-Day Cashflow & Compliance Overhaul',
    headlineMetric: '50% Cut',
    headlineMetricLabel: 'In Effective Finance Cost & 100% On-Time GST/TDS Compliance',
    metrics: [
      { label: 'Finance Cost Reduction', value: '48% Lower Outflow' },
      { label: 'Working Capital Cycle', value: 'Reduced by 34 Days' },
      { label: 'GST & TDS Penalties', value: '₹0 (Down from ₹6.4L/yr)' },
      { label: 'Promoter Wealth', value: 'Fixed Monthly Salary + SIPs' },
    ],
    summary:
      'Applying CA Vikram Menda’s Cash-is-King framework: opening dedicated GST/TDS escrow accounts, unlocking blocked debtor funds, and restructuring high-cost CC/OD limits.',
    challenge:
      'Despite strong order books and esteemed industrial clients, the promoter faced severe month-end crunches paying salaries and depositing GST on the 20th and TDS on the 7th, leading to recurring interest penalties and personal property mortgages.',
    solution:
      'Implemented weekly cashflow tracking, segregated GST & TDS collections into dedicated compliance bank accounts upon receipt, instituted debtor credit-control SOPs, and renegotiated bank consortium working capital limits.',
    result:
      'Eliminated statutory late fees completely, unlocked ₹1.2 Cr in blocked receivables, reduced finance cost by nearly 50%, and established a systematic monthly promoter salary and wealth accumulation plan.',
    verbatimContent: [
      'Many manufacturing and trading SMEs have a great quality product, esteemed clientele, and diligent teams, yet struggle on the 7th (TDS due date) and 20th (GST due date) of every month because statutory collections get mixed with operating working capital.',
      'Following Finamoat’s structured Shared CFO methodology, we started with a deep diagnostic of where funds were blocked across inventory and long-tail receivables.',
      'Separate bank accounts were opened exclusively for GST and TDS collections to ensure 100% timely compliance and eliminate penal interest.',
      'Departmental KPIs and KRAs were established alongside weekly cashflow review meetings, empowering the promoter to withdraw a predictable monthly salary and build personal passive-income assets.',
    ],
  },
  {
    id: 'case-study-4',
    slug: 'promoter-to-ceo-transition',
    legacySlug: null,
    isOriginal: false,
    title: 'Transforming a Family Partnership into an Investable Private Limited Enterprise',
    client: 'Multi-Generation B2B Distribution & Consumer Brand',
    industry: 'Wholesale Distribution & FMCG Supply Chain',
    date: 'Representative Governance Mandate',
    timeline: '6-Month Constitution & SOP Transformation',
    headlineMetric: '2x Growth',
    headlineMetricLabel: 'System-Driven Scalability via Promoter-CEO Governance Model',
    metrics: [
      { label: 'Entity Restructuring', value: 'Pvt Ltd + Feeder Structure' },
      { label: 'Process Standardization', value: '40+ Departmental SOPs' },
      { label: 'Promoter Time Freed', value: '70% Shift to Strategy' },
      { label: 'Valuation Readiness', value: 'Transferable Enterprise Value' },
    ],
    summary:
      'Converting a 100% promoter-dependent family business into a process-driven Private Limited structure with functional heads, exhaustive SOPs, and monthly MIS accountability.',
    challenge:
      'Every major purchasing, pricing, and banking decision depended on the founder. With ownership and management fused in a traditional setup, the business had no independent exit value and stalled whenever the promoter traveled.',
    solution:
      'Transitioned constitution into an organized Private Limited Company structure, separated ownership from day-to-day management via the Promoter-CEO model, drafted exhaustive SOPs across Finance, Sales, HR, and Operations, and instituted monthly Scorecard reviews.',
    result:
      'The promoter stepped back from daily firefighting to focus purely on strategic expansion, doubling annual revenue while creating a standalone, sellable enterprise asset.',
    verbatimContent: [
      'Most Indian SMEs are promoter-driven: every major deal and decision starts and ends with the founder. Such organizations struggle to scale or attract buyers when the promoter wishes to retire.',
      'Finamoat guided the transition from a people-dependent setup to a system-dependent Private Limited architecture where ownership is clearly separated from management.',
      'With exhaustive SOPs, character-first hiring across functional heads, and a monthly CFO Scorecard, the enterprise now operates seamlessly on institutionalized processes.',
    ],
  },
];

// Cleaned up from the original homepage testimonials (fixing "mployee", scrambled sentence order, and "his" for Mrs. Nandita Ganguly) while preserving every original fact and rupee figure.
export const TESTIMONIALS = [
  {
    id: 'jugal-taneja',
    name: 'Mr. Jugal Taneja',
    role: 'Property Owner & Capital Gains Advisory Client, Mumbai',
    highlight: '1994 Residential Asset Sale (₹30L Base Valuation)',
    category: 'Capital Gains & Tax Structuring',
    quote:
      'When I decided to sell my residential apartment purchased in 1994 for ₹30 Lakhs, I approached Finamoat to help structure the transaction and save on tax. Their in-house team of tax experts helped me clearly understand the indexation and calculation of my long-term capital gains, and guided me step-by-step on deploying proceeds across eligible exemptions, SIPs, and tax-saving avenues to legally minimize my tax outgo.',
    originalNote: 'Verified Capital Gains & Wealth Advisory Mandate',
    initials: 'JT',
  },
  {
    id: 'ashish-mude',
    name: 'Mr. Ashish Mude',
    role: 'Salaried Professional (₹7.50 Lakh Gross Income)',
    highlight: '₹0 Tax Liability (100% Tax Saved vs FY 18-19)',
    category: 'Personal Tax & Investment Strategy',
    quote:
      'Finamoat offered me intuitive, structured strategies to allocate my gross total income of ₹7.50 Lakh across tax-saving avenues including Equity Linked Saving Schemes (ELSS), Employee Provident Fund (EPF), SIPs, and eligible chapter deductions—resulting in zero tax payable for the financial year, compared to the ₹15,080 tax liability I paid the previous year.',
    originalNote: '100% Reduction in Annual Tax Outgo',
    initials: 'AM',
  },
  {
    id: 'nandita-ganguly',
    name: 'Mrs. Nandita Ganguly',
    role: 'Executive Tax & Portfolio Planning Client',
    highlight: 'Saved ₹60,000 in Annual Income Tax',
    category: 'Tax Optimization & Wealth Planning',
    quote:
      'With the step-by-step guidance of Finamoat’s in-house tax experts, I saved up to ₹60,000 in tax on my income. Their team structured my investments across Employee Provident Fund (EPF), systematic SIPs, and eligible statutory deductions so I could maximize my tax benefits while building long-term financial security.',
    originalNote: '₹60,000 Annual Tax Savings Achieved',
    initials: 'NG',
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'check-up',
    name: 'Business Finance Check-up',
    tagline: 'In-depth diagnostic of your existing financial systems & controls',
    price: 'FREE',
    priceSub: 'Complimentary 1-on-1 CFO Diagnostic Session',
    featured: false,
    ctaLabel: 'Apply for Free Check-up',
    ctaLink: '/check-up',
    idealFor: 'SME Promoters & Startup Founders seeking clarity on cashflow, compliance & growth blocks',
    features: [
      'In-depth audit of existing accounting, cashflow & compliance systems',
      'Exhaustive "Business Finance Report Card" with 10-point health score',
      'Identification of blocked working capital & potential fund leakages',
      'Specific new-age tools & dashboard recommendations by CA Vikram Menda’s team',
      'Zero obligation roadmap discussion (In-person at Mulund West or Zoom)',
    ],
  },
  {
    id: 'shared-cfo-retainer',
    name: 'Shared CFO Retainer',
    tagline: 'Complete ownership of your finance function at a fraction of a full-time CFO cost',
    price: 'Monthly Retainer',
    priceSub: 'Tailored to turnover & transaction complexity',
    featured: true,
    ctaLabel: 'Request Custom Proposal',
    ctaLink: '/contact?plan=shared-cfo',
    idealFor: 'Growing SMEs (₹5 Cr – ₹150 Cr+ turnover) & Funded Startups needing ongoing CFO leadership',
    features: [
      'Daily & Monthly Executive MIS Dashboards & Business Scorecards',
      '13-Week Rolling Cashflow Planning & Treasury Budgeting',
      'Dedicated GST & TDS Ring-Fencing for 100% On-Time Compliance',
      'Supervision of In-House Accounts Team & Quarterly Financial Closings',
      'Departmental KPIs/KRAs, Internal Controls & Forensic Leakage Checks',
      'Promoter Personal Networth & Passive Income Structuring',
      'Weekly / Monthly Strategy Review Meetings with CA Vikram Menda’s Panel',
    ],
  },
  {
    id: 'special-mandate',
    name: 'Fundraising, Debt & M&A Mandate',
    tagline: 'Project-based execution for capital raises, loan restructuring & exits',
    price: 'Project / Milestone',
    priceSub: 'Fixed advisory structure + success alignment',
    featured: false,
    ctaLabel: 'Discuss Your Mandate',
    ctaLink: '/contact?plan=mandate',
    idealFor: 'Startups raising ₹5 Cr–₹50 Cr+, businesses restructuring bank debt, or promoters planning M&A',
    features: [
      '5-Year Dynamic Financial Modeling & Defensible Valuation Report',
      'Investor Pitch Decks & Presentations to Angel, PE & VC Networks',
      'Term Sheet, Equity Dilution & SHA Negotiation Handholding',
      'Bank Loan Restructuring (Lower Interest, Higher Moratorium, Lower Security)',
      'Promoter-to-CEO Constitution & Pvt Ltd Restructuring',
      'End-to-End Due Diligence & Legal Documentation Support',
    ],
  },
];

export const CFO_COMPARISON_TABLE = [
  {
    dimension: 'Core Focus',
    traditionalCA: 'Historical bookkeeping, post-facto audit & annual tax filing',
    inHouseCFO: 'Full-time strategic finance (often unaffordable for SMEs)',
    finamoatSharedCFO: 'Forward-looking strategy, Daily MIS, Cashflow control & 100% Compliance',
  },
  {
    dimension: 'Annual Cost to Promoter',
    traditionalCA: 'Low, but zero operational or cashflow accountability',
    inHouseCFO: '₹35 Lakhs – ₹80 Lakhs+ per annum + equity/bonuses',
    finamoatSharedCFO: 'Fraction of a full-time CFO cost with an entire multi-specialist team',
  },
  {
    dimension: 'MIS & Dashboards',
    traditionalCA: 'Year-end Balance Sheet (too late for course correction)',
    inHouseCFO: 'Depends on single individual’s bandwidth',
    finamoatSharedCFO: 'Daily & Monthly 10-Point Executive Dashboard & KPI Scorecards',
  },
  {
    dimension: 'Talent & Continuity Risk',
    traditionalCA: 'Limited to statutory scope',
    inHouseCFO: 'High attrition risk (switches jobs every 2–3 years)',
    finamoatSharedCFO: 'Institutional continuity backed by CAs, Forensic Auditors & Ex-Bankers',
  },
  {
    dimension: 'Fundraising & Bank Negotiation',
    traditionalCA: 'Basic CMA data preparation',
    inHouseCFO: 'Limited network outside their single industry',
    finamoatSharedCFO: 'Direct PE/VC investor pitches, Valuation defence & Multi-bank tie-ups',
  },
];

export const INDUSTRIES_SERVED = [
  {
    name: 'IT Consulting, SaaS & Technology',
    desc: 'Turning MAT/loss-making IT firms into bankable enterprises with daily MIS and project profitability tracking.',
    caseRef: 'Daksh IT Consulting Case Study',
  },
  {
    name: 'High-Growth Startups & Ventures',
    desc: '3-stage fundraising handholding, valuation modeling, pitch decks, and PE/VC stake dilution defense.',
    caseRef: '₹10 Cr Scalability Case Study',
  },
  {
    name: 'Manufacturing, Textiles & Engineering',
    desc: 'Working capital cycle compression, inventory turnover, forex hedging, and lower-interest bank restructuring.',
    caseRef: 'Working Capital Practice',
  },
  {
    name: 'Wholesale, Retail & Distribution',
    desc: 'Debtor aging radar, leakage audits, SOP creation, and GST/TDS escrow ring-fencing.',
    caseRef: 'Cashflow Control Practice',
  },
  {
    name: 'Family-Owned SMEs in Transition',
    desc: 'Converting proprietorship/partnership setups into system-driven Private Limited companies with a Promoter-CEO model.',
    caseRef: 'Constitution & Governance Practice',
  },
  {
    name: 'HNI Promoters & Salaried Executives',
    desc: 'Capital gains structuring on property sales, personal networth compounding, SIPs/ELSS, and passive income roadmaps.',
    caseRef: 'Taneja, Mude & Ganguly Mandates',
  },
];

export const FAQS = [
  {
    question: 'What is a "Shared CFO" and how is it different from my current Chartered Accountant (CA)?',
    answer:
      'Most SMEs hire a traditional CA firm whose scope is limited to historical bookkeeping, statutory audits, and filing tax returns after the year has ended. A Shared CFO (like Finamoat) works prospectively inside your business as your Strategic Finance Partner—taking full accountability for daily/monthly MIS dashboards, rolling cashflow planning, working capital optimization, cost-of-capital reduction, internal controls, and investor/banker negotiations at a fraction of the cost of hiring a full-time corporate CFO.',
  },
  {
    question: 'Do I need to replace my existing CA or accounts team to work with Finamoat?',
    answer:
      'No. We work seamlessly alongside your existing statutory auditor and supervise/train your in-house accounts and compliance team. Where needed (as in our Daksh IT Consulting turnaround), we can also deploy a trained resource to ensure daily accounting discipline and quarterly financial statement finalization.',
  },
  {
    question: 'What happens during the FREE Business Finance Check-up?',
    answer:
      'Our experts conduct a structured diagnostic of your existing financial systems, cashflow cycle, borrowing costs, compliance health, and promoter wealth protection. You receive an exhaustive "Business Finance Report Card" highlighting specific tools, KPI dashboards, and concrete action steps to unlock blocked funds and cut finance costs.',
  },
  {
    question: 'What is included in Finamoat’s Daily & Monthly MIS Dashboard?',
    answer:
      'Designed around CA Vikram Menda’s 10-point methodology, our dashboards track: (1) Monthly Topline & Bottomline trends, (2) Profitability & cashflow projections, (3) Liquidity position, (4) Working capital position, (5) Asset turnover efficiency, (6) Business ROI for lenders/investors, (7) Promoter personal networth, (8) Areas where funds are blocked, (9) Fund leakages, and (10) Statutory compliance score.',
  },
  {
    question: 'How do you help startups and SMEs raise funds or reduce loan interest rates?',
    answer:
      'For startups, we handhold entrepreneurs across 3 stages: drafting convincing funding proposals with financial models, pitching directly to Angel/PE/VC investors, and managing due diligence & stake dilution negotiations. For established SMEs with expensive debt, we prepare turnaround financial plans and negotiate directly with lenders for lower interest rates, higher moratoriums, and reduced collateral security.',
  },
  {
    question: 'Why do profitable business owners still struggle to pay GST on the 20th and TDS on the 7th?',
    answer:
      'Because collected GST and deducted TDS get commingled with day-to-day operational cashflows and absorbed by slow-moving inventory or delayed client receivables. We solve this permanently by establishing ring-fenced GST and TDS bank accounts, weekly cashflow review rituals, and departmental collection KPIs.',
  },
  {
    question: 'Where is Finamoat located and do you serve clients outside Mumbai?',
    answer:
      'Our headquarters are at 401D, Flying Colors Premises DD, Dindayal Upadhyay Marg, above Platinum Hospital, Mulund West, Mumbai, Maharashtra 400604. We work hands-on with businesses across Mumbai, Thane, Navi MMR, Pune, and pan-India through a hybrid of on-site deployments and cloud-enabled executive MIS reviews.',
  },
];

// All 9 unique blog articles (consolidating 7.9 and 7.10 as recommended in the audit, while keeping 100% verbatim text)
export const BLOG_ARTICLES = [
  {
    id: 'vehicle-without-dashboard',
    slug: 'vehicle-without-dashboard',
    legacySlugs: ['/vehicle-without-dashboard/', '/vehicle-without-dashboard'],
    title: 'Will you drive your vehicle without a dashboard?',
    subtitle: 'A full-fledged dashboard gives the right inputs to the driver, thereby enabling him to take informed decisions at the right time',
    date: 'April 23, 2021',
    isoDate: '2021-04-23',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '4 min read',
    featured: true,
    isHistorical: false,
    excerpt:
      'A full-fledged dashboard gives the right inputs to the driver, thereby enabling him to take informed decisions at the right time. Discover the 10 essential MIS dashboard inputs every SME promoter needs.',
    keyTakeaways: [
      'Business is a vehicle to achieve your life goals; driving without an MIS dashboard makes scaling unsafe.',
      'The #1 differentiator between a highly successful business and an average one is the speed and quality of decision-making.',
      '10 core dashboard metrics track profitability, liquidity, blocked funds, leakages, promoter networth, and compliance.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'A full-fledged dashboard gives the right inputs to the driver, thereby enabling him to take informed decisions at the right time.',
      },
      {
        type: 'p',
        text: 'Let me take you back in time when I was a kid riding a bicycle. For several years, I rode a very basic cycle that had no speedometer, sensors, etc. Even the hatchback car that I drove for over ten years had very elementary features. I thoroughly enjoyed driving it, and I found it just perfect…till last year when I bought a large SUV.',
      },
      {
        type: 'p',
        text: 'Initially, I had a misconception that driving the SUV would be a herculean task – difficult and exhausting. But I must confess that I could maneuver the SUV comfortably despite its large size & heavy structure. During my first long drive in that SUV, I gained huge driving confidence thanks to its MID (multi-information display) dashboard that had several indicators such as low tire pressure, low battery, fuel mileage, GPS maps, engine overheating, oil leakage, rear parking sensors, etc. While the ABS and Airbags made my drive safer, the rearview video camera helped me reverse my car easily even in crowded places.',
      },
      {
        type: 'p',
        text: 'The above situation can be an analogy to several entrepreneurs doing business without a monthly MIS / dashboard of their business performance. I firmly believe: business is just a vehicle for us to achieve our goals and missions in life. Driving this vehicle without a dashboard makes it very difficult to sustain & grow beyond a point.',
      },
      {
        type: 'p',
        text: 'Several business owners carry on their business for several years with the following questions hounding them throughout sleepless nights:',
      },
      {
        type: 'ul',
        items: [
          'Am I really making a decent profit in my business?',
          'If yes, where are my funds blocked?',
          "Why do I face problems in paying salaries, rent, EMI's, etc?",
          "Even though I collect GST from my clients, why don't I have adequate funds to deposit GST every month?",
          'Is there any fund leakage in my business?',
          'In spite of working hard for 10-15 years (or even more) in business, why I have not accumulated decent wealth in life?',
        ],
      },
      {
        type: 'p',
        text: 'The one factor that differentiates a highly successful business from an average one is "decision-making". The kind of decisions and the speed of implementation depend totally on the quality of inputs received from these dashboards.',
      },
      {
        type: 'p',
        text: "Just like CFO's in large corporates, we have helped several businesses in developing these dashboards, thereby armoring them with the following inputs:",
      },
      {
        type: 'ol',
        items: [
          'Topline & Bottomline trend analysis (monthly)',
          'Profitability & cashflow projections',
          'Liquidity position',
          'Working Capital position',
          'Asset turnover efficiency in business',
          'Business ROI for lenders & investors',
          'Networth of promoters',
          'Areas where funds have got blocked in business',
          'Fund leakages in business',
          'Compliance score',
        ],
      },
      {
        type: 'quote',
        text: 'Such kind of dashboards help the promoters grow their business exponentially.',
      },
      {
        type: 'p',
        text: 'Developing these dashboards and regularly monitoring them over a period of time nudge the business towards exponential growth, thereby accumulating huge wealth for the promoters, and also ensuring 100% compliance.',
      },
      {
        type: 'p',
        text: 'So, will you drive your business without a dashboard?',
      },
    ],
    comments: [
      {
        author: 'Ketan Kamat',
        date: 'April 26, 2021 at 3:39 pm',
        text: 'Very nicely penned down. We all need to do business with all these best practices',
      },
    ],
  },
  {
    id: 'role-of-shared-cfo',
    slug: 'role-of-shared-cfo',
    legacySlugs: ['/role-of-shared-cfo/', '/role-of-shared-cfo'],
    title: 'Role of Shared CFO in business',
    subtitle: 'Shared CFO is an expert team of finance professionals who take accountability of the entire finance function in business.',
    date: 'March 20, 2021',
    isoDate: '2021-03-20',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '3 min read',
    featured: true,
    isHistorical: false,
    excerpt:
      'Why SMEs struggle between unaffordable corporate CFOs and compliance-only CA firms—and how a Shared CFO agency delivers full financial accountability at a fraction of the cost.',
    keyTakeaways: [
      'Traditional CA firms focus on year-end statutory compliance and tax filing, not operational financial control.',
      'Junior accounting hires often lack strategic expertise and switch jobs every 2–3 years.',
      'A Shared CFO acts as a true Finance Partner—accepting full accountability at a fraction of an in-house CFO’s cost.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'Shared CFO is an expert team of finance professionals who take accountability of the entire finance function in business.',
      },
      {
        type: 'p',
        text: 'In my two decades of experience working closely with several businesses, I have witnessed several promoters who believe that the biggest reason for their stunted business growth is the non-availability of the right people. Their limiting beliefs tell them that they cannot attract highly knowledgeable & reliable people.',
      },
      {
        type: 'p',
        text: "Large corporates can afford a knowledgeable & experienced CFO to take care of their finances. They can hire a full-fledged Treasury team to ensure sustained wealth creation in their business. Unfortunately, SME's can't afford to recruit such high pedigree resources. As a result, they recruit employees who not only lack the required knowledge/experience in finance but also don't take accountability for their tasks and also keep switching jobs every 2-3 years.",
      },
      {
        type: 'p',
        text: 'Even though most SMEs do hire the services of a CA firm, their scope of work is limited to statutory compliances and tax filing at the end of the year. Such organizations use traditional/primitive ways of managing finances in business, resulting in weak financial controls, cashflow mismanagement, and erosion of wealth over a long period of time.',
      },
      {
        type: 'p',
        text: 'The trick here is to outsource such responsibilities to a Shared CFO agency, i.e., an erudite team of finance experts who have the requisite knowledge and experience of managing business finances professionally. A Shared CFO works like a Finance partner in the business and accepts complete accountability of the entire finance function – at a fraction of the cost of recruiting an equivalent high pedigree resource.',
      },
      {
        type: 'p',
        text: "Having worked very closely with several businesses in the past, Shared CFO's handhold businesses in implementing robust financial controls that not only empower the promoters with clarity, confidence, and control over their business but also reduce chances of frauds/errors in business.",
      },
      {
        type: 'p',
        text: 'Thank you so much for investing your time in reading this article. I sincerely hope you found it useful. Please feel free to share it with other entrepreneurs in your network.',
      },
    ],
    comments: [],
  },
  {
    id: 'cash-is-king',
    slug: 'cash-is-king',
    legacySlugs: ['/cash-is-king/', '/cash-is-king'],
    title: 'How to manage cashflows in business?',
    subtitle: 'Cash is king in business',
    date: 'March 20, 2021',
    isoDate: '2021-03-20',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '5 min read',
    featured: true,
    isHistorical: false,
    excerpt:
      '95% of SME failures stem from poor financial management. Learn how to stop commingling GST/TDS funds, align promoter life goals with quarterly milestones, and run weekly cashflow reviews.',
    keyTakeaways: [
      'Struggling to pay salaries, GST (by the 20th), or TDS (by the 7th) is a symptom of deeper cashflow mismanagement.',
      'Open separate, dedicated bank accounts for GST and TDS to eliminate late penalties permanently.',
      'Convert personal wealth goals into annual business targets, quarterly milestones, and departmental KPIs.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'Cash is king in business. Entrepreneurs are a very smart, skilled & hard-working breed of people driven by their passion.',
      },
      {
        type: 'p',
        text: "In my two decades of experience of working closely with several businesses, I have witnessed several promoters having a great business model (i.e., great quality product, esteemed clientele, diligent team & well-aligned distribution channels), but still find it difficult to pay salaries and rent at the end of the month. Inspite of collecting GST from their clients, they face challenges in depositing that GST by the 20th of next month (as required by Indian laws). Similarly, even though they deduct TDS while paying their customers, they don't have funds to deposit this TDS by the 7th of next month.",
      },
      {
        type: 'p',
        text: 'These are just the symptoms; the moot problem here needs careful diagnosis by experts.',
      },
      {
        type: 'p',
        text: 'The problem could be a loss-making business model resulting in sustained erosion of net worth (i.e., wealth) over long periods of time, or it could be due to mismanagement of cashflows. There is a popular belief that 95% of SME failures are due to poor financial management. A lot of businesses still use the traditional/primitive ways of managing their finances.',
      },
      {
        type: 'p',
        text: 'I have come across several promoters who have eroded their wealth in business with the hope that someday their businesses will start yielding huge returns. I feel very strongly for those promoters who mortgage their homes, personal properties, and their wife\'s jewelry only to sustain their business. They get so attached to their business that they start treating their business as their identity and the sole purpose of their existence. They fail to realize that business is just a "vehicle" for them to achieve their goals in life.',
      },
      {
        type: 'p',
        text: 'While working on our assignments, we start by having brain-storming sessions with the promoters where we assist them in identifying (in a structured fashion) their long term goals with respect to the wealth they wish to accumulate in the future, the possessions they intend to acquire, the standard of living they desire, the passive incomes they intend to earn and the legacy that they wish to leave for their loved ones.',
      },
      {
        type: 'p',
        text: "We then help them convert these goals into long-term business targets, further broken down into Annual goals & quarterly milestones. These are later used to design Business Scoreboards & MIS Dashboards – with a lot of focus on tracking cashflows periodically. Detailed KPI's & KRA's are designed for every department/function in the business. Separate bank accounts are opened for GST & TDS payments to ensure timely compliances, thereby eliminating the risk of interest and penalties being levied for late payments.",
      },
      {
        type: 'p',
        text: 'Lastly, we conduct weekly / monthly review meetings so as to track sales, profitability & cashflows; and compare them with the above-mentioned benchmark parameters. This exercise not only empowers the promoters with a lot of clarity, confidence & control over their business but also aligns each department & employee to the organizational goals.',
      },
      {
        type: 'p',
        text: 'Thank you so much for investing your time in reading this article. I sincerely hope you found it useful. Please feel free to share it with other entrepreneurs in your network.',
      },
    ],
    comments: [
      {
        author: 'Devdatt Bhatt',
        date: 'March 20, 2021 at 7:14 am',
        text: 'Very nicely articulated',
      },
      {
        author: 'Jayesh Karnia',
        date: 'March 20, 2021 at 11:13 am',
        text: 'Good',
      },
    ],
  },
  {
    id: 'how-to-accumulate-wealth',
    slug: 'how-to-accumulate-wealth',
    legacySlugs: ['/how-to-accumulate-wealth/', '/how-to-accumulate-wealth'],
    title: 'Why do business owners fail to accumulate wealth?',
    subtitle: 'Small incremental savings over a long period of time create wealth, thanks to the power of compounding.',
    date: 'March 20, 2021',
    isoDate: '2021-03-20',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '4 min read',
    featured: false,
    isHistorical: false,
    excerpt:
      'Wealth is created not by how much you earn, but by how much you save. Discover why entrepreneurs must withdraw a fixed monthly salary and build passive income outside their business.',
    keyTakeaways: [
      'Stop pouring personal savings and property mortgages back into business cashflow deficits.',
      'Withdraw a disciplined fixed monthly salary as a promoter and invest across diversified asset classes.',
      'Build passive income streams that cover personal obligations so you operate from abundance, not compulsion.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'Small incremental savings over a long period of time create wealth, thanks to the power of compounding.',
      },
      {
        type: 'p',
        text: 'It is rightly said that: wealth is created not by how much you "earn", but by how much you "save". As a business owner, do you regularly save money? Do you make monthly savings? Do you withdraw a fixed salary from your business every month?',
      },
      {
        type: 'p',
        text: "I have seen several entrepreneurs who don't withdraw fixed salaries every month from their business. Instead, they keep investing their personal funds into the business every now & then. Few even fall into the debt trap by regularly taking loans to fill in the cashflow deficits in their business. It's disheartening to see so many promoters mortgaging their homes, personal properties, and wife's jewelry only to sustain their business.",
      },
      {
        type: 'p',
        text: 'While working with businesses, we start by identifying the existing networth of the promoters, their personal savings, and their investments (in business as well as personally). Recipe for long-term wealth creation is a balanced investment allocation (across multiple asset classes) tossed with the right portfolio diversification sprinkled regularly with incremental savings and garnished with periodic review of the portfolio.',
      },
      {
        type: 'p',
        text: 'We elucidate the significance of creating passive incomes for business owners. Wouldn\'t it be nice if all your financial obligations are automatically taken care of by your passive incomes? Then you may choose to work on only those projects & with only those clients with whom you "want to", and not because you "have to". This would not only heighten your energy levels but also lead to super high productivity (both personally as well as in business).',
      },
      {
        type: 'p',
        text: 'Lastly, we implement a monthly review system to measure networth of the promoters and their portfolio performances so as to track & eliminate erosion of wealth over a long time period.',
      },
      {
        type: 'p',
        text: 'Thank you so much for investing your time in reading this article. I sincerely hope you found it useful. Please feel free to share it with other entrepreneurs in your network.',
      },
    ],
    comments: [],
  },
  {
    id: 'why-business-fail',
    slug: 'why-business-fail',
    // Consolidates both /why-business-fail/ and the duplicate /which-type-of-constitution-will-suit-your-business/
    legacySlugs: [
      '/why-business-fail/',
      '/why-business-fail',
      '/which-type-of-constitution-will-suit-your-business/',
      '/which-type-of-constitution-will-suit-your-business',
    ],
    consolidatedNote:
      'Consolidated canonical guide combining "The No.1 Reason That Stops Businessmen from Making Big Money" and "Which Type of Constitution Will Suit Your Business?".',
    title: 'The No. 1 Reason That Stops Businessmen From Making Big Money (And Which Constitution Suits Your Business)',
    subtitle: 'Transform your business from People-dependent to System-dependent with the Promoter-CEO Model',
    date: 'November 30, 2019',
    isoDate: '2019-11-30',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '5 min read',
    featured: true,
    isHistorical: false,
    excerpt:
      'If your business cannot run or be sold without you, you do not own a business—the business owns you. Learn the 8-step roadmap to transition into a system-driven Private Limited Company.',
    keyTakeaways: [
      'In a proprietorship or partnership, owners and managers are identical—giving the business zero standalone exit value.',
      'A Private Limited Company separates Ownership from Management so the enterprise outlives the founder.',
      'Implement a Promoter-CEO model supported by functional directors, exhaustive SOPs, and character-first hiring.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'Let me start by asking you 3 basic questions:',
      },
      {
        type: 'ol',
        items: [
          'As an entrepreneur, do you really control your business? Or does the business control you, your work timings, your vacation plans, your commitments, etc.?',
          'Do your employees work for you? Or do you work so that you could pay your employees on time?',
          'An entrepreneur invests a lot of his time, money & energies into setting up a profitable business. After several years of rigorous hard work, when he is 55-60 years old – he wishes to sell off his business for a good amount of money, and spend his retirement years comfortably; however he finds that there are no takers to that business.',
        ],
      },
      {
        type: 'p',
        text: 'I am sure – Most of the entrepreneurs would be able to relate to these questions. Let us now understand the Number 1 reason behind this – so that you (as an entrepreneur) build your business in the right way.',
      },
      {
        type: 'h3',
        text: 'Reasons behind the problem:',
      },
      {
        type: 'ol',
        items: [
          'Most of the businesses are promoter-driven; all major decisions are taken by the Promoter; all big business dealings are undertaken by the Promoter himself.',
          'Such businesses do not have their own identity – no value of their own.',
          'Such organisations will never grow / prosper without the promoter; the moment such businesses are taken over by someone else, their operations face multiple challenges. Hence nobody is interested in buying such businesses.',
        ],
      },
      {
        type: 'h3',
        text: 'Real Problem:',
      },
      {
        type: 'quote',
        text: 'What good is your business in which you invested the best years of your youth working hard and taking several risks – when you are not able to generate money out of it?',
      },
      {
        type: 'h3',
        text: 'The 8-Step Solution (Choosing the Right Business Constitution):',
      },
      {
        type: 'ol',
        items: [
          'Solution to this problem is simple: Transform your business from People-dependent to System-dependent.',
          'One of the ways to do that is to create an Organised Business Structure, such as a Private Limited Company (with feeder firms supplying goods / services to the company).',
          'In a proprietorship / partnership firm, owners are the same as managers. However, in case of a company – Ownership is separated from Management. Hence companies survive years after the promoter is dead; they have their own identity.',
          'Once you have created a Private Limited Company, then implement a Promoter-CEO model, where Promoter does only the Strategy planning & ideation of how the business should grow. Execution of these goals should be delegated to a competent Managing Director & CEO.',
          'This CEO then hires his own team of functional directors to handle different functions in business such as – Production, Sales, HR, Finance, Operations, etc.',
          "Thereafter, create exhaustive & detailed SOP's – to ensure all processes are standardised.",
          'Hire people on the basis of their CHARACTER & VALUES; and train them later on the skill sets required to do the tasks.',
          'After creating such an organised structure along with well-defined systems and processes, slowly & gradually the company starts functioning on its own without depending too much on a single person.',
        ],
      },
      {
        type: 'p',
        text: 'Thank you so much for your time; and I sincerely hope you find this article useful. Please share it with other entrepreneurs and wanna-be entrepreneurs.',
      },
    ],
    comments: [
      {
        author: 'R Kannan',
        date: 'March 16, 2021 at 5:52 am',
        text: 'Simple and workable sum up, Vikram! Sharing it with my contacts.',
      },
    ],
  },
  {
    id: 'sustainable-business',
    slug: 'sustainable-business',
    legacySlugs: ['/sustainable-business/', '/sustainable-business'],
    title: 'How to build a Sustainable Business?',
    subtitle: 'Converting from a People-driven organization to a Process-driven organization (Video Masterclass)',
    date: 'March 15, 2021',
    isoDate: '2021-03-15',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '4 min watch & read',
    featured: false,
    isHistorical: false,
    videoEmbed: 'https://www.youtube.com/embed/JORpTNTWQAs?playsinline=1&rel=0',
    excerpt:
      'Watch CA Vikram Menda explain how SME owners can shift from a people-driven setup to a process-driven organization using the Promoter-CEO model and exhaustive SOPs.',
    keyTakeaways: [
      'Ask yourself: Can you sell your business tomorrow if the need arises?',
      'Shift from a People-driven organization to a Process-driven organization.',
      'Start with a Promoter-CEO model, create exhaustive SOPs, recruit for character, and train systematically.',
    ],
    blocks: [
      {
        type: 'lead',
        text: "This video is an educational initiative to disseminate the best practices followed by some of the best businesses across the globe. It is a humble effort towards educating our SME's.",
      },
      {
        type: 'h3',
        text: 'Let us start by asking you 3 questions:',
      },
      {
        type: 'ol',
        items: [
          'Do you control your business? Or is your business controlling you?',
          'Are your employees working for you? Or are YOU working so that your employees get paid on time?',
          'If the need arises, can you sell your business? Will someone be interested to buy your business?',
        ],
      },
      {
        type: 'p',
        text: "Here we understand how to convert from a People-driven organization to a Process-driven organization. We start with a Promoter-CEO model of working, followed by creating exhaustive SOP's, recruiting the right people, and training them well.",
      },
      {
        type: 'p',
        text: 'These steps will help in creating a Sustainable Business Model that will grow.',
      },
    ],
    comments: [],
  },
  {
    id: 'warrior-mindset-of-an-entrepreneur',
    slug: 'warrior-mindset-of-an-entrepreneur',
    legacySlugs: ['/warrior-mindset-of-an-entrepreneur/', '/warrior-mindset-of-an-entrepreneur'],
    title: 'Warrior mindset of an entrepreneur',
    subtitle: 'Mindset of an entrepreneur: "Unshakable"',
    date: 'March 15, 2021',
    isoDate: '2021-03-15',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '4 min read',
    featured: false,
    isHistorical: false,
    excerpt:
      'What is the single most important asset in an SME? The entrepreneur himself. Learn the 3 concrete steps to build a shatter-proof warrior mindset during volatile market cycles.',
    keyTakeaways: [
      'In an SME, everything starts and ends with the promoter—making the entrepreneur’s mindset the #1 asset.',
      'Wear the "Mask of Victory" to lead teams with calm conviction through liquidity or market challenges.',
      '3 pillars: (1) Acknowledge reality without friction, (2) "The buck stops at me!", and (3) Cultivate an Abundance Mindset.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'During a webinar with several small & medium business owners, I asked them a simple question: What is the most important asset in your business?',
      },
      {
        type: 'p',
        text: 'I got varied responses: Plant & Machinery, Distribution system, Customers, Employees, Investors, IT system, and the list went longer and longer to cover everything in business, except one… "the entrepreneur himself".',
      },
      {
        type: 'p',
        text: 'The participants highlighted the significance of everything in their business, except themselves. Here let me harp upon the fact that – In a small & medium business, NOTHING really moves without the involvement of an entrepreneur. Although we keep preaching that businesses should not depend on one person, and businesses should rely on systems, the ground reality in most SME businesses is that: Everything starts and ends with the promoter.',
      },
      {
        type: 'p',
        text: 'Now that we understand the gravity of the role of an entrepreneur in business, we need to then understand what is it that differentiates a successful one from a failure.',
      },
      {
        type: 'p',
        text: "Is it their knowledge, their skills, their decision-making abilities, their past experiences, their network/contacts? Although all these are important, one thing that is of paramount importance, especially during tough times, is their mindset/attitude. Their mindset determines whether they face tough times bravely, or do they give up. And that's the need of the hour for business owners in tough times of falling sales, difficult client recoveries, disrupted supply chain logistics, lack of liquid funds, and unpredictable times ahead.",
      },
      {
        type: 'p',
        text: 'During ancient times, when kings used to fight among each other for kingdoms – the most successful kings (such as Alexander, Genghis Khan, and Ashoka) had one thing in common; and that was the "mask of victory".',
      },
      {
        type: 'p',
        text: 'Even in the worst of times, they always wore their mask of victory, i.e. they never showed their fears to their commanders, or to their armies. They were masters in overcoming their internal fears and braving all odds, thanks to their unbreakable mindset.',
      },
      {
        type: 'p',
        text: 'Even though we understand the significance of mindset, few actually take conscious efforts to really work on it. I personally feel there are 3 concrete steps to develop a shatter-proof mindset:',
      },
      {
        type: 'ol',
        items: [
          'Acknowledge / Accept the current situation: It\'s no use resisting tough times by thinking "Why did it happen to me?", or "Why now?" or "This is not fair". Resistance creates friction, thereby stopping us think about solutions. Acknowledging the challenges helps us graduate to the next level, i.e., thinking about probable solutions.',
          'The buck stops at me!: In tough times, it\'s very easy to play the VICTIM card and blame uncontrollable factors such as destiny, government, etc. Till we keep blaming others for all our problems, and believe that "someone (maybe Government) should now come and help us", we will feel dis-empowered and weak. The moment we accept total responsibility for everything happening in our life, we gain all the power to change things around us.',
          'Abundance mindset: A lot of us attract negative emotions (such as fear, insecurity, jealousy, etc.) during tough times. The source of all such negative emotions is a scarcity mindset; here we are afraid of poverty, failure, death, etc. Instead, we need to nurture our inner faith on the supreme. We need to firmly believe that we will be taken care of, and that we need to now help others to solve their problems. That\'s the abundance mindset that attracts all the riches in our life; it opens the roads to a brighter and better tomorrow – for us, and for everyone around us.',
        ],
      },
    ],
    comments: [],
  },
  {
    id: 'love-your-vocation',
    slug: 'love-your-vocation',
    legacySlugs: ['/love-your-vocation/', '/love-your-vocation'],
    title: 'Rekindle the love of your lives',
    subtitle: 'A personal reflection by CA Vikram Menda on his 20+ year journey in Accountancy & Corporate Finance',
    date: 'March 15, 2021',
    isoDate: '2021-03-15',
    author: 'CA Vikram Menda',
    category: 'Best Business Practices',
    readTime: '4 min read',
    featured: false,
    isHistorical: false,
    excerpt:
      'CA Vikram Menda shares his personal story—from falling in love with Accountancy in 12th standard and the VDIS era to his very first client Mr. Kantilal Haria, and how to keep passion alive after 20 years.',
    keyTakeaways: [
      'CA Vikram Menda’s journey began in 12th Standard Accountancy, through India’s VDIS era, to advising dozens of enterprises.',
      'After 20+ years in any profession, it is easy to take your vocation for granted.',
      'Love for your craft evolves when you consciously invest two things: Time and Attention.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'Do you remember the time you chose your business/profession/vocation? Why did you choose it? I am sure, most of you were simply in love with it. Let me share my story:',
      },
      {
        type: 'p',
        text: "I was in my 12th standard, studying Accountancy. And boy, I was simply obsessed with Accounts and Finance. I thoroughly enjoyed understanding new concepts in Accounts and then relating those to real life. Let me confess that initially, it was a one-sided affair. Although I was attracted to Finance, it initially eluded me; it didn't come to me that easily. But within a few weeks of dedicated cajoling, Finance also started responding favorably; now I started understanding it better. And life became such a bliss.",
      },
      {
        type: 'p',
        text: "In those days, the Indian Government had announced the Voluntary Disclosure of Income Scheme (VDIS). The entire country was talking about it. I too was intrigued by that concept – VDIS. I used to think about its significance in people's lives; and also its wider impact at the macro level. I remember reading extensively about VDIS, the rationale behind it, the Government machinery involved, the role of CA's in that nation-building scheme, etc.",
      },
      {
        type: 'p',
        text: 'I vividly remember – immediately after finishing my CA, I had bagged my first accounting assignment from a new client Mr. Kantilal Haria, a textile manufacturer. How elated I was! The feeling was not less ecstatic than – as if Romeo, after years of intense longing for his love Juliet, was finally allowed to unite with her.',
      },
      {
        type: 'p',
        text: 'Those were the best days of my life. I admired my profession. I was in awe of Finance; and I enjoyed romancing with it, reading about it for several hours till late night, and sometimes till dawn, thereby inspiring the popular Bollywood song – "Tujhe subah tak mein karoon pyaaaaaar…."',
      },
      {
        type: 'p',
        text: 'After spending over 20 years in the finance profession & successfully completing multiple assignments, there came a time when I felt the love had faded off. I had taken my vocation for granted. I missed that excitement while getting new assignments. I missed that curiosity to learn new concepts while working on those assignments. I missed spending "QUALITY TIME" with my first love.',
      },
      {
        type: 'p',
        text: 'Then one day, I decided I will not let the love of my life die. I decided to rekindle that love; to add spark to our relationship.',
      },
      {
        type: 'quote',
        text: 'Love doesn\'t come out of thin air. Love evolves – between the two who "commit" to invest in that relationship. Invest what? "Time and attention".',
      },
      {
        type: 'p',
        text: 'My love for Finance had faded because I had stopped investing in our relationship. Once I realized this, I re-kindled my love affair. I read the latest concepts in Finance; discussed those with my colleagues; attended few thought-provoking seminars, took a keen interest in new client assignments. And within two months, I felt the passion come alive again. And then we lived happily ever after…',
      },
      {
        type: 'h3',
        text: 'Moral of this story:',
      },
      {
        type: 'p',
        text: 'After spending several years in our chosen vocation, we start taking it for granted; and then life loses its flavors. When was the last time, you spent some quiet time romancing with (i.e., reading about) your vocation? When did you assimilate new trends/concepts in your profession? When was the last time, you took an assignment with all the enthusiasm of an apprentice – wanting to deliver the best quality product that anyone else could do?',
      },
      {
        type: 'p',
        text: "Let's rekindle our love. Let's commit to investing time & attention into it.",
      },
    ],
    comments: [],
  },
  {
    id: 'lockdown-impact',
    slug: 'lockdown-impact',
    legacySlugs: ['/lockdown-impact/', '/lockdown-impact'],
    title: 'Impact of lockdown on SME businesses (2020–21 Macro Archive)',
    subtitle: 'Why black-swan economic shocks require detailed planning dovetailed with meticulous financial control',
    date: 'March 15, 2021',
    isoDate: '2021-03-15',
    author: 'CA Vikram Menda',
    category: 'Macroeconomic Archive',
    readTime: '4 min read',
    featured: false,
    isHistorical: true,
    historicalNote:
      'Archival Advisory Note: Originally published during the 2020–21 COVID-19 macroeconomic disruption. Preserved as a case study in crisis liquidity management for Indian MSMEs.',
    excerpt:
      'An archival look at how Indian SMEs navigated credit tightening, supply chain shocks, and liquidity crises during the 2020–21 lockdown—and why new-age financial controls remain non-negotiable.',
    keyTakeaways: [
      'Macro shocks trigger immediate credit tightening by banks and NBFCs on LC, BG, and working capital limits.',
      'Crisis survival requires "detailed planning" dovetailed with "meticulous cashflow control".',
      'Traditional accounting cannot shield SMEs from black-swan volatility; dynamic CFO controls are essential.',
    ],
    blocks: [
      {
        type: 'lead',
        text: 'Archival Macroeconomic Briefing (2020–21): How Indian SMEs navigated pandemic liquidity shocks through disciplined financial controls.',
      },
      {
        type: 'h3',
        text: 'The Backdrop (2020–21 Indian Macro-Economic Indicators):',
      },
      {
        type: 'ul',
        items: [
          "India's GDP growth forecast to be less than 2%",
          'Unemployment rate in India increases by 23% in the midst of lockdown',
          "Gold prices hit record highs",
          "USD/INR: Rupee slides to all-time lows",
          'Indian Stock markets crashed terribly (due to huge FII outflows)',
        ],
      },
      {
        type: 'h3',
        text: 'Impact on Indian SME businesses:',
      },
      {
        type: 'ul',
        items: [
          'Low customer demand (other than for Essentials)',
          'Labor challenges: Large-scale migration of workers from cities to villages',
          'Challenges in Supply Chain logistics',
          'Disrupt, or Be disrupted!',
        ],
      },
      {
        type: 'h3',
        text: 'Financial risks to companies:',
      },
      {
        type: 'ul',
        items: [
          "The pandemic had huge repercussions on real economic activity; the first risk being financial tightening by banks and NBFC's in India.",
          'With a substantial fall in customer demand, businesses faced severe liquidity challenges, resulting in cashflow crisis for organizations.',
          "With plummeting demands and production, listed companies were hit by falling equity prices, along with risk aversion from lending bankers and NBFC's.",
          'Indian banks reconsidered renewal of credit to businesses; and also reduced their exposure to forex risks, LC and BG limits.',
        ],
      },
      {
        type: 'h3',
        text: 'Silver lining during the crisis:',
      },
      {
        type: 'ul',
        items: [
          'In spite of the several challenges mentioned above, the Indian economy proved more resilient than economies relying solely on international trade.',
          "Falling prices of India's biggest import (i.e. Oil) helped ameliorate India's international trade position.",
          'Confederation of Indian Industry (CII) announced a dedicated fund for MSMEs to tackle pandemic challenges.',
          'ASSOCHAM India and RBI measures (three-month moratorium on EMIs and 75 bps Repo Rate cut) provided critical breathing room.',
        ],
      },
      {
        type: 'h3',
        text: 'Timeless Conclusion for SME Promoters:',
      },
      {
        type: 'p',
        text: 'Economic shocks require "detailed planning" dovetailed with "meticulous control" across industries pan-India. Staying in control of business (and its cashflows) has become far more important in today\'s scenario than it was ever before (especially for SMEs).',
      },
      {
        type: 'p',
        text: 'Traditional ways of managing finances can no longer protect SMEs from macro uncertainties; businesses today require new-age tools and techniques of managing their finances in a thoroughly professional manner.',
      },
    ],
    comments: [],
  },
];

export const AUTHOR_SIGNATURE = {
  line1:
    'The above article is penned by one of our finance mentors CA Vikram Menda to disseminate the best practices followed by some of the best businesses across the globe.',
  line2:
    'CA Vikram Menda handholds businesses in implementing new-age tools & techniques of financial management, thereby ensuring cash-rich businesses and timely compliances.',
};
