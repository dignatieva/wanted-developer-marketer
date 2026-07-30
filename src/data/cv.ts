/**
 * The CV, taken from "Daryna Rodriguez - CV (1).docx".
 *
 * This is what boring mode shows: not the poster restyled, but the actual
 * document, laid out for a screen and for print. Cmd/Ctrl+P produces a clean
 * PDF, so this can replace the .docx rather than duplicate it.
 */

export type Role = {
  title: string;
  from: string;
  to: string;
  /** Computed from the dates rather than carried over from the document. */
  duration: string;
  bullets: string[];
};

export type Position = {
  company: string;
  location: string;
  /** Most companies have one role; YouScan has two. */
  roles: Role[];
  /**
   * A break renders quieter than a job and carries no bullets. Stating it beats
   * leaving an unexplained hole in the date rail, which a reader will spot.
   */
  kind?: 'break';
};

export const cv = {
  name: 'Daryna Rodriguez',
  headline:
    'B2B SaaS Marketing & Growth · Building Teams, Scaling Brands & Telling Stories Through Data · Tech & Strategy',
  contact: {
    email: 'darynarodriguezaguilar@gmail.com',
    /**
     * From the CV. A public page plus a public repo means this is scrapable —
     * delete the line if you would rather it were not.
     */
    phone: '+49 151 15778275',
    location: 'Berlin, Germany',
    linkedIn: 'https://www.linkedin.com/in/darynarodriguez/',
  },
} as const;

export const experience: Position[] = [
  {
    company: 'Mercanis',
    location: 'Germany',
    roles: [
      {
        title: 'Marketing Manager',
        from: 'Sep 2025',
        to: 'Now',
        duration: '11 mos',
        bullets: [
          'Shaping brand positioning and leading website strategy to establish Mercanis as the go-to AI procurement platform.',
          'Running paid social and performance campaigns to fuel pipeline growth.',
          'Building customer case studies, testimonials, and community initiatives to drive trust, loyalty, and adoption.',
          'Driving lead generation and demand gen to accelerate market expansion.',
        ],
      },
    ],
  },
  {
    company: 'Career break',
    location: '',
    kind: 'break',
    roles: [
      {
        title: 'Parental leave',
        from: 'Aug 2024',
        to: 'Aug 2025',
        // Inclusive count, matching how every other duration here is written.
        duration: '1 yr 1 mo',
        bullets: [],
      },
    ],
  },
  {
    company: 'Precoro',
    location: 'Germany',
    roles: [
      {
        title: 'Head of Marketing',
        from: 'Mar 2021',
        to: 'Jul 2024',
        duration: '3 yrs 5 mos',
        bullets: [
          'Built and led a high-performing marketing team of 12, scaling from being the sole marketer to establishing a fully in-house department responsible for SEO, PPC, content syndication, development, and analytics.',
          'Designed and executed comprehensive marketing strategies that drove significant revenue growth, increasing the volume of Sales Qualified Leads by 4x.',
          'Elevated the average deal value from $3,900 to $15,000 through targeted marketing initiatives and improved lead qualification processes.',
          'Increased average monthly SEO traffic by 347%, growing from 3,800 to 17,000, through strategic content creation, on-page optimisation, and technical SEO enhancements.',
          'Managed end-to-end digital advertising campaigns across Google Ads, Bing, LinkedIn, and Quora, achieving consistent ROI improvement.',
          'Collaborated with product teams to execute go-to-market strategies for new features, aligning product positioning with customer needs and market opportunities.',
          'Developed customer advocacy programmes, including case studies and testimonials, to bolster brand credibility and drive lead conversion.',
        ],
      },
    ],
  },
  {
    company: 'YouScan',
    location: 'Ukraine',
    roles: [
      {
        title: 'Performance Marketing Manager',
        from: 'Nov 2019',
        to: 'Feb 2021',
        duration: '1 yr 4 mos',
        bullets: [
          'Specialised in PPC campaign management across Facebook, Google Ads, Bing Ads, Quora, LinkedIn, and Twitter, driving measurable engagement and conversion growth in US, UK, LATAM and CIS markets.',
          'Strategically planned, executed, and optimised digital marketing campaigns, ensuring maximum ROI and alignment with business goals.',
          'Managed content creation and distribution across paid channels, maintaining consistency in tone, branding, and messaging.',
          'Led data analytics efforts, monitoring campaign performance metrics and generating actionable insights to refine targeting, ad creatives, and bidding strategies.',
          'Implemented and managed HubSpot for marketing automation, lead tracking, and data management, streamlining operations and enhancing reporting accuracy.',
          'Collaborated with cross-functional teams to ensure seamless integration of campaigns with broader marketing initiatives.',
        ],
      },
      {
        title: 'Head of International Marketing',
        from: 'Apr 2018',
        to: 'Oct 2018',
        duration: '7 mos',
        bullets: [
          'Conducted in-depth market research and developed the company’s first go-to-market strategy for launching in the US market.',
          'Analysed competitive landscapes, customer personas, and market dynamics to identify opportunities for entry and growth.',
          'Collaborated with cross-functional teams to align product offerings, messaging, and positioning with the US market’s needs and expectations.',
          'Delivered actionable recommendations and frameworks to support the company’s international expansion efforts.',
        ],
      },
    ],
  },
  {
    company: 'AirSlate',
    location: 'Ukraine',
    roles: [
      {
        title: 'Marketing Project Manager',
        from: 'Dec 2018',
        to: 'May 2019',
        duration: '6 mos',
        bullets: [
          'Managed and optimised advertising campaigns across Google, Bing, Quora, Twitter, LinkedIn, and app stores, driving lead generation and user engagement for pdfFiller and SignNow.',
          'Specialised in App Store Optimisation, including Search Ads and Play Market ads, to enhance visibility and downloads.',
          'Conducted performance analyses of ad campaigns, leveraging data to refine strategies and maximise ROI.',
          'Collaborated with cross-functional teams to align advertising efforts with broader product marketing objectives.',
        ],
      },
    ],
  },
  {
    company: 'LeadScanr',
    location: 'part of YouScan · Ukraine',
    roles: [
      {
        title: 'Product Manager',
        from: 'Jun 2016',
        to: 'Sep 2018',
        // The document says "1 yr 17 mos", which is not a duration. This is what
        // the dates actually work out to.
        duration: '2 yrs 4 mos',
        bullets: [
          'Identified growth opportunities and developed strategic product roadmaps to enhance user acquisition, engagement, and retention.',
          'Led a cross-functional team of developers, designers, and analysts to implement new features and improve the overall product experience.',
          'Conducted customer research and analysed user feedback to prioritise features and updates that aligned with business goals.',
          'Defined and monitored key performance metrics including ROI, LTV, ARPU, and churn, delivering actionable insights to stakeholders.',
          'Coordinated release cycles and ensured timely delivery of product updates, balancing customer needs with technical feasibility.',
        ],
      },
    ],
  },
  {
    company: 'Wendia',
    location: 'Ukraine · Denmark',
    roles: [
      {
        title: 'Digital Marketing Manager',
        from: 'May 2011',
        to: 'May 2015',
        duration: '4 yrs 1 mo',
        bullets: [
          'Designed, developed, and maintained multilingual corporate websites, landing pages, and newsletters supporting global marketing across Germany, Denmark, the UK, and the USA.',
          'Performed extensive CRM management, ensuring accurate customer data, effective campaign segmentation, and streamlined workflows to enhance lead generation and engagement.',
          'Collaborated with sales and marketing teams on branding initiatives, PR strategies, and event campaigns, including loyalty programmes and seminars.',
          'Improved website performance through analytics-driven design optimisations, A/B testing, and user behaviour tracking.',
          'Created and managed graphical assets — banners, icons, flyers, posters, and digital content — to support marketing and promotional campaigns.',
          'Developed and coded newsletters, ensuring compatibility across email platforms.',
          'Coordinated and tracked publication-related tasks from concept to promotion.',
        ],
      },
    ],
  },
];

export type Study = {
  institution: string;
  award: string;
  years: string;
};

export const education: Study[] = [
  {
    institution: 'Hamburg University of Applied Sciences',
    award: 'Bachelor of Applied Science, Information Engineering',
    years: '2013 – 2016',
  },
  {
    institution: 'National Technical University of Ukraine, Kyiv Polytechnic Institute',
    award: 'Bachelor’s Degree, Publishing and Editing',
    years: '2007 – 2011',
  },
  {
    institution: 'Lviv Data Science Summer School, UCU',
    award: 'Diploma in Data Science',
    // The CV says 2018; the certificate in the poster is dated July 2017. One of
    // the two is wrong and they now sit on the same page.
    years: '2017',
  },
];

export const languages = [
  { name: 'Ukrainian', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'German', level: 'A2' },
  { name: 'Spanish', level: 'A2' },
];
