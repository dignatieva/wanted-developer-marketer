/**
 * All the words live here. Edit this file, not the markup.
 */

import type { ImageMetadata } from 'astro';

// Imported rather than dropped in /public so Astro resizes them, converts them
// to webp and emits width/height. To swap a photo, replace the file in
// src/assets/evidence/ keeping the name — a missing file fails the build loudly
// instead of shipping a hole in the page.
import mugshotImg from '../assets/evidence/mugshot.jpg';
import arduinoImg from '../assets/evidence/arduino.jpg';
import diplomaImg from '../assets/evidence/diploma.jpg';
import robotImg from '../assets/evidence/robot.jpg';
import retroImg from '../assets/evidence/retro.jpg';

export const suspect = {
  name: 'Daryna Rodriguez',
  alias: 'The T-Shaped Outlaw',
  role: 'Developer Marketer',
  wantedBy: 'PostHog · Marketing Team',
  /**
   * Run through PostHog's own compensation calculator rather than copied off the
   * posting. Their published formula is:
   *   SF benchmark x location factor x level modifier x step modifier
   * The posting quotes $207,100-$226,720, which is the $218,000 San Francisco
   * benchmark at a level modifier of 1 and the 0.95-1.04 step range.
   * Berlin/Leipzig carries a location factor of 0.65 and is denominated in EUR
   * (their factors have the exchange rate baked in), so:
   *   218,000 x 0.65          = EUR 141,700 at step 1.0
   *   141,700 x 0.95 and 1.04 = EUR 134,615 - 147,368
   * Source: PostHog/posthog.com, CompensationCalculator/compensation_data.
   */
  reward: '€134,615 – €147,368',
  rewardNote: 'Varies by location. Estimated for Berlin with PostHog calculator',
  /** Rendered as: before + <a href=linkHref>linkText</a> + after */
  lastSeen: {
    before: 'Remote. Berlin, GMT+2. ',
    linkText: 'Armed with GitHub',
    linkHref: 'https://github.com/dignatieva',
    after: '.',
  },
  noticeId: 'DM-2026',
  email: 'darynarodriguezaguilar@gmail.com',
  jobUrl: 'https://posthog.com/careers/developer-marketer',
  links: [
    {
      label: 'Email',
      href: 'mailto:darynarodriguezaguilar@gmail.com',
      text: 'darynarodriguezaguilar@gmail.com',
    },
    // LinkedIn goes here once the profile URL is in:
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/…', text: 'linkedin.com/in/…' },
  ],
} as const;

export const letter = {
  salutation: 'Dear PostHog team,',
  question: 'Am I the marketer you’ve been looking for?',
  body: [
    'You mentioned you’re looking for a builder, so my first thought was to build this page. A dry, formal CV just can’t capture my kind of weird or tell a good story—or really show how I’d fit in here. So why not show you instead of just telling?',
  ],
  signoff: 'So I broke down your job requirements and told my story alongside them with real examples, part by part.',
} as const;

export type Exhibit = {
  label: string;
  href: string;
  note?: string;
};

export type VideoEvidence = {
  /** YouTube video id. */
  id: string;
  title: string;
  note: string;
  stamp: string;
};

/**
 * Company names that get linked automatically the first time they appear in a
 * charge's testimony. Add a term here and every charge picks it up.
 *
 * LeadScanr is absent because it has no live site to point at.
 */
export const companyLinks: Record<string, string> = {
  Precoro: 'https://precoro.com/',
  YouScan: 'https://youscan.io/',
  Mercanis: 'https://mercanis.com/',
  MomQuest: 'https://momquest.app/',
};

export type Partner = {
  /** Brand being integrated with. */
  name: string;
  /** Which of her products the integration was built for. */
  product: string;
  /** The integration itself. */
  href: string;
  /** The product's own site. Makes the small label a second, separate link. */
  productHref?: string;
  /**
   * Optional real logo. Drop an SVG into src/assets/logos/, import it at the top
   * of this file, and set it here — the plate switches from the wordmark to the
   * image automatically. Left unset by default: reproducing someone else's logo
   * badly is worse than setting their name in type, and third-party brand assets
   * come with their own usage rules.
   */
  logo?: ImageMetadata;
};

export type Blueprint = {
  label: string;
  /** Each node carries the connector that follows it; the last one has none. */
  chain: { name: string; role: string; connector?: string; retired?: boolean }[];
  builtWith: { name: string; skills: string[] };
  stats: { value: string; label: string }[];
  footnote: string;
  profileHref: string;
};

/**
 * Charge 03's system diagram. Drawn in HTML and CSS rather than as a fixed SVG
 * so it reflows instead of scaling down to unreadable on a phone.
 *
 * To add the GitHub contribution screenshot as well: save it to
 * src/assets/evidence/github-contributions.png and add it to this charge's
 * `photos` array. It is not referenced yet because astro:assets fails the build
 * on a missing import, and an absent file would break the site rather than
 * degrade.
 */
export const rebuild: Blueprint = {
  label: 'System diagram — Mercanis site rebuild',
  chain: [
    { name: 'Webflow', role: '339 pages, retired', connector: '⇒', retired: true },
    { name: 'Astro', role: 'codebase in GitHub', connector: '+' },
    { name: 'Sanity', role: 'content pages', connector: '→' },
    { name: 'Vercel', role: 'build & deploy', connector: '→' },
    { name: 'mercanis.com', role: 'live' },
  ],
  builtWith: {
    name: 'Claude Code',
    skills: ['SEO', 'QA', 'Site health monitoring'],
  },
  stats: [
    { value: '449', label: 'contributions in the last year' },
    { value: '177', label: 'commits in July 2026 alone' },
    { value: '175', label: 'of those in the Mercanis repo' },
  ],
  footnote:
    'The Mercanis repository is private, so the commit counts are visible on my own profile rather than yours. The contribution graph is public.',
  profileHref: 'https://github.com/dignatieva',
};

export type PhotoEvidence = {
  src: ImageMetadata;
  /** Visible caption. Free to be a joke — it is not the alt text. */
  caption: string;
  /**
   * What is actually in the photo, for anyone who cannot see it. Falls back to
   * the caption, but a caption that lands a joke rarely describes the image.
   */
  alt?: string;
  stamp: string;
  tilt: number;
  /**
   * object-position for the square crop. These are tall photos being cropped to
   * 1:1, so anything whose subject sits away from the vertical centre needs a
   * nudge or it gets its head cut off.
   */
  focus?: string;
};

/**
 * Precoro videos she wrote the scripts and storylines for. Both confirmed live
 * and embeddable on the Precoro channel (youtube.com/@precoro).
 *
 * Swap in either of these if they are the better examples of your work:
 *   x7tT9L7cUAU — "Precoro Demo | Procurement Centralization & Automation Platform"
 *   DQDEd1aFLKA — "Advanced Procurement Dashboard | Precoro"
 */
export const videos: VideoEvidence[] = [
  {
    id: '_AKJxrQex1U',
    title: 'What is Precoro? | Procurement Software Demo',
    note: 'The flagship product explainer. The hard part is making software look like it solves a problem rather than like a series of screens.',
    stamp: 'Reel 01',
  },
  {
    id: 'bSgLnAwCoyA',
    title: 'What Is Procurement? | Precoro',
    note: 'Top of funnel, category education. Written for someone who typed a definition into Google and has no idea the product exists yet.',
    stamp: 'Reel 02',
  },
];

export type Charge = {
  n: string;
  /** Lifted from the posting, near-verbatim. */
  charge: string;
  /** Their words, marked as such. */
  source: 'required' | 'nice-to-have';
  plea: string;
  testimony: string[];
  exhibits?: Exhibit[];
  /** All rendered inline in this charge's evidence panel, not as their own sections. */
  videos?: VideoEvidence[];
  photos?: PhotoEvidence[];
  partners?: Partner[];
  blueprint?: Blueprint;
};

export const charges: Charge[] = [
  {
    n: '01',
    charge: 'Excellent writing, researching, and communication skills',
    source: 'required',
    plea: 'Guilty',
    testimony: [
      'My first degree is in Publishing and Editing. I have been writing since I was six years old — no joke, call my mom and she will recite my first “poems” to you by heart.',
      'Since then I have mostly written for other people’s brands, inside other people’s approval flows. Here is both kinds of evidence: the polished version, and the version with nobody standing behind me.',
    ],
    exhibits: [
      {
        label: 'precoro.com',
        href: 'https://precoro.com/',
        note: 'Pretty much the entire website. I wrote it.',
      },
      {
        label: 'Introducing Punch-In: Precoro and Amazon Business New Integration',
        href: 'https://docs.google.com/document/d/17vJpODr7GOEalP3txPDL5-aijHjN5iSGsYFIkTXghPc/edit?usp=drive_link',
        note: 'Launch announcement, ~700 words. The Amazon Business partnership from charge 02, written up.',
      },
      {
        label: 'How PassportCard Unified Procurement for Multiple Entities',
        href: 'https://docs.google.com/document/d/1LVyyFjtDCNcbTe4-eLfJMvnvXidTvTN-YDYseosmqXs/edit?usp=drive_link',
        note: 'Customer case study, ~1,300 words. A 500-person insurer on four continents, moving off SAP.',
      },
      {
        label: '8 Supplier Management Best Practices any business can implement',
        href: 'https://docs.google.com/document/d/19TeBhqFgSK540xvIbgxK7MPNwJ8HP7X5w5ZtMDMG-7U/edit?usp=drive_link',
        note: 'Long-form guide, ~1,800 words. The kind of piece that has to rank and still be worth reading.',
      },
      // Current work at Mercanis — enterprise case studies with named customers.
      {
        label: 'BASF × Mercanis — enterprise case study',
        href: 'https://drive.google.com/file/d/1i_zoxmrism2uGXBT0PGxtLPbH8ekcGdj/view?usp=drive_link',
        note: 'Designed PDF case study, written for the chemical group BASF.',
      },
      {
        label: 'Franz Morat Group × Mercanis — case study',
        href: 'https://drive.google.com/file/d/1EsPO70LRQj3hcei72DAYBlkWWPH-7gdv/view?usp=drive_link',
        note: 'Designed PDF case study, German precision manufacturing.',
      },
      {
        label: 'GASAG × Mercanis',
        href: 'https://docs.google.com/document/d/1sj13jHF_quMD-o4Aj_cMsxBIHhtbqUQW/edit?usp=drive_link',
        note: 'Case study, ~1,900 words. Berlin’s energy supplier: a 17-person team, €250–280M of annual spend, 38% of their admin time back.',
      },
      {
        label: 'GOLDBECK × Mercanis: a single source of truth for supplier documentation',
        href: 'https://docs.google.com/document/d/13420ULCnuIHmCsQM9dvCp982EAlB69wE/edit?usp=drive_link',
        note: 'Case study, ~2,400 words. A €6–7bn construction group, 250–600 procurement hours saved a year.',
      },
      {
        label: 'The one Substack post',
        href: 'https://darynarodriguez.substack.com/p/i-get-to-become-myself-in-the-dark',
        note: 'From my short-lived “I should write for myself” era. No brand rules, no ten-step approval flow. This is what I sound like.',
      },
    ],
    videos,
  },
  {
    n: '02',
    charge: 'Experience running email campaigns, GTM campaigns, and sales enablement',
    source: 'required',
    plea: 'Guilty',
    testimony: [
      'I’ve planned, coordinated, and launched products, from major features to integration partnerships with Amazon, NetSuite, QuickBooks, Slack, and others. That meant owning whatever the launch needed: positioning, messaging, sales enablement, customer communications, email campaigns, paid ads, landing pages, product videos, webinars, and making sure it all came together into one coherent GTM motion.',
      'At YouScan and LeadScanr, I worked closely with Product, writing PRDs, roadmaps, documentation, onboarding materials, email sequences, in-app tooltips, Intercom flows, and Help Center content to translate product requirements into user experiences.',
      'At Precoro, I partnered with Product and Sales on positioning, battlecards, sales decks, product messaging, and end-to-end integration launches. I also designed trial onboarding, lifecycle email sequences, feature announcements, and adoption campaigns.',
      'At Mercanis, my focus shifted toward growth marketing: translating product capabilities into customer pain points and outcomes through messaging frameworks, case studies, landing pages, and campaign assets.',
      'Throughout my career, I’ve naturally gravitated toward the space between Product, Marketing, Sales, and Customer Success. I’ve never been particularly attached to job descriptions. If something needed building for a launch to succeed, I usually ended up building it.',
    ],
    // Shown as a row of plates rather than a list of links — the point of this
    // charge is the logos, and each one goes to the live integration page.
    partners: [
      {
        name: 'Amazon Business',
        product: 'Precoro',
        productHref: 'https://precoro.com/',
        href: 'https://business.amazon.com/en/partners/precoro',
      },
      {
        name: 'NetSuite',
        product: 'Precoro',
        productHref: 'https://precoro.com/',
        href: 'https://precoro.com/integrations/netsuite-integration',
      },
      {
        name: 'QuickBooks',
        product: 'Precoro',
        productHref: 'https://precoro.com/',
        href: 'https://precoro.com/integrations/quickbooks-integration',
      },
      {
        name: 'Slack',
        product: 'Precoro',
        productHref: 'https://precoro.com/',
        href: 'https://precoro.com/integrations/slack-integration',
      },
      {
        name: 'Slack',
        product: 'YouScan',
        productHref: 'https://youscan.io/',
        href: 'https://slack.com/marketplace/A7JQ52C03-youscan',
      },
    ],
  },
  {
    n: '03',
    charge: 'Development experience — in a formal role, or on side projects',
    source: 'required',
    plea: 'Guilty',
    testimony: [
      'This month, I moved an entire website, 339 pages, from Webflow to Astro. Research, planning, implementation, migration. The goal was simple: give the team the ability to ship pages without waiting for me or fighting Webflow every time (we don’t have a single developer in Marketing).',
      'Long before AI made building websites feel like cheating, I built a handful of WordPress sites for small businesses to earn some extra money and learn something new. During an internship at ePages, I even built a WordPress plugin. As far as I know, it’s still quietly doing its job somewhere on the internet.',
      'I studied Information Engineering and spent plenty of time writing C for microcontrollers. I definitely couldn’t do that today without a lot of Googling, but it changed how I think about systems and gave me a solid understanding of algorithms, software architecture, and databases.',
      'This page is built in Astro from scratch. No template. It felt like the appropriate way to apply to a company that likes people who build.',
    ],
    exhibits: [
      {
        label: 'ePages WordPress plugin',
        href: 'https://github.com/ePages-de/ePages-wordpress-plugin',
        note: 'The intern project that outlived the internship.',
      },
    ],
    blueprint: rebuild,
    // Re-lettered A–C so this charge reads without a gap; the diploma is charge
    // 04's Exhibit D, since it is evidence of the AI work rather than the hardware.
    photos: [
      {
        src: arduinoImg,
        caption: 'Suspect in her natural habitat. Breadboard, jumper wires, absolutely no idea what time it is.',
        alt: 'Daryna at a desk in a darkened room, pointing at the camera, with an Arduino board, breadboard and bundles of jumper wires spread out in front of her',
        stamp: 'Exhibit A',
        tilt: -2.4,
      },
      {
        src: robotImg,
        caption: 'COVID fun project. Raspberry Pi quadruped. It walked. Mostly.',
        alt: 'A four-legged Raspberry Pi robot with two ultrasonic sensors and a camera module, its ribbon cable trailing across a wooden floor',
        stamp: 'Exhibit B',
        tilt: -1.2,
      },
      {
        src: retroImg,
        caption: 'Engineering labs. Where I learned that the jokes about engineers are, in fact, based on true events.',
        alt: 'A monitor on a lab bench showing dense, colourful text-mode output, with two joysticks and a remote control in front of it and older computers alongside',
        stamp: 'Exhibit C',
        tilt: 2.6,
        // The monitor sits high in frame; a centred crop decapitates it.
        focus: 'center 22%',
      },
    ],
  },
  {
    n: '04',
    charge: 'Deep experience in the AI space, ideally with agent-driven development',
    source: 'required',
    plea: 'Guilty',
    testimony: [
      'I worked across product and marketing for two products built around AI-powered text and image analysis for social media: LeadScanr and YouScan. This was before the current LLM wave, when “AI” mostly meant teaching models to recognize sentiment, logos, objects, emotions, and intent across millions of social media posts.',
      'My role sat between users, product managers, linguists, and developers. It gave me a practical understanding of how NLP systems are built and improved: tokenization, stemming and lemmatization, sentiment classification, supervised and semi-supervised learning, annotation quality, training datasets, and the constant reality that human language is wonderfully messy.',
      'Curious to understand more, I later completed the Lviv Data Science Summer School, focusing on Natural Language Processing and Social Network Analysis.',
      'Fast-forward to today, and I’m building with AI instead of just marketing it. I use coding agents daily to prototype ideas, build websites, automate repetitive work, and learn new technologies by doing. This entire page was built in Astro from scratch in an afternoon, with an AI coding agent as my pair programmer.',
      'That is what excites me most about agent-driven development. Not the “build an app in one prompt” demos, but the real work: giving context, reviewing decisions, debugging, iterating, and gradually turning an idea into something that ships. That’s the part I’d be most excited to write about for PostHog.',
    ],
    photos: [
      {
        src: diplomaImg,
        caption:
          'Lviv Data Science Summer School, 2017. Chose Natural Language Processing because computers understanding people sounded fun and improbable. Nine years later, here we are.',
        alt: 'A certificate from the Ukrainian Catholic University for completing the Lviv Data Science Summer School, lying on a desk beside a mug and a notebook printed with DREAM ON',
        stamp: 'Exhibit D',
        tilt: 1.8,
      },
    ],
  },
  {
    n: '05',
    charge: 'A track record of marketing to developers or writing technical content',
    source: 'required',
    plea: 'Partially guilty',
    testimony: [
      'I haven’t spent my career marketing to developers. But I did spend it learning complex domains well enough to earn the trust of technical audiences and translating them into something everyone else can understand.',
      'I’ve done it for IT Service Management, learning how enterprise IT teams, administrators, service desks, and infrastructure teams actually work before writing content, campaigns, and product messaging for them.',
      'I did it again in procurement, where I learned the language of sourcing, logistics, operations, and supply chains well enough to build positioning, launch products, and explain complex workflows to buyers, users, and executives.',
      'Earlier in my career, I even helped create educational materials around machinery safety, CE marking, and plant operations.',
      'The domain changes. My approach doesn’t: be curious, ask embarrassing questions, click every button, then write the very thing you wish you’d had on day one.',
    ],
  },
  {
    n: '06',
    charge: 'Nice to have: DevTool familiarity, and a product, growth or content marketing background',
    source: 'nice-to-have',
    plea: 'Guilty',
    testimony: [
      'On the growth side, I’ve run everything from SEO and lifecycle emails to paid acquisition, webinars, product launches, and executive thought leadership.',
      'At Precoro, we grew organic traffic from 3.8k to 17k monthly visitors, increased SQLs 4x, and grew average deal size from ~$3.9k to ~$15k by rebuilding how marketing and sales worked together.',
      'More recently at Mercanis, I took LinkedIn in-house, built a demand generation system around executive content, and reduced cost per opportunity by 87% while making attribution something Finance and Sales could actually trust.',
      'For recent side projects, I built MomQuest, an AI-powered platform for mothers in Germany, mostly because I experienced the problem myself and wanted to build a real product. I also took part in Lovable’s She Builds hackathons, spending weekends building prototypes simply to see what could be shipped in a couple of days.',
      'These days, I spend a lot of time with Astro, React, TypeScript, Tailwind, Sanity, GitHub, Supabase, Cloudflare Workers, Vercel, Cursor, Claude Code, ChatGPT, Figma, and whatever else gets the job done.',
      'Every new project is usually an excuse to learn another tool. It is an exciting time to be a marketer. We’re all beginners again in one way or another. I’d love to learn alongside the PostHog team.',
    ],
  },
];

/**
 * Small print at the foot of the poster. Stored in sentence case and uppercased
 * by CSS, so plain mode keeps "API", "SQL", "JSON", "PR" and "Web Vitals"
 * correctly cased rather than shouting everything.
 */
export const alsoKnownFor = [
  'Reading the docs before asking.',
  'Requesting API keys.',
  'Caught writing SQL.',
  'Not afraid of JSON.',
  'Cares suspiciously much about Web Vitals.',
  'Known to submit the occasional PR.',
  'Has been spotted using the terminal.',
  'Leaving better attribution than she found.',
  'Fixing the tracking herself.',
  'Files bugs with repro steps.',
  'Believes good marketing is a product.',
  'Shipping before the perfect brief exists.',
];

/** The rubber stamp across the bottom of the poster. */
export const stamps = {
  poster: 'Found?',
  plain: 'Application enclosed',
} as const;

/** The one photo that goes on the poster itself. */
export const mugshot = {
  src: mugshotImg,
  alt: 'Daryna Rodriguez, photographed against a dark red wall',
  // Rendered uppercase by CSS, so it is written in sentence case here.
  caption: 'The suspect, known to approach strangers about product analytics',
} as const;

export const closing = {
  heading: 'If this is the person you’re looking for',
  body: [
    'The posting says the next steps are a couple of short interviews and a paid work sample that looks like the real job.',
    'This was the unpaid one. I did it anyway, because it was the fastest way to answer the question at the top of the page.',
  ],
  ps: 'P.S. This page is instrumented with PostHog. If you scrolled this far, I know.',
} as const;
