import { PortfolioItem, ServiceItem, Testimonial, CostEstimateOption } from '../types';

export const COMPANY_INFO = {
  brandName: 'Addimprez',
  tagline: 'Packaging Design Company in Coimbatore',
  subTagline: 'Specialized in FMCG food packaging, standup pouches, mono cartons, and brand identity design with 16+ years of print-ready excellence.',
  address: '286, Diwan Bahadur Rd, next to Kalpana Studios, R.S. Puram, Coimbatore, Tamil Nadu 641001',
  mobile: '9566664663',
  mobileDisplay: '+91 95666 64663',
  email: 'info@addimprez.com',
  workingHours: 'Mon - Sat: 9:30 AM - 7:30 PM (Sun Closed)',
  experienceYears: '16+',
  projectsCompleted: '2,500+',
  happyClients: '1,000+',
  countriesReached: '15+',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fmcg-packaging',
    iconName: 'Package',
    title: 'FMCG & Food Packaging Design',
    subtitle: 'Standup Pouches, Zipper Bags & Foil Wraps',
    description: 'Specialized packaging for snacks, confectionery, namkeen, spices, and organic groceries engineered for high shelf appeal and printer compatibility.',
    features: [
      'Multi-layer barrier foil & rotogravure cylinder dielines',
      'FSSAI, nutritional values & legal mandatory layout',
      'Realistic 3D shelf visualization & renders',
      'Matte, gloss & metallic foil effect planning'
    ],
    popularBadge: 'Flagship Service'
  },
  {
    id: 'box-packaging',
    iconName: 'Box',
    title: 'Rigid & Corrugated Box Packaging',
    subtitle: 'Mono Cartons, Gift Boxes & Shipping Packs',
    description: 'Custom structural box graphics, luxury embossing, UV spot treatments, and outer master cartons for electronics, apparel, and gifting.',
    features: [
      'Accurate CAD dielines with crease & tuck-in tabs',
      'Foil stamping, debossing & window cutout guides',
      'Inner divider inserts & product nesting layouts',
      'Offset CMYK + Pantone spot color calibration'
    ]
  },
  {
    id: 'brand-identity',
    iconName: 'Award',
    title: 'Brand Identity & Logo Design',
    subtitle: 'Trademarks, Brand Standards & Visual Language',
    description: 'Crafting timeless logo marks, typography hierarchies, and corporate guidelines that set your company apart across all physical and digital touchpoints.',
    features: [
      '3-5 distinct creative logo design directions',
      'Comprehensive Brand Style Guide (PDF & vector)',
      'Business card, letterhead & corporate stationery',
      'Full copyright transfer & scalable vector assets'
    ],
    popularBadge: 'Top Requested'
  },
  {
    id: 'bottle-labels',
    iconName: 'Wine',
    title: 'Bottle, Jar & Shrink Sleeve Labels',
    subtitle: 'Beverages, Edible Oils, Cosmetics & Wellness',
    description: 'Waterproof synthetic labels, wrap-around films, and full-body shrink sleeves for bottles, jars, and cylindrical containers with curvature distortion correction.',
    features: [
      'Distortion grid mapping for conical & curved containers',
      'Transparent BOPP, metallic & textured stock specs',
      'Tamper-evident neck bands & lid seal designs',
      'Barcode readability & batch coding space'
    ]
  },
  {
    id: 'brochures-collateral',
    iconName: 'Layers',
    title: 'Brochures, Catalogs & Print Collateral',
    subtitle: 'Sales Pitch Books, Flyers & Exhibition Displays',
    description: 'High-impact marketing collaterals, tri-folds, multi-page company profiles, trade show standees, and retail point-of-sale danglers.',
    features: [
      'Multi-page product catalogs with crisp grid systems',
      'Corporate pitch books & investor decks',
      'Expo backdrops, roll-up standees & banners',
      'Pre-press print supervision & paper stock advice'
    ]
  },
  {
    id: 'web-design',
    iconName: 'Globe',
    title: 'Corporate Website & UI/UX Design',
    subtitle: 'Fast, Mobile-First Digital Experiences',
    description: 'Bespoke website designs that match your physical brand aesthetics, optimized for mobile responsiveness, high speed, and search visibility.',
    features: [
      'Custom UI tailored to your brand guidelines',
      'Mobile-first responsive architecture',
      'Fast loading speed & SEO metadata setup',
      'WhatsApp integration & interactive inquiry capture'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'malabar-spices',
    title: 'Malabar Heritage Spices Collection',
    category: 'packaging',
    categoryLabel: 'FMCG Packaging',
    client: 'Malabar Organics Ltd.',
    location: 'Kerala & Coimbatore',
    year: '2024',
    tags: ['Standup Pouch', 'Foil Stamp', 'Spices', 'Rotogravure'],
    description: 'Premium kraft-finish standup zipper pouch series with transparent spice window, gold foil accenting, and clear regional provenance storytelling.',
    printSpecs: '5-color Rotogravure + Matte Varnish on Metallized BOPP/PE',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    accentColor: '#D97706',
    rating: 5
  },
  {
    id: 'roastcraft-brew',
    title: 'RoastCraft Cold Brew Glass Bottle',
    category: 'labels',
    categoryLabel: 'Bottle & Label Design',
    client: 'RoastCraft Beverage Co.',
    location: 'Nilgiris & Coimbatore',
    year: '2024',
    tags: ['Glass Bottle', 'Waterproof Label', 'Craft Beverage'],
    description: 'Minimalist wrap-around textured label with embossing for an artisanal single-origin cold brew bottled in amber glass.',
    printSpecs: 'Cast-coated textured paper + Spot UV gloss + Gold Hot Foil',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    accentColor: '#845326',
    rating: 5
  },
  {
    id: 'crunchbites-namkeen',
    title: 'CrunchBites Gourmet Snacks Range',
    category: 'food',
    categoryLabel: 'Food & Snacks',
    client: 'CrunchBites Foods',
    location: 'Coimbatore',
    year: '2024',
    tags: ['Nitrogen Flushed', 'Snack Pouch', 'FMCG Food'],
    description: 'Vibrant, high-energy snack pouch line with appetizing 3D product rendering, bright color codes per flavor variant, and prominent crunch factor icons.',
    printSpecs: '8-color High Definition Rotogravure on Gloss Laminate',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=800&q=80',
    accentColor: '#DC2626',
    rating: 5
  },
  {
    id: 'ayurveda-botanicals',
    title: 'VedaBotanica Organic Skincare Box',
    category: 'packaging',
    categoryLabel: 'Rigid Box Packaging',
    client: 'VedaBotanica Ayurveda',
    location: 'Chennai & Coimbatore',
    year: '2023',
    tags: ['Mono Carton', 'Embossing', 'Herbal Cosmetics', 'Pastel'],
    description: 'Eco-conscious rigid drawer-box with custom botanical leaf debossing, soft-touch matte lamination, and bespoke dropper bottle label.',
    printSpecs: 'FSC Certified 350 GSM Cyber XL board + Soy inks + Deboss',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    accentColor: '#059669',
    rating: 5
  },
  {
    id: 'textile-monogram',
    title: 'Kovai Silk Looms Identity & Packaging',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    client: 'Kovai Silk Looms',
    location: 'R.S. Puram, Coimbatore',
    year: '2023',
    tags: ['Luxury Branding', 'Gold Foil Box', 'Saree Packaging'],
    description: 'Intricate heritage branding inspired by South Indian temple architecture, woven into a rigid magnetic-clasp presentation box and gold stamped seal.',
    printSpecs: 'Rigid Kappa board wrapped with handmade art paper + Rich Gold Foil',
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    accentColor: '#7C3AED',
    rating: 5
  },
  {
    id: 'dairy-pure-ghee',
    title: 'Amrutha Gold Vedic Bilona Ghee',
    category: 'labels',
    categoryLabel: 'Jar Label & Outer Box',
    client: 'Amrutha Dairy Farms',
    location: 'Pollachi & Coimbatore',
    year: '2024',
    tags: ['Hexagonal Jar', 'Gold Foil', 'Food Grade'],
    description: 'Premium hexagonal glass jar label and gold-embossed corrugated gift sleeve emphasizing traditional A2 bilona churning authenticity.',
    printSpecs: 'Synthetic Metallic Foil Label with Scuff-resistant Matt Coat',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    accentColor: '#CA8A04',
    rating: 5
  },
  {
    id: 'agro-organic-millet',
    title: 'MilletRoots Organic Breakfast Cereals',
    category: 'food',
    categoryLabel: 'Food & Snacks',
    client: 'MilletRoots Nutrition',
    location: 'Tirupur & Coimbatore',
    year: '2024',
    tags: ['Eco Carton', 'Millet Flakes', 'Health Brand'],
    description: 'Clean Scandinavian-inspired typography combined with warm Indian earth tones to create a trustworthy health-food breakfast carton.',
    printSpecs: 'Virgin Kraft board + 4-color Food Safe Water-based Offset',
    imageUrl: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=800&q=80',
    accentColor: '#B45309',
    rating: 5
  },
  {
    id: 'corporate-web-portal',
    title: 'TexFab Global Industrial Website',
    category: 'web',
    categoryLabel: 'Web Design',
    client: 'TexFab Exports India',
    location: 'Coimbatore',
    year: '2024',
    tags: ['Responsive', 'Corporate Web', 'Export Catalog'],
    description: 'High-speed bilingual corporate web platform for a leading textile machinery exporter, complete with dynamic dieline catalog and interactive quotation flow.',
    printSpecs: 'HTML5, React, Tailwind CSS, Instant WhatsApp Inquiry integration',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    accentColor: '#2563EB',
    rating: 5
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Retail Audit & Discovery',
    description: 'We analyze your target demographic, competitive shelf landscape in supermarkets, retail lighting conditions, and price-tier positioning.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Creative Concepts (3-4 Variants)',
    description: 'Our senior designers produce multiple distinct visual directions focusing on strong pack front dominance, appetizing food photography, and typography.',
    icon: 'PenTool'
  },
  {
    step: '03',
    title: '3D Mockup & Dieline Engineering',
    description: 'Rigorous FSSAI compliance, barcode sizing, ingredients table alignment, and millimetre-accurate vector dielines ready for cylinder engraving.',
    icon: 'Cpu'
  },
  {
    step: '04',
    title: 'Pre-Press & Printer Coordination',
    description: 'We deliver production-ready CMYK + Spot Pantone vector files with printer color bars, trapping, and assist your chosen packaging converter directly.',
    icon: 'CheckCircle2'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Technical Print Mastery',
    description: 'We do not just create pretty pictures; we engineer dielines built for rotogravure cylinders, flexo plates, offset litho, and screen printing with zero ink bleeding.',
    stat: '100%',
    statLabel: 'Printer Friendly Dielines'
  },
  {
    title: 'Supermarket Shelf Dominance',
    description: 'Our designs are scientifically arranged with clear visual hierarchy so your brand catches the eye in less than 2.5 seconds on crowded supermarket shelves.',
    stat: '3.4x',
    statLabel: 'Higher Retail Recall'
  },
  {
    title: 'Full FSSAI & Legal Compliance',
    description: 'Zero regulatory rejection. We ensure correct font sizes for net weight, ingredient lists, allergy notices, veg/non-veg green dots, and barcode placement.',
    stat: 'Zero',
    statLabel: 'Regulatory Rejection'
  },
  {
    title: 'Prime R.S. Puram Studio',
    description: 'Visit our physical design studio on Diwan Bahadur Road, Coimbatore to touch physical paper stocks, inspect mockups, and collaborate face-to-face.',
    stat: '20+',
    statLabel: 'Years in Coimbatore'
  }
];

export const ESTIMATE_PACKAGES: CostEstimateOption[] = [
  {
    id: 'starter-pouch',
    name: 'Single Product Pouch / Box Design',
    category: 'packaging',
    basePrice: 12500,
    deliveryDays: 5,
    includedItems: [
      '2 Custom Creative Front & Back Concepts',
      'Accurate Vector Dieline with Bleeds & Creases',
      'High-Resolution 3D Photorealistic Pack Render',
      'FSSAI, Nutritional Table & Barcode setup',
      'Print-ready PDF, AI & EPS with color codes'
    ]
  },
  {
    id: 'product-range',
    name: 'Product Family Range (3-5 Flavors)',
    category: 'packaging',
    basePrice: 28000,
    deliveryDays: 8,
    includedItems: [
      'Master visual identity template + 4 flavor variants',
      'Cohesive color palette & ingredient iconography',
      '3D Group Shelf Array visualization',
      'Individual printer-ready dieline files per variant',
      'Direct printer technical coordination'
    ]
  },
  {
    id: 'brand-identity-suite',
    name: 'Complete Brand Identity Suite',
    category: 'branding',
    basePrice: 18500,
    deliveryDays: 6,
    includedItems: [
      '4 Unique Logo Mark Concepts + Revisions',
      'Full Brand Style Guide & Typography Rules',
      'Business Card, Letterhead & Envelope dielines',
      'Social Media DP & Cover templates',
      'All master vector formats (.AI, .EPS, .SVG, .PNG)'
    ]
  },
  {
    id: 'corporate-website',
    name: 'Responsive Corporate Website',
    category: 'web',
    basePrice: 24500,
    deliveryDays: 10,
    includedItems: [
      'Bespoke Mobile-First 5-Page Layout',
      'Product & Packaging showcase portfolio',
      'WhatsApp Click-to-Chat & Lead Inquiry form',
      'Fast SEO optimization & domain setup assistance',
      'Free 1 Year hosting guidance'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'R. Sivakumar',
    company: 'Annam Heritage Foods',
    role: 'Managing Director',
    projectType: 'Spices Pouch Series',
    content: 'Addimprez revamped our complete masala pouch range. Within 2 months of hitting supermarket shelves across Tamil Nadu, our retail sales jumped by 42%. The dielines were flawless and our rotogravure printer had zero issues.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Pooja Sundaram',
    company: 'Nectar Organics India',
    role: 'Founder',
    projectType: 'Cosmetics Box & Dropper Bottle',
    content: 'Walking into their studio on D.B. Road in R.S. Puram was the best decision for our startup. They understood the clean, apothecary aesthetic we wanted and engineered gorgeous matte-finish cartons with gold foil. Truly Coimbatore’s finest!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'K. Balachandran',
    company: 'Royal Nutri Snacks',
    role: 'Head of Marketing',
    projectType: 'Namkeen Standup Pouch Range',
    content: 'The team at Addimprez knows how to make snacks look appetizing! Their 3D pack renders made our distributor presentations effortless. Their technical knowledge of foil lamination saved us substantial printing costs.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'How long does a packaging design project usually take?',
    answer: 'A single pouch or box design typically takes 4 to 6 business days from brief to initial 3D concepts. Once you select a direction and provide final ingredients/copy, printer-ready vector dielines are prepared in 2 to 3 days.'
  },
  {
    question: 'Do you provide the accurate dieline and printer-ready files?',
    answer: 'Yes, absolutely. We provide 100% vector dieline files (.AI, .EPS, .PDF) with exact millimeter dimensions, bleed margins, safe printing zones, crease lines, barcode scaling, and spot color separations calibrated for your packaging manufacturer.'
  },
  {
    question: 'Can we visit your office in Coimbatore to discuss our project?',
    answer: 'Yes! We are conveniently located at 286, Diwan Bahadur Rd, next to Kalpana Studios, R.S. Puram, Coimbatore. Feel free to call us at 9566664663 to schedule a meeting and review physical paper, box, and pouch samples.'
  },
  {
    question: 'Do you ensure FSSAI and legal compliance for packaged foods?',
    answer: 'Yes. We strictly adhere to FSSAI packaging guidelines, ensuring correct font height for net weight declarations, prominent veg/non-veg symbols, ingredients and allergen highlights, nutritional fact table formatting, and barcode placement.'
  }
];
