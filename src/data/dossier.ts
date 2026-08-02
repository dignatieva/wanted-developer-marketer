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
import tortoiseImg from '../assets/evidence/tortoise.jpg';

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
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/darynarodriguez/',
      text: 'linkedin.com/in/darynarodriguez',
    },
  ],
} as const;

export const letter = {
  salutation: 'Dear Joe, Sara, Cleo, Adlet, Lizzie, and the PostHog team,',
  question: 'Am I the marketer you’ve been looking for?',
  body: [
    'You said you’re looking for a builder, so my instinct was to build something immediately: this page. A dry, formal CV? It’s nearly impossible to let your humanity shine through one of those. So here’s a bit of my weirdness and personality, in my own words. No LLMs were used for the writing—just for the coding.',
  ],
  signoff: 'I broke down your job requirements and matched each one with a part of my own story. Real examples included, piece by piece.',
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
      'At 17, I hit a crossroads: Computer Engineering or Writing?',
      'On one hand, I was coding my first simple HTML websites (back when sites were built on frames—yes, I’m that old), diving into RPGs, and building my own PCs from scratch.',
      'On the other hand, I was obsessed with reading and writing; the one true magic that still exists in the world: creating stories.',
      'In the end, I chose books and a degree in Publishing and Editing. Since then, I’ve worn many hats: editor, magazine designer, marketer (multiple times!), half-baked engineering student, customer success manager, product manager, and my favorite job of all: parent.',
      'Below, you’ll find a few samples of my writing—at least, what I managed to salvage. Keeping records was never my strong suit.',
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
      'I’ve planned, coordinated, and launched products; sometimes big, shiny features, sometimes complex integrations with Amazon, NetSuite, QuickBooks, Slack, and the like. When a launch was on the line, I owned whatever it needed: positioning, messaging, sales enablement, customer communications, email campaigns, paid ads, landing pages, product videos, webinars—the whole toolkit. My job was to make sure everything came together into one coherent go-to-market story.',
      'At YouScan and LeadScanr, I was the bridge between Product and everyone else: writing PRDs, roadmaps, documentation, onboarding flows, email sequences, in-app tooltips, Intercom journeys, and Help Center content. My job: turn product requirements into user experiences.',
      'At Precoro, I teamed up with Product and Sales on everything from positioning and battlecards to sales decks, product messaging, and full-cycle integration launches. I also mapped out trial onboarding, crafted lifecycle email sequences, and dreamed up feature announcements and adoption campaigns.',
      'At Mercanis, my focus pivoted to growth marketing—translating product capabilities into real customer stories and outcomes. Messaging frameworks, case studies, landing pages, campaign assets—I built them all to connect what we made to what our customers actually needed.',
      'If there’s a theme running through my career, it’s this: I naturally gravitate to the space between Product, Marketing, Sales, and Customer Success. Job titles never really stuck; if something needed building for a launch to succeed, I was the one who built it; even if it meant drawing the map as I went.',
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
      'Just this month, I moved an entire website—339 pages—from Webflow to Astro. Research, planning, implementation, migration: all on me. The goal? Give the team the freedom to ship pages without waiting for me or wrestling with Webflow every time. (Fun fact: we don’t have a single developer in Marketing.)',
      'Long before AI made building websites feel like cheating, I was cobbling together WordPress sites for small businesses. Extra cash, yes—but mostly to learn something new. During an internship at ePages, I built a WordPress plugin from scratch. As far as I know, it’s still out there somewhere.',
      'I studied Information Engineering and spent a fair chunk of time wrangling C for microcontrollers. I’m not saying I could do it today without a hefty dose of Googling, but that era rewired how I think about systems, and left me with a real, working knowledge of algorithms, architecture, and databases.',
      'This page? Built in Astro, my favorite framework of late.',
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
      'I cut my teeth at the intersection of product and marketing, working on two AI-powered platforms—LeadScanr and YouScan—built to analyze text and images from the wild, messy world of social media. This was before LLMs were all the rage; back then, “AI” meant teaching scrappy models to spot sentiment, logos, objects, emotions, and intent buried in millions of posts.',
      'My seat? Squarely in the middle: users on one side, product managers, linguists, and developers on the other. That vantage point gave me a hands-on crash course in how NLP systems actually come together: tokenization, stemming, lemmatization, sentiment scoring, supervised and semi-supervised learning, annotation quality, training datasets, and the one constant in language: glorious, chaotic messiness.',
      'Curiosity got the better of me, so I dove deeper: Lviv Data Science Summer School, where I geeked out on Natural Language Processing and Social Network Analysis.',
      'Fast-forward to now: I’m not just marketing AI—I’m building with it. These days, coding agents are my daily sidekick. I use them to prototype ideas, spin up websites, automate the boring stuff, and tinker my way into new technologies.',
      'That’s what gets me fired up about agent-driven development. Not the showy “one prompt, one app” stuff, but the real magic: giving context, reviewing decisions, debugging, iterating, slowly shaping an idea until it’s ready to ship. That’s the story I’d be most excited to tell for PostHog.',
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
      'I won’t pretend I’ve spent my whole career marketing to developers. But I have made a habit of diving headfirst into complex domains—sticking around long enough to earn the trust of technical folks, then translating their world into something the rest of us can actually understand.',
      'Take IT Service Management: I learned how enterprise IT teams, admins, service desks, and infrastructure folks really work before I wrote a single campaign, piece of content, or product message for them.',
      'Procurement? Same playbook. I had to pick up the language of sourcing, logistics, operations, and supply chains—well enough to build out positioning, launch products, and explain gnarly workflows to buyers, users, and execs.',
      'Earlier on, I even helped build training materials about machinery safety, CE marking, and plant operations. (Turns out: nothing teaches humility like explaining a safety standard to someone who’s spent decades on the shop floor.)',
      'The domain always changes. My approach never does: stay curious, ask embarrassing questions, click every button, then write the thing you wish someone had handed you on day one.',
    ],
  },
  {
    n: '06',
    charge: 'Nice to have: DevTool familiarity, and a product, growth or content marketing background',
    source: 'nice-to-have',
    plea: 'Guilty',
    testimony: [
      'On the growth front, I’ve worn a lot of hats: SEO, lifecycle emails, paid acquisition, webinars, product launches, executive thought leadership—you name it, I’ve probably run it at least once.',
      'At Precoro, we took organic traffic from 3.8k to 17k monthly visitors, quadrupled SQLs, and grew the average deal size from about $3.9k to $15k. The secret? We rebuilt how marketing and sales worked together—no magic, just collaboration and a lot of trial and error.',
      'At Mercanis, I brought LinkedIn in-house, built a demand gen engine around executive content, and slashed cost per opportunity by 87%. For once, attribution was something Finance and Sales could actually trust.',
      'On the side, I built MomQuest—an AI-powered platform for mothers in Germany—mainly because I ran into the problem myself and wanted to turn frustration into something real. I’ve also jumped into Lovable’s She Builds hackathons, spending weekends spinning up prototypes just to see what could ship in a couple of days.',
      'These days, my toolkit is a bit of a grab bag: Ad platforms, GTM, HubSpot, Astro, React, Sanity, GitHub, Supabase, Cloudflare Workers, Vercel, Cursor, Claude Code, ChatGPT, Figma, and more—whatever gets the job done.',
      'Every new project is really just an excuse to learn more. Honestly, it’s a wild time to be a marketer: we’re all beginners again, one way or another. I’d love to learn alongside the PostHog team.',
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
  intro: 'A few things you won’t find on my resume:',
  asides: [
    'I write better than I talk. Put me in a meeting or an interview, and I’ll get stage fright—at least until I know the crowd. (Classic introvert energy.)',
    'If I could design my dream hideout, it’d be a secret room lined with books and perfect reading light. That’s my battery recharge.',
    'In every RPG, I pick the mage or warlock—because who doesn’t want a little magic?',
    'I’m obsessed with tortoises. I have two at home and once volunteered in the Galápagos on a conservation project with giant tortoises. (I’m already plotting my return.)',
    'At home, I share life with the most hyperactive, wild, boundary-pushing toddler I’ve ever met. Some days, it’s a rollercoaster. Every day, it’s an adventure.',
    'And for the record: pineapple on pizza? Absolutely not.',
  ],
  /** Sits beside the list, so it lands next to the tortoise line. */
  photo: {
    src: tortoiseImg,
    alt: 'Daryna crouching beside a giant tortoise at a conservation centre in the Galápagos.',
    caption: 'Galápagos. Tortoise conservation, on my own time.',
  },
  ps: 'P.S. This page is instrumented with PostHog. If you scrolled this far, I know. 👁',
} as const;
