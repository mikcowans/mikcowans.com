export interface Role {
  slug: string;
  title: string;
  company: string;
  period: string;
  domain: string;
  logos?: { src: string; alt: string }[];
  description: string;
  preview: string;
}

export const roles: Role[] = [
  {
    slug: 'seo-lead-datacamp',
    title: 'SEO Lead',
    company: 'DataCamp',
    period: 'Jan 2026 – Apr 2026',
    domain: 'datacamp.com',
    description:
      'Sole SEO and GEO lead across 150+ markets. Built a 1.4-billion-row CTR analysis in BigQuery to quantify AI Overviews impact, and shaped a five-pillar SEO and GEO strategy off the back of it. Guided the editorial strategy that lifted organic traffic by 20%, and drove 60+ page one rankings on high-intent course pages from a standing start, including top spots for AI and Python.',
    preview:
      'Building SEO and GEO strategy across 150+ markets and running experimentation programmes that drive measurable organic growth.',
  },
  {
    slug: 'senior-seo-pm-student-beans',
    title: 'Senior SEO Product Manager',
    company: 'Student Beans',
    period: 'Jul 2022 – Dec 2025',
    domain: 'studentbeans.com',
    description:
      'Owned the Student Beans website like a product, running two cross-functional squads. Doubled organic traffic in two years, adding 1M+ monthly clicks. Designed an AI translation tool that lifted international rankings by 10 positions and saved £100K a year on localisation.',
    preview:
      'Doubled organic traffic in two years, adding 1M+ monthly clicks. AI translation tool saved £100K/yr on localisation.',
  },
  {
    slug: 'seo-experience-manager-natwest',
    title: 'SEO Experience Manager',
    company: 'NatWest Group',
    period: 'Feb 2021 – Jul 2022',
    domain: 'natwest.com',
    description:
      'Owned the loans and mortgages SEO strategy across NatWest and Royal Bank of Scotland. Lifted the NatWest Mortgage Calculator from page two to position five, driving 80% more organic traffic to high-value YMYL pages.',
    preview:
      'Built SEO function across NatWest and RBS. Lifted Mortgage Calculator to position five with 80% more organic traffic.',
  },
  {
    slug: 'seo-content-analytics-lead-standard-life',
    title: 'SEO, Content & Analytics Lead',
    company: 'Standard Life',
    period: 'Aug 2018 – Feb 2021',
    domain: 'standardlife.co.uk',
    description:
      'Led a five-site migration and SEO transformation, managing a digital agency and three direct reports. Built a technical and content scoring model that shaped the new CMS and information architecture.',
    preview:
      'Multi-site SEO transformation across five properties. Technical and content scoring model drove CMS replatforming.',
  },
  {
    slug: 'web-strategy-product-owner-wood-mackenzie',
    title: 'Web Strategy & Product Owner',
    company: 'Wood Mackenzie',
    period: 'Aug 2017 – Aug 2018',
    domain: 'woodmac.com',
    description:
      'Owned the replatforming and migration of a £2.5M website and client portal, with no traffic loss pre or post launch. Set the three-year marketing and product growth strategy with design and SEO agencies.',
    preview:
      'Led Episerver migration and relaunch of a £2.5M website. Set three-year marketing and product growth strategy.',
  },
  {
    slug: 'seo-strategist-digitaslbi',
    title: 'SEO Strategist',
    company: 'DigitasLBi',
    period: 'Mar 2015 – Aug 2017',
    domain: 'digitas.co.uk',
    description:
      'International search strategy for global brands across European markets. Owned global SEO and PPC for Nord Anglia Education across 17 countries: 52% traffic growth, 177% more leads, $2 share-price growth in six months. Three EU/UK Search Awards nominations across Marriott, Bulk Powders and Stena Line.',
    preview:
      'Global SEO and PPC for Nord Anglia Education across 17 countries. 52% traffic growth, 177% more leads in six months.',
  },
  {
    slug: 'earlier-agency-roles',
    title: 'Earlier Agency Roles',
    company: 'Daykin & Storey · Shout Digital · Silverbean',
    period: 'Pre 2015',
    domain: '',
    logos: [
      { src: '/logos/daykin-storey.svg',         alt: 'Daykin & Storey' },
      { src: '/favicons/shoutdigital.com.png',   alt: 'Shout Digital' },
      { src: '/favicons/silverbean.com.png',     alt: 'Silverbean' },
    ],
    description:
      'Daykin & Storey, Shout Digital and Silverbean, where I cut my teeth on technical SEO, content and PPC.',
    preview:
      'Foundation years in agency SEO, content and PPC across Newcastle-based digital agencies.',
  },
];
