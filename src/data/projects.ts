export interface Project {
  slug: string;
  title: string;
  displayUrl: string;
  description: string;
  preview: string;
  scope: string[];
  tags: string[];
  subLinks: { label: string; href: string }[];
  image?: string;
  body?: string[];
  docLink?: string;
  docLinkLabel?: string;
  scopeHeading?: string;
  pdfEmbed?: string;
}

export const projects: Project[] = [
  {
    slug: 'european-hotel-booking-analysis',
    image: '/project-hotel-booking.webp',
    pdfEmbed: '/pdfs/european-hotel-booking-analysis.pdf',
    title: 'European Hotel Booking Analysis',
    displayUrl: 'mikcowans.co.uk › projects › european-hotel-booking-analysis',
    description:
      'A global hotel chain wanted to understand how people actually book rooms. The trends, the habits, the moments where the decision gets made. They needed digital adoption and travel habit insights to shape their room booking strategy.',
    preview:
      'Market research to uncover device usage, value and travel patterns of European travellers for a global hotel brand.',
    body: [
      'What devices do people use to research and book hotel rooms, and how does that differ across EU markets? What\'s the value of a booking on each one? Where do people travel, and why? How do they prefer to pay?',
      'A global hotel chain wanted to understand how people actually book rooms. The trends, the habits, the moments where the decision gets made. They needed digital adoption and travel habit insights to shape their room booking strategy.',
      'I built a research piece that starts at the broadest market view and narrows down to the final transaction.',
    ],
    scope: [
      'Device and internet usage by market',
      'Length, type and value of stay by device',
      'Accommodation type',
      'Where people travel in the EU, and why',
      'What drives their accommodation choice',
      'Payment platforms and methods',
    ],
    tags: ['Market Research', 'Digital Strategy', 'Travel & Hospitality'],
    subLinks: [],
    docLink: '#',
    scopeHeading: 'The strategy covers',
  },
  {
    slug: 'pension-isa-search-analysis',
    image: '/project-pension-isa.webp',
    pdfEmbed: '/pdfs/pension-isa-search-analysis.pdf',
    title: 'Pension & ISA Search Analysis',
    displayUrl: 'mikcowans.co.uk › projects › pension-isa-search-analysis',
    description:
      'A large keyword research and insight project across the UK pension and ISA markets. I categorised every query by product, theme and funnel stage, then mapped the customer journey end to end.',
    preview:
      'Keyword research and intent analysis across the UK pension and ISA markets, mapping the full customer journey from first search to product comparison.',
    body: [
      'How do people search for pension and ISA products online? What does the customer journey actually look like, and what content do they need at each stage?',
      'A large keyword research and insight project across the UK pension and ISA markets. I categorised every query by product, theme and funnel stage, then mapped the customer journey end to end.',
      'The result is less a keyword list and more an education piece, showing how potential customers move through the funnel, the questions they ask along the way, and the content that actually answers them.',
    ],
    scope: [
      'The search journey',
      'Content needs by stage',
      'Categorised intent across the funnel',
      'How users search and what they consume',
      'When they search',
      'Behavioural insights',
    ],
    tags: ['Keyword Research', 'SEO Strategy', 'Financial Services'],
    subLinks: [],
    docLink: '#',
    docLinkLabel: 'View the strategy presentation.',
    scopeHeading: 'It covers',
  },
  {
    slug: 'halloween-costume-market-analysis',
    image: '/project-halloween-costume-market-analysis.webp',
    pdfEmbed: '/pdfs/halloween-costume-market-analysis.pdf',
    title: 'Halloween Costume Market Analysis',
    displayUrl: 'mikcowans.co.uk › projects › halloween-costume-market-analysis',
    description:
      'A global fashion ecommerce retailer wanted to know where to invest its SEO effort across European markets, and how to win Halloween, their biggest sales window of the year.',
    preview:
      'Global market sizing and UK audience analysis for a fashion retailer targeting Halloween — the biggest costume sales window of the year.',
    body: [
      "Which international markets offer the biggest SEO opportunity? Who's actually searching for Halloween costumes, and what are they trying to buy?",
      "A global fashion ecommerce retailer wanted to know where to invest its SEO effort across European markets, and how to win Halloween, their biggest sales window of the year.",
      "I mapped 5.7 million annual costume searches across nine markets, then broke down UK Halloween demand by audience and costume type, comparing each segment to what the site was already capturing.",
      "The analysis shaped two things: the SEO roadmap, and the buying plan for next year's costume range.",
    ],
    scope: [
      'Global market sizing across nine countries, with Halloween-specific demand alongside year-round volume',
      'The Halloween search split between generic category searches and audience-specific searches',
      'Audience breakdown by age and gender, with capture rates for each segment',
      'Costume category demand and the gaps in the existing product range',
      'Priority pages and new category builds for the SEO roadmap',
      "Costume types to prioritise for next year's production",
    ],
    tags: ['Keyword Research', 'SEO Strategy', 'Fashion & eCommerce'],
    subLinks: [],
    docLink: '#',
    docLinkLabel: 'View the strategy presentation.',
    scopeHeading: 'It covers',
  },
  {
    slug: 'finance-product-search-analysis',
    image: '/project-finance-product-search-analysis.webp',
    pdfEmbed: '/pdfs/finance-product-search-analysis.pdf',
    title: 'Finance Product Search Analysis',
    displayUrl: 'mikcowans.co.uk › projects › finance-product-search-analysis',
    description:
      'A major financial services brand wanted to understand the search behaviour around four of its core product lines: ISAs, pensions, investments and equity release.',
    preview:
      'Intent analysis and demand mapping across four financial product markets, with a prioritised content and landing page action plan.',
    body: [
      'How confident are customers when they search for financial products online? How much information, help and guidance do they need before they\'re ready to buy, and where are the biggest gaps between demand and what\'s actually being captured?',
      'A major financial services brand wanted to understand the search behaviour around four of its core product lines: ISAs, pensions, investments and equity release. Each product carries different levels of customer confidence, which shapes how much help people need before they\'re ready to act.',
      'I split every search across the four markets into three intents: information (what is this product), help (how does it work, how do I choose), and product (rates, comparisons, ready-to-buy queries). Then I sized the captured versus uncaptured demand at each stage, and overlaid the existing site\'s rankings to show where the brand was visible and where it wasn\'t.',
      'The result was a prioritised content and landing page action plan, built around the journeys customers were actually taking rather than the ones the site was set up to serve.',
    ],
    scope: [
      'Search market sizing for ISAs, pensions, investments and equity release',
      'Customer confidence patterns by product, and what they signal about content need',
      'The information, help and product intent split for each market',
      'Captured versus uncaptured demand at every stage',
      'Existing rankings mapped against the most valuable queries',
      'A tiered content plan, with the pages to build first and the ones to optimise next',
    ],
    tags: ['Keyword Research', 'SEO Strategy', 'Financial Services'],
    subLinks: [],
    docLink: '#',
    docLinkLabel: 'View the strategy presentation.',
    scopeHeading: 'It covers',
  },
  {
    slug: 'private-school-global-search-analysis',
    image: '/project-private-school-global-search-analysis.webp',
    pdfEmbed: '/pdfs/private-school-global-search-analysis.pdf',
    title: 'Private School Global Search Analysis',
    displayUrl: 'mikcowans.co.uk › projects › private-school-global-search-analysis',
    description:
      'A global network of private schools wanted to know where to focus its digital investment across 17 markets — complicated by the fact that parents don\'t search domestically.',
    preview:
      'Cross-border keyword analysis across 17 markets and 14 languages for a global private school network, with language priorities for translation investment.',
    body: [
      'Where are parents actually searching for private schools, and how often does that search cross borders? Which markets should be prioritised, in which languages, and on which sites?',
      'A global network of private schools wanted to know where to focus its digital investment across 17 markets. The complication: parents don\'t search domestically. A family in Hungary might be looking at schools in the UAE. A family in China might be looking at the USA. Treating each country as a self-contained market would miss most of the opportunity.',
      'I analysed 32,000 keywords across 14 languages and 17 search origins, mapping where searches came from, where they were directed, and which language each was conducted in. Then I sized the captured versus uncaptured demand for each market, and modelled the language priorities for translation investment.',
      'The findings shaped more than SEO. Website translation is expensive, so the language priorities fed the wider digital strategy: which sites to translate, which markets to build dedicated content for, and which to serve through an existing site in a different country.',
    ],
    scope: [
      'Search market sizing across 17 origins, with captured versus uncaptured demand for each',
      'Cross-border search patterns showing which markets look domestically and which look abroad',
      'The destination split for outbound searches, by origin country',
      'Language priorities for each market, including the Mandarin / Baidu split for China',
      'Information needs by market, from curriculum and facilities through to fees and uniform',
      'A prioritised list of which schools and which countries to focus on, by origin',
    ],
    tags: ['Keyword Research', 'SEO Strategy', 'International SEO'],
    subLinks: [],
    docLink: '#',
    docLinkLabel: 'View the strategy presentation.',
    scopeHeading: 'It covers',
  },
];
