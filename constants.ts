
import { PenTool, Rocket, Code, Layout, Globe, Search, Megaphone, Mail, FileText, Globe2, Building2, Briefcase, Languages, ExternalLink, Sparkles, ShoppingBag, Server, Compass } from "lucide-react";
import { AI_Tool, Credential, NavItem, Service, CreativeWork, FAQItem, JobRole, Testimonial, BlogPost, FeaturedProject } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "AI Strategy", href: "#ai-strategy" },
  { label: "Credentials", href: "#credentials" },
  { label: "FAQ", href: "#faq" },
];

export const SERVICES: Service[] = [
  {
    id: "ai-strategy",
    title: "AI Marketing Strategy",
    description: "Comprehensive digital roadmaps powered by data-driven AI insights.",
    icon: Rocket
  },
  {
    id: "seo-content",
    title: "SEO Content Writing",
    description: "15 years of expertise in creating high-ranking, engaging web copy.",
    icon: FileText
  },
  {
    id: "web-dev",
    title: "WordPress Development",
    description: "Custom, easy-to-manage sites built with Elementor & Divi.",
    icon: Layout
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description: "Strategic content planning and automation for brand growth.",
    icon: Megaphone
  },
  {
    id: "email",
    title: "Email Marketing",
    description: "Cold outreach and newsletter campaigns that convert.",
    icon: Mail
  },
  {
    id: "copywriting",
    title: "Creative Copywriting",
    description: "Compelling narratives for commercials, scripts, and branding.",
    icon: PenTool
  }
];

export const AI_TOOLS: AI_Tool[] = [
  { name: "Gemini 1.5 Pro/Flash", category: "Text" },
  { name: "ChatGPT (o1/4o)", category: "Text" },
  { name: "Claude 3.5 Sonnet", category: "Code" },
  { name: "Nano Banana", category: "Text" },
  { name: "Perplexity", category: "Research" },
  { name: "Genspark", category: "Research" },
  { name: "NotebookLM", category: "Research" },
  { name: "Manus", category: "Code" },
  { name: "Lovable", category: "Code" },
  { name: "Google AI Studio", category: "Text" },
  { name: "Kimi", category: "Text" },
];

export const NICHE_EXPERIENCE = [
  "Home Services & Interior Design",
  "Web Design & Development",
  "Social Media Marketing (SMM)",
  "Insurance & Health",
  "Pay-Per-Call Marketing",
  "Affiliate Marketing",
  "Organic Wellness & Eco-Living"
];

export const WORK_EXPERIENCE: JobRole[] = [
  {
    id: 'ray-advertising',
    title: 'SEO Content Strategist',
    company: 'Ray Advertising LLC',
    location: 'Remote (USA Market)',
    period: '2025 - Present',
    icon: Globe2,
    tags: ['SEO Strategy', 'Topic Clustering', 'US Market'],
    description: [
      'Spearheading comprehensive SEO content strategies for performance marketing campaigns targeting USA markets.',
      'Implementing advanced keyword research and topic clustering methodologies to enhance organic visibility.'
    ]
  },
  {
    id: 'webworm',
    title: 'Founder & Digital Marketing Director',
    company: 'WebWorm Digital Agency',
    location: 'Australia Market Focus',
    period: '2020 - Present',
    icon: Rocket,
    tags: ['Agency Leadership', 'WordPress', 'eCommerce'],
    description: [
      'Founded and scaled digital agency specializing in WordPress eCommerce development for the Australian market.',
      'Successfully delivered 100+ website projects with 98% client satisfaction rate.',
      'Established strategic partnerships expanding market reach by 150%.'
    ]
  },
  {
    id: 'arafin',
    title: 'SEO Strategist & Content Manager',
    company: 'Arafin Media',
    location: 'Remote',
    period: 'Aug 2024 - Mar 2025',
    icon: Search,
    tags: ['Content Marketing', 'Analytics', 'Organic Growth'],
    description: [
      'Managed comprehensive SEO strategies for autocadIndia.com and ClippingCreationsIndia.com.',
      'Achieved 40% improvement in organic search visibility through content marketing campaigns.',
      'Analyzed website performance metrics to enhance user engagement.'
    ]
  },
  {
    id: 'gaotek',
    title: 'WordPress Developer & Specialist',
    company: 'GaoTek Inc.',
    location: 'Remote (North America)',
    period: 'Apr - July 2024',
    icon: Code,
    tags: ['Web Development', 'Mentorship', 'Global Teams'],
    description: [
      'Developed and optimized 15+ WordPress websites using HTML, CSS, JavaScript, and PHP.',
      'Collaborated with international development teams across multiple time zones.',
      'Mentored 8 junior interns, improving team productivity by 35%.'
    ]
  },
  {
    id: 'microsoft',
    title: 'Professional Translator',
    company: 'Microsoft / Intl. Clients',
    location: 'Global Projects',
    period: '2010',
    icon: Languages,
    tags: ['Localization', 'Technical Translation', 'Accuracy'],
    description: [
      'Translated technical IT curriculum materials for Microsoft Corporation (Bangladesh education sector).',
      'Provided confidential translation services for the Indian High Commission.',
      'Maintained 99% accuracy rate in technical, legal, and literary content.'
    ]
  },
  {
    id: 'teaching',
    title: 'English Language Teacher',
    company: 'Educational Institutes',
    location: 'Bangladesh',
    period: '2001 - 2015',
    icon: Briefcase,
    tags: ['Curriculum Dev', 'Mentorship', 'Communication'],
    description: [
      'Delivered comprehensive English instruction to 500+ students over 14 years.',
      'Developed innovative curriculum plans improving student performance by 45%.',
      'Implemented student-centered teaching methodologies.'
    ]
  }
];

export const CREDENTIALS: Credential[] = [
  {
    title: "Diploma in Fine Arts & Graphic Design",
    institution: "Dhaka Art College",
    year: "2017",
    type: "education",
    description: "Comprehensive study in visual arts, graphic design principles, and creative methodology."
  },
  {
    title: "BA in English Literature & Linguistics",
    institution: "Dhaka College, University of Dhaka",
    year: "2007",
    type: "education",
    description: "Advanced study in linguistics and language pedagogy. Foundation for career in content strategy."
  },
  {
    title: "HSC - Science (First Division)",
    institution: "Government Science College",
    year: "2001",
    type: "education",
    description: "Strong foundation in science subjects with analytical thinking capabilities."
  }
];

export const CERTIFICATIONS: Credential[] = [
  {
    title: "Digital Marketing & Web Dev Internship",
    institution: "GaoTek Inc. (USA)",
    year: "2024",
    type: "certification",
    description: "Practical experience in global digital strategy and web technologies."
  },
  {
    title: "Web Development Certification",
    institution: "Certified Professional",
    type: "certification",
    description: "Specializing in WordPress, Elementor, and Divi Page Builder."
  }
];

export const CREATIVE_WORKS: CreativeWork[] = [
  {
    title: "Philosophy of Fakir Lalon Shah",
    type: "Sketch Art & Article",
    // Use a direct image URL of a sketch of Lalon Shah or a very similar Sufi mystic sketch representation
    imageUrl: "https://lh3.googleusercontent.com/d/1koBZwhtQfTNSo1BeJouveWCMI_guJlE4", 
    link: "https://www.linkedin.com/pulse/life-philosophy-fakir-lalon-shah-mystic-poet-baul-sufi-chowdhury-gtt5c/?trackingId=4U2t7lyvTzW5sYDJ1EjySQ%3D%3D",
    tags: ["Digital Art"]
  },
  {
    title: "TV Drama Production",
    type: "Broadcast (Masranga TV)",
    imageUrl: "https://img.youtube.com/vi/1Ae79s02mNk/hqdefault.jpg", // Verified Thumbnail from video ID 1Ae79s02mNk
    link: "https://www.youtube.com/watch?v=1Ae79s02mNk&t=28s"
  },
  {
    title: "Tanchangya Tribe Docu",
    type: "Experimental Film",
    imageUrl: "https://img.youtube.com/vi/P4SDdX4quko/hqdefault.jpg", // Verified Thumbnail from video ID P4SDdX4quko
    link: "https://www.youtube.com/watch?v=P4SDdX4quko"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does AI improve my marketing strategy?",
    answer: "AI allows us to analyze vast amounts of data to identify trends, optimize content for SEO in real-time, and personalize customer interactions, leading to higher conversion rates with lower overhead."
  },
  {
    question: "Do you build custom websites?",
    answer: "Yes, I specialize in WordPress development using Elementor and Divi. These platforms allow me to build stunning, custom sites that are also easy for you to manage after handover."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "For a standard 5-page business website, the timeline is typically 2-3 weeks. Comprehensive marketing strategies can be developed in 1-2 weeks."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. I have experience working with clients globally, including US-based firms like Ray Advertising and GaoTek, ensuring smooth communication across time zones."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mr. Wasim Khan",
    role: "Managing Director",
    company: "Sunlit BD",
    quote: "MARC transformed our digital presence completely. The website is stunning, but the AI-driven content strategy is what really skyrocketed our lead generation.",
    image: "" // Image removed as per request
  },
  {
    id: "t2",
    name: "Mr. Nayeem Ahmed",
    role: "Senior Manager",
    company: "Ray Advertising LLC",
    quote: "Momen's ability to blend SEO technicalities with engaging storytelling is rare. He consistently delivers high-value content that ranks and converts in the US market.",
    image: "" // Image removed as per request
  },
  {
    id: "t3",
    name: "Md. Salahuddin",
    role: "Co-Founder",
    company: "WebWorm Digital",
    quote: "A true professional who understands the global landscape. His leadership in managing our Australian WordPress projects ensured we hit every deadline with top-tier quality.",
    image: "" // Image removed as per request
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "ai-seo-2025",
    title: "AI-Powered SEO: Why Content is Still King, but AI is Queen",
    excerpt: "Discover how I use Gemini and Claude to enhance semantic relevance without losing the human touch that search engines love.",
    category: "AI Strategy",
    date: "Oct 24, 2024",
    readTime: "5 min read",
    author: "Momen A. R. Chowdhury",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    content: `
      <p>The landscape of Search Engine Optimization (SEO) is undergoing a seismic shift. For over 15 years, I've watched algorithms evolve from simple keyword matching to complex semantic understanding. Today, with the advent of Large Language Models (LLMs) like Gemini and GPT-4, the game has changed again.</p>
      
      <h3>The Hybrid Approach</h3>
      <p>Many fear that AI will replace human writers. My experience at Ray Advertising suggests otherwise. AI isn't a replacement; it's an exoskeleton. It allows us to process vast amounts of data to find "content gaps"—topics your competitors are missing—in seconds rather than days.</p>
      
      <p>However, the <em>voice</em> must remain human. Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines specifically value first-hand experience. AI can structure an article, but it cannot replicate the nuance of negotiating a deal in Dhaka or managing a project in Melbourne.</p>
      
      <h3>Key Takeaways for 2025</h3>
      <ul>
        <li><strong>Topic Clustering:</strong> Use AI to generate comprehensive topic maps rather than single keywords.</li>
        <li><strong>Semantic Richness:</strong> AI tools can help ensure your content covers all semantically related entities.</li>
        <li><strong>Human Validation:</strong> Always fact-check AI outputs. A hallucination can damage your brand's authority instantly.</li>
      </ul>
    `
  },
  {
    id: "wordpress-vs-custom",
    title: "WordPress in 2025: Still the Best Choice for Small Business?",
    excerpt: "With the rise of no-code AI builders, is WordPress still relevant? A deep dive into ownership, scalability, and SEO.",
    category: "Web Development",
    date: "Sep 12, 2024",
    readTime: "7 min read",
    author: "Momen A. R. Chowdhury",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    content: `
      <p>As a developer who has built over 100 sites for clients in Australia and the US, the question I get asked most often is: "Why not just use Wix or Squarespace?"</p>
      
      <h3>The Ownership Dilemma</h3>
      <p>Proprietary builders lock you in. If they raise prices or change their terms, you are stuck. WordPress remains open-source. You own your data, your code, and your content. For a growing business, this sovereignty is non-negotiable.</p>
      
      <h3>Elementor & AI</h3>
      <p>The modern WordPress stack, including Elementor and Divi, now integrates AI directly. We can generate layouts, write copy, and optimize images without leaving the dashboard. This speed allows me to deliver robust, custom sites for my clients at a fraction of the traditional cost.</p>
    `
  },
  {
    id: "storytelling-digital-age",
    title: "From Literature to Leads: The Art of Digital Storytelling",
    excerpt: "How my background in English Literature helps craft brand narratives that convert cold traffic into loyal customers.",
    category: "Copywriting",
    date: "Aug 05, 2024",
    readTime: "4 min read",
    author: "Momen A. R. Chowdhury",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    content: `
      <p>Data tells you <em>who</em> to target. Storytelling tells you <em>how</em> to connect. In my years teaching literature, I learned that humans are wired for narrative. We remember stories far better than we remember statistics.</p>
      
      <p>When I craft a landing page or an email sequence, I'm not just listing features. I'm telling the story of the customer's problem and positioning the product as the resolution. This is the classic "Hero's Journey" applied to marketing.</p>
      
      <p>Whether it's a home service company in Bangladesh or a tech startup in the US, the principle remains: connect emotionally, and the logic of the sale will follow.</p>
    `
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "emarket247",
    title: "eMarket247",
    headline: "Fashion & Jewellery in Bangladesh",
    description: "Leading the e-commerce storefront development, UX architecture, and digital acquisition funnels for Bangladesh's modern fashion and jewellery brand. Currently under active development.",
    url: "https://emarket247.shop",
    category: "client",
    categoryLabel: "Client Project",
    status: "Under Development",
    statusType: "development",
    imageUrl: "https://emarket247.shop/assets/images/editorial/emarket247-hero-vermilion-atelier.webp",
    fallbackImageUrl: "https://s0.wp.com/mshots/v1/https://emarket247.shop?w=800&h=500",
    tags: ["E-Commerce Storefront", "Fashion & Jewellery", "Client Acquisition", "UI/UX Architecture"],
    metrics: "Active Client Build"
  },
  {
    id: "hostmarc",
    title: "HostMarc",
    headline: "Websites, Hosting & Growth for Ambitious Businesses",
    description: "High-performance web engineering, independent server benchmarks, and transparent hosting guidance helping ambitious businesses scale online with verified performance and speed.",
    url: "https://hostmarc.pages.dev",
    category: "affiliate",
    categoryLabel: "Affiliate & Personal Venture",
    status: "Live Venture",
    statusType: "live",
    imageUrl: "/hostmarc-banner.svg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    tags: ["Web Engineering", "Affiliate Ecosystem", "Server Benchmarks", "Cloudflare Pages"],
    metrics: "Personal Brand & Affiliate"
  },
  {
    id: "ural-travel",
    title: "URAL Travel Guides",
    headline: "Bangladesh Travel Guides, Flights & Visas from Dhaka",
    description: "Comprehensive travel content engine empowering Bangladeshi travelers with BDT flight guidance, visa checklists for Bangladeshi passport holders, regional destination itineraries, and trip-budget planners.",
    url: "https://ural-travel.pages.dev",
    category: "next",
    categoryLabel: "Next Project",
    status: "Next Venture · In Beta",
    statusType: "upcoming",
    imageUrl: "https://ural-travel.pages.dev/og-image.jpg",
    fallbackImageUrl: "https://s0.wp.com/mshots/v1/https://ural-travel.pages.dev?w=800&h=500",
    tags: ["Travel Content Engine", "Programmatic SEO", "Flight & Visa Guides", "Cloudflare Pages"],
    metrics: "Upcoming Launch"
  },
  {
    id: "sunlit",
    title: "Sunlit Interior",
    headline: "Premier Bangladeshi Interior & Home-Service Company",
    description: "End-to-end digital infrastructure and client acquisition funnels deployed on WordPress and Elementor, driving multi-channel lead generation and market leadership.",
    url: "https://sunlitbd.com",
    category: "client",
    categoryLabel: "Client Project",
    status: "Live Case Study",
    statusType: "live",
    imageUrl: "https://s0.wp.com/mshots/v1/https://sunlitbd.com?w=800&h=500",
    fallbackImageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    tags: ["WordPress + Elementor", "Local SEO Lead Gen", "Market Positioning", "Client Acquisition"],
    metrics: "Current Client Leadership"
  }
];

