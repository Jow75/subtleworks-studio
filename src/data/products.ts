export interface ExtensionPermission {
  name: string;
  required: boolean;
  purpose: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaSubtext?: string;
}

export interface ProductScreenshot {
  src: string;
  title: string;
  caption: string;
  tag?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  instruction: string;
}

export interface TargetAudience {
  role: string;
  problem: string;
  benefit: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  aliases: string[];
  name: string;
  shortName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  category: 'Productivity' | 'Automation' | 'Screen Recording' | 'Privacy' | 'Developer Tools';
  status: 'live' | 'beta' | 'coming_soon';
  pricingType: 'free' | 'freemium' | 'paid';
  priceBadge: string;
  version: string;
  manifestVersion: 3;
  extensionId: string;
  chromeStoreUrl: string;
  legacyStoreUrl: string;
  /** Chrome Web Store reviews tab. Reviews are hosted by the store, never by this site. */
  reviewsUrl?: string;
  /** The extension's own privacy policy, as registered on its store listing. */
  privacyPolicyUrl?: string;
  supportUrl?: string;
  icon: string;
  heroPreview: string;
  /** 1200x630 image for link previews; falls back to heroPreview. */
  socialImage?: string;
  badges: string[];
  highlights: { title: string; desc: string; iconName: string }[];
  features: ProductFeature[];
  howItWorks: HowItWorksStep[];
  targetAudiences: TargetAudience[];
  pricingTiers?: PricingTier[];
  permissions: ExtensionPermission[];
  privacy: {
    is100PercentOffline: boolean;
    dataStorage: string;
    externalRequests: string[];
    guarantee: string;
  };
  technicalLimitations: string[];
  screenshots: ProductScreenshot[];
  faq: ProductFAQ[];
  demoType: 'phantom-typer' | 'invisible-selection' | 'snapflow-studio';
}

export const PRODUCTS: Product[] = [
  {
    id: 'phantom-typer',
    slug: 'phantom-typer',
    aliases: ['human-typer-fast-speed', 'human-typing-simulator'],
    name: 'Phantom Typer — Human Typing Simulator',
    shortName: 'Phantom Typer',
    tagline: 'Save your text, pick a typing speed, and Phantom Typer types it into the web field or Google Doc you choose — one keystroke at a time.',
    shortDescription: 'Simulates human typing on websites with adjustable speeds, smart pauses, typo simulation, and natural automation.',
    fullDescription: [
      'Phantom Typer types your prepared text into the field you choose, one character at a time, using standard browser keyboard and input events (keydown, keypress, input, keyup) instead of a single instant paste.',
      'You control the pace with six speed presets. Pro adds the Human Feel options: randomized delays, pauses at punctuation, and typo simulation that mistypes a neighbouring key and then corrects it.',
      'It works in standard inputs, textareas and contenteditable editors, with a dedicated path for Google Docs. Custom editors that only accept real hardware keystrokes may not respond.'
    ],
    category: 'Automation',
    status: 'live',
    pricingType: 'freemium',
    priceBadge: 'Free / Pro from $3.99/mo',
    version: '3.0.4',
    manifestVersion: 3,
    extensionId: 'koidkhdbocncjnleboodehmhedjjbafc',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/koidkhdbocncjnleboodehmhedjjbafc',
    legacyStoreUrl: 'https://chrome.google.com/webstore/detail/koidkhdbocncjnleboodehmhedjjbafc',
    reviewsUrl: 'https://chromewebstore.google.com/detail/phantom-typer-%E2%80%94-human-typ/koidkhdbocncjnleboodehmhedjjbafc/reviews',
    privacyPolicyUrl: 'https://phantom-typer.baziqhue.co.ke/privacy.html',
    supportUrl: 'https://phantom-typer.baziqhue.co.ke/support.html',
    icon: '/assets/extensions/phantom-typer/icon128.png',
    heroPreview: '/assets/extensions/phantom-typer/hero-preview.png',
    socialImage: '/assets/extensions/phantom-typer/og-image.png',
    badges: ['v3.0.4', 'Manifest V3', 'Google Docs'],
    highlights: [
      {
        title: 'Human Typing Pace',
        desc: 'Six speed presets from Slow to Insane, with optional ±30% delay variation and pauses at punctuation on Pro.',
        iconName: 'Zap'
      },
      {
        title: 'Works in Google Docs',
        desc: 'A dedicated typing path for Google Docs, started from the popup or the side panel.',
        iconName: 'FileText'
      },
      {
        title: 'Typo Simulation',
        desc: 'Pro can mistype a neighbouring QWERTY key now and then, pause, and backspace to correct it.',
        iconName: 'Keyboard'
      },
      {
        title: 'Chrome Side Panel & Shortcut',
        desc: 'Start with Ctrl+Shift+Q (the letter is configurable) or run sessions from the side panel.',
        iconName: 'Sliders'
      }
    ],
    features: [
      {
        title: 'Six Speed Presets',
        description: 'Slow (120–160 ms per key) and Normal (50–80 ms) are included free. Fast, Very Fast, Ultra and Insane (down to 3–6 ms) are part of Pro.',
        iconName: 'Gauge',
        badge: 'Core'
      },
      {
        title: 'Human Feel Options',
        description: 'Randomized delays (±30%), pauses at commas and full stops, and extra timing variation. Keeping line breaks is available on Free.',
        iconName: 'HeartHandshake',
        badge: 'Pro'
      },
      {
        title: 'Typo & Auto-Correction Simulator',
        description: 'Simulates human mistakes by mistyping a physically neighbouring key, pausing, and backspacing to fix it.',
        iconName: 'CornerDownLeft',
        badge: 'Pro'
      },
      {
        title: 'Google Docs Support',
        description: 'Click inside the document and press Start Typing from the popup or side panel. The keyboard shortcut is not reliable inside Docs, so use the buttons there.',
        iconName: 'FileCode2',
        badge: 'Core'
      },
      {
        title: 'Keyboard Sounds',
        description: 'Optional mechanical or soft key-click sounds, synthesized in the browser with the Web Audio API.',
        iconName: 'Volume2',
        badge: 'Pro'
      },
      {
        title: 'Typing Modes',
        description: 'Always Type, Replace (clear the field first), If Empty and If Content. The modes beyond Always Type are part of Pro.',
        iconName: 'Layers',
        badge: 'Pro'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Sign In & Save Your Text',
        instruction: 'Open the Phantom Typer popup, create a free account or sign in, paste your text and click Save Text. Pick a speed on the Settings tab.'
      },
      {
        step: 2,
        title: 'Click Into a Field',
        instruction: 'Click inside the text field, textarea, rich-text editor or Google Doc where the text should go.'
      },
      {
        step: 3,
        title: 'Start Typing',
        instruction: 'Press Start Typing in the popup or side panel, or use the shortcut (Ctrl+Shift+Q by default) on regular pages.'
      },
      {
        step: 4,
        title: 'Watch It Type — Stop Anytime',
        instruction: 'Text appears character by character at your chosen speed. Press the shortcut again, click the page, or use Stop in the side panel to halt.'
      }
    ],
    targetAudiences: [
      {
        role: 'Developers & QA Engineers',
        problem: 'Testing forms that react to key and input events, which a single paste does not exercise.',
        benefit: 'Replay realistic character-by-character entry without typing the same data by hand.'
      },
      {
        role: 'Content Creators & Tutorial Makers',
        problem: 'Awkward pauses or typing blunders during screen recordings, live streams, and course production.',
        benefit: 'Record clean, natural-looking typing of code and prose without retakes.'
      },
      {
        role: 'Live Presenters & Product Demos',
        problem: 'Nerves or live typing errors while presenting slide demos, webinars, or software pitches.',
        benefit: 'Trigger prepared text on cue with a single shortcut or button.'
      },
      {
        role: 'Form & Portal Users',
        problem: 'Web portals that block pasting and force long inputs to be typed by hand.',
        benefit: 'Have your own saved text typed in for you, keystroke by keystroke.'
      }
    ],
    pricingTiers: [
      {
        id: 'free',
        name: 'Free',
        price: '$0',
        period: '5 sessions included',
        highlight: false,
        features: [
          'Up to 5 typing sessions in total',
          'Up to 500 characters per session',
          'Slow and Normal speeds',
          'Popup, side panel and Google Docs typing',
          'Inputs, textareas and contenteditable editors',
          'Free account required (email or Google sign-in)'
        ],
        ctaText: 'Install from Chrome Web Store',
        ctaSubtext: 'No card required'
      },
      {
        id: 'yearly',
        name: 'Pro Yearly',
        price: '$18.99',
        period: 'per year',
        highlight: true,
        badge: 'Best Value — Save 60%',
        features: [
          'Unlimited typing sessions',
          'Unlimited characters per session',
          'All six speeds: adds Fast, Very Fast, Ultra & Insane',
          'Human Feel: randomized delays, natural pauses & timing',
          'Typo simulation with automatic correction',
          'Keyboard sounds (mechanical or soft)',
          'Replace, If Empty & If Content typing modes',
          'Works out to about $1.58 per month'
        ],
        ctaText: 'Install, then upgrade in the extension',
        ctaSubtext: 'Billed yearly via Paystack'
      },
      {
        id: 'monthly',
        name: 'Pro Monthly',
        price: '$3.99',
        period: 'per month',
        highlight: false,
        features: [
          'Everything in Pro Yearly',
          'Billed month to month',
          'Cancel anytime by emailing support'
        ],
        ctaText: 'Install, then upgrade in the extension',
        ctaSubtext: 'Billed monthly via Paystack'
      }
    ],
    permissions: [
      {
        name: 'Site access: all sites',
        required: true,
        purpose: 'A small content script runs on the pages you open so it can hear your shortcut and type into the field you focus. Nothing from the page is sent anywhere. Firebase, Paystack and the Phantom Typer payment-verification API are also declared, for sign-in and billing.'
      },
      {
        name: 'storage',
        required: true,
        purpose: 'Keeps your saved text, speed, settings, sign-in session and plan status in Chrome on your device.'
      },
      {
        name: 'activeTab',
        required: true,
        purpose: 'Lets the popup and side panel act on the tab you are viewing when you press Start Typing.'
      },
      {
        name: 'scripting',
        required: true,
        purpose: 'Injects a helper into Google Docs pages so typed text reaches the Docs editor.'
      },
      {
        name: 'sidePanel',
        required: true,
        purpose: 'Shows the side panel controller beside the page you are working on.'
      },
      {
        name: 'alarms',
        required: true,
        purpose: 'Re-checks your Pro status in the background about every 30 minutes.'
      },
      {
        name: 'clipboardWrite',
        required: true,
        purpose: 'On Google Docs only: copies your saved text to the clipboard when you press Start Typing, as a fallback way to insert it.'
      },
      {
        name: 'identity',
        required: true,
        purpose: 'Used only for "Continue with Google" sign-in.'
      }
    ],
    privacy: {
      is100PercentOffline: false,
      dataStorage: 'Saved text and settings stay in local Chrome storage. The text you type is never sent to Phantom Typer servers.',
      externalRequests: [
        'Firebase Authentication & Firestore (sign-in, plan status and the free-session count)',
        'Paystack (payment processing for Pro upgrades)',
        'phantom-typer-api.vercel.app (payment verification)',
        'Google Fonts (the popup loads its typeface)'
      ],
      guarantee: 'The text you save stays in Chrome storage on your device and is never sent to Phantom Typer servers. Network requests are limited to sign-in (your email and password go to Firebase Authentication, a Google service), your plan status and free-session count, and payment verification. Phantom Typer does not collect browsing history or page content.'
    },
    technicalLimitations: [
      'Chrome blocks every extension on its internal pages (chrome://…) and on the Chrome Web Store, so Phantom Typer cannot type there.',
      'Inside Google Docs the keyboard shortcut is unreliable — use Start Typing in the popup or side panel instead.',
      'Text is typed with simulated key events. Custom editors and widgets that only accept real hardware keystrokes may ignore it.',
      'Typing slows to roughly one character per second while its tab is in the background, because Chrome throttles timers in hidden tabs. Keep the tab visible while it types.',
      'A free account and sign-in are required before typing.'
    ],
    screenshots: [
      {
        src: '/assets/extensions/phantom-typer/screenshot-01-popup.png',
        title: 'Popup: Write Tab',
        caption: 'Paste your text, save it, and press Start Typing. The character and word counts update as you type.',
        tag: 'Popup'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-02-gdocs.png',
        title: 'Side Panel Beside Google Docs',
        caption: 'The side panel stays open next to the document with its own speed selector and the saved text.',
        tag: 'Side Panel'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-03-speed.png',
        title: 'Speed, Mode & Human Feel Settings',
        caption: 'Six speed presets, four typing modes, and the Human Feel toggles: randomized delays, natural pauses, typo simulation and keyboard sounds.',
        tag: 'Settings'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-04-controls.png',
        title: 'Side Panel Controls',
        caption: 'Save Text, Clear, Start Typing and Stop, with a built-in how-to.',
        tag: 'Side Panel'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-05-pricing.png',
        title: 'Upgrade Page',
        caption: 'Free, Monthly and Yearly plans. Payments are handled by Paystack.',
        tag: 'Pricing'
      }
    ],
    faq: [
      {
        question: 'How do I start typing on a page?',
        answer: 'Sign in from the popup, paste your text and click Save Text. Click into a field on the page, then press Start Typing in the popup or side panel — or press the shortcut (Ctrl+Shift+Q by default) on regular pages.'
      },
      {
        question: 'Do I need an account?',
        answer: 'Yes. A free account (email and password, or Google sign-in) is required before typing, so the free limits and Pro access can be applied to you.'
      },
      {
        question: 'Does Phantom Typer store or send what I type?',
        answer: 'No. The text you save stays in Chrome extension storage on your computer and is not sent to Phantom Typer servers. The extension does not log your keystrokes or read the pages you visit. Your account email, plan status and free-session count are stored in Firebase.'
      },
      {
        question: 'How does it work with Google Docs?',
        answer: 'Click inside the document, then press Start Typing from the popup or — recommended — the side panel, which stays open beside the doc and has a Stop button. The keyboard shortcut may not work inside Docs. Google Docs typing is included in the free plan, within the free limits.'
      },
      {
        question: 'Can I change the keyboard shortcut?',
        answer: 'Yes. On the Settings tab of the popup you can change the letter used with Ctrl+Shift (the default is Q).'
      },
      {
        question: 'What is the difference between Free and Pro?',
        answer: 'Free includes Slow and Normal speeds, up to 5 typing sessions in total, and up to 500 characters per session. Pro ($3.99 a month or $18.99 a year) removes the session and character limits and adds the Fast, Very Fast, Ultra and Insane speeds, the Human Feel options (randomized delays, natural pauses, typo simulation, keyboard sounds) and the extra typing modes.'
      },
      {
        question: 'How do I upgrade or cancel?',
        answer: 'Upgrade from inside the extension (Account tab), which opens a Paystack checkout. To cancel or ask about a charge, email support with the address you signed up with.'
      }
    ],
    demoType: 'phantom-typer'
  },
  {
    id: 'invisible-selection',
    slug: 'invisible-selection',
    aliases: ['invisible-highlighting', 'invisible-text-selection'],
    name: 'Invisible Selection',
    shortName: 'Invisible Selection',
    tagline: 'Removes visible text selection highlighting while preserving full copy and paste functionality.',
    shortDescription: 'Hide text selection highlights on any webpage. Copy and paste still works perfectly. 100% offline, zero data collection.',
    fullDescription: [
      'Invisible Selection eliminates the colored blue highlight box that appears when you drag across or select text on a webpage — while keeping full copy and paste capability completely intact.',
      'Engineered specifically for screen recorders, tutorial creators, live presenters, and privacy-conscious users who want a clean, distraction-free display without blue blocks obscuring paragraphs during demonstrations.',
      '100% offline, zero network requests, under 5KB total footprint, and zero impact on browser speed.'
    ],
    category: 'Privacy',
    status: 'live',
    pricingType: 'free',
    priceBadge: '100% Free & Offline',
    // Keep in step with the version shown on the Chrome Web Store listing
    version: '1.0.0',
    manifestVersion: 3,
    extensionId: 'pddfpjmkodjaobcaieajifcpcmpojlbo',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/pddfpjmkodjaobcaieajifcpcmpojlbo',
    legacyStoreUrl: 'https://chrome.google.com/webstore/detail/pddfpjmkodjaobcaieajifcpcmpojlbo',
    reviewsUrl: 'https://chromewebstore.google.com/detail/invisible-selection/pddfpjmkodjaobcaieajifcpcmpojlbo/reviews',
    privacyPolicyUrl: 'https://invisible-selection.baziqhue.co.ke/privacy.html',
    supportUrl: 'https://invisible-selection.baziqhue.co.ke/support.html',
    icon: '/assets/extensions/invisible-selection/icon128.png',
    heroPreview: '/assets/extensions/invisible-selection/screenshot-01-active.png',
    badges: ['100% Free', 'Manifest V3', '100% Offline', 'Zero Data Collection'],
    highlights: [
      {
        title: '100% Preserved Copy & Paste',
        desc: 'Ctrl+C, Cmd+C, and right-click Copy work instantaneously and reliably without visual highlight clutter.',
        iconName: 'Copy'
      },
      {
        title: 'Zero Tracking & 100% Offline',
        desc: 'Makes zero network requests, contains zero analytics, zero external scripts, and requires no login.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Ultralight (<5KB Footprint)',
        desc: 'Runs at document_start via scoped CSS with zero layout recalculations or memory overhead.',
        iconName: 'Feather'
      },
      {
        title: 'One-Click Toolbar Toggle',
        desc: 'Instant ON/OFF toggle in your toolbar popup with live toolbar badge status and keyboard accessibility.',
        iconName: 'ToggleRight'
      }
    ],
    features: [
      {
        title: 'Invisible Selection Highlighting',
        description: 'Dynamically suppresses the default browser selection styling (::selection) so text selection is completely transparent.',
        iconName: 'EyeOff',
        badge: 'Core'
      },
      {
        title: 'Uncompromised Copy & Paste',
        description: 'Selection ranges, clipboard listeners, hotkeys (Ctrl+C / Cmd+C), and context menus remain 100% functional.',
        iconName: 'CopyCheck',
        badge: 'Core'
      },
      {
        title: 'Dynamic Style Override Engine',
        description: 'Defeats aggressive per-element inline CSS rules and custom website stylesheets without breaking page layouts.',
        iconName: 'Code',
        badge: 'Technical'
      },
      {
        title: 'Cross-Device Preference Sync',
        description: 'Uses chrome.storage.sync to preserve your ON/OFF state across all Chrome sessions and logged-in devices.',
        iconName: 'RefreshCw',
        badge: 'Sync'
      },
      {
        title: 'Theme & Iframe Adaptive',
        description: 'Operates identically on dark and light themes, responsive layouts, and embedded iframes.',
        iconName: 'Monitor',
        badge: 'Universal'
      },
      {
        title: 'Screen Reader & Accessibility Intact',
        description: 'Does not alter DOM nodes or accessibility tree elements, ensuring assistive technology behaves normally.',
        iconName: 'Accessibility',
        badge: 'A11y'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Install & Activate',
        instruction: 'Click the Invisible Selection icon in your Chrome toolbar and ensure the switch is set to ON.'
      },
      {
        step: 2,
        title: 'Select Text Normally',
        instruction: 'Click and drag your mouse across paragraphs on any webpage. The text selects normally, but without visual blue highlight.'
      },
      {
        step: 3,
        title: 'Copy with Standard Keys',
        instruction: 'Press Ctrl+C (Cmd+C on Mac) or right-click to copy. Your selection is immediately saved to your clipboard.'
      },
      {
        step: 4,
        title: 'Toggle OFF Anytime',
        instruction: 'Want your standard blue highlight back? Click the popup toggle to return to normal browser styling instantly.'
      }
    ],
    targetAudiences: [
      {
        role: 'Screen Recorders & Video Creators',
        problem: 'Ugly, distracting blue highlight rectangles ruining recorded tutorials, product walk-throughs, and video demos.',
        benefit: 'Keep your presentation pristine and professional while selecting and copying reference text.'
      },
      {
        role: 'Live Presenters & Webinar Hosts',
        problem: 'Dragging across slide notes or live code during screen sharing exposes messy visual selections to the audience.',
        benefit: 'Seamlessly grab snippets and navigate slides without any visible screen distractions.'
      },
      {
        role: 'Privacy-Conscious Individuals',
        problem: 'People sitting nearby in coffee shops, libraries, or offices seeing exactly what sensitive text you are highlighting.',
        benefit: 'Select and copy text in complete visual privacy.'
      },
      {
        role: 'Readers & Researchers',
        problem: 'Accidental mouse drags leaving jarring colored artifacts all over long articles and documentation.',
        benefit: 'Enjoy a clean, distraction-free reading experience across the entire web.'
      }
    ],
    pricingTiers: [
      {
        id: 'free',
        name: '100% Free Forever',
        price: '$0',
        period: 'free forever',
        highlight: true,
        badge: 'No Subscriptions • No Ads',
        features: [
          'Full invisible text selection on all websites',
          'Preserved copy and paste functionality',
          'Instant toolbar popup ON/OFF toggle',
          'Cross-device sync via Chrome Storage Sync',
          '100% offline — zero data collection',
          'Under 5KB ultralight footprint',
          'No accounts or registration needed'
        ],
        ctaText: 'Add to Chrome — It’s Free',
        ctaSubtext: 'Direct install from Chrome Web Store'
      }
    ],
    permissions: [
      {
        name: 'Site access: all sites',
        required: true,
        purpose: 'Injects one small stylesheet into the pages you open to hide the selection highlight. It does not read, change or send page content.'
      },
      {
        name: 'storage',
        required: true,
        purpose: 'Stores your single ON/OFF preference setting and syncs it across your Chrome browser profiles.'
      }
    ],
    privacy: {
      is100PercentOffline: true,
      dataStorage: 'Only stores one boolean flag ({ enabled: true/false }) in chrome.storage.sync. Zero personal data.',
      externalRequests: [],
      guarantee: 'Invisible Selection is 100% offline. It makes zero HTTP requests, contains no analytics or trackers, reads zero page content, and communicates with no external servers whatsoever.'
    },
    technicalLimitations: [
      'Cannot execute on internal Chrome pages (e.g. chrome://settings, chrome://extensions).',
      'Cannot run on chromewebstore.google.com due to Chrome browser security policies.',
      'Cannot affect Chrome built-in PDF viewer.',
      'May not reach elements encapsulated inside closed Shadow DOM boundaries.'
    ],
    screenshots: [
      {
        src: '/assets/extensions/invisible-selection/screenshot-01-active.png',
        title: 'Active Status in Popup',
        caption: 'Simple one-click toggle switch shows green active status and toolbar badge indicator.',
        tag: 'Interface'
      },
      {
        src: '/assets/extensions/invisible-selection/screenshot-02-comparison.png',
        title: 'Visual Comparison',
        caption: 'Standard distracting blue highlight vs completely clean invisible selection.',
        tag: 'Comparison'
      },
      {
        src: '/assets/extensions/invisible-selection/screenshot-03-features.png',
        title: 'Feature Overview',
        caption: 'Full copy-paste preservation, 100% offline operation, and sub-5KB performance.',
        tag: 'Features'
      },
      {
        src: '/assets/extensions/invisible-selection/promo-marquee.png',
        title: 'Store Promo Marquee',
        caption: 'Clean, distraction-free text selection across all web platforms.',
        tag: 'Overview'
      }
    ],
    faq: [
      {
        question: 'Does text selection still work if I can’t see it?',
        answer: 'Yes! Text selection is completely functional — only the visual blue background color is made transparent. When you press Ctrl+C or right-click to copy, your selected text is copied to the clipboard exactly as expected.'
      },
      {
        question: 'Does this extension collect any data?',
        answer: 'None whatsoever. Invisible Selection makes zero network requests and contains no tracking scripts. The only stored item is your ON/OFF toggle state, kept in Chrome sync storage.'
      },
      {
        question: 'Why does it say it needs access to webpages?',
        answer: 'To hide the selection highlight, the extension must inject a tiny CSS stylesheet into webpages. It does not read, modify, or transmit any webpage text or data.'
      },
      {
        question: 'Why doesn’t it work on the Chrome Web Store page?',
        answer: 'Chrome enforces a strict browser security rule that blocks all extensions from running content scripts on chromewebstore.google.com and chrome:// internal pages.'
      },
      {
        question: 'Is it really 100% free?',
        answer: 'Yes, completely free. There are no paid tiers, no ads, no premium locks, and no subscriptions.'
      }
    ],
    demoType: 'invisible-selection'
  },
  {
    id: 'snapflow-studio',
    slug: 'snapflow-studio',
    aliases: ['snap-flow-studio', 'snapflow', 'chrome-screenshot-studio'],
    name: 'Snap Flow Studio — Privacy-First Screenshot & Full-Page Capture',
    shortName: 'Snap Flow Studio',
    tagline: 'Capture full webpages, scrolling panels, and custom regions with seamless stitching, vector annotations, and 100% local processing.',
    shortDescription: 'Privacy-first screenshot engine with seamless full-page stitching, smart scrolling panel capture, vector annotations, destructive redaction, and smart-split multi-page PDF export.',
    fullDescription: [
      'Snap Flow Studio scrolls, aligns, and stitches full web documents, scrolling chat threads, and custom regions with zero visible seams. Fractional subpixel compensation completely eliminates white horizontal seams between tiles.',
      'The built-in studio lets you edit captures directly in your browser. Annotate with vector arrows, boxes, text, and an authentic Unicode emoji picker across 9 categories. To protect sensitive passwords or credit card numbers, destructive redaction permanently replaces underlying pixels with high-entropy noise masks so original data can never be digitally recovered.',
      '100% client-side image processing. No analytics beacons, no tracking pixels, zero server uploads, and activeTab least-privilege security. Captures stay on your device in local IndexedDB.'
    ],
    category: 'Productivity',
    status: 'live',
    pricingType: 'free',
    priceBadge: '100% Free & Private',
    version: '1.1.0',
    manifestVersion: 3,
    extensionId: 'snapflow-studio',
    chromeStoreUrl: 'https://snapflow-studio-app.netlify.app/',
    legacyStoreUrl: 'https://snapflow-studio-app.netlify.app/',
    reviewsUrl: 'https://snapflow-studio-app.netlify.app/#faq',
    privacyPolicyUrl: 'https://snapflow-studio-app.netlify.app/privacy',
    supportUrl: 'https://snapflow-studio-app.netlify.app/support',
    icon: '/assets/extensions/snapflow-studio/icon128.png',
    heroPreview: '/assets/extensions/snapflow-studio/hero-preview.png',
    socialImage: '/assets/extensions/snapflow-studio/screenshot-01-hero.png',
    badges: ['100% Free', 'Manifest V3', 'Zero Seams', 'Smart-Split PDF', 'Zero Telemetry'],
    highlights: [
      {
        title: 'Seamless Full-Page Composite',
        desc: 'Fractional subpixel compensation completely eliminates white horizontal seams between tiles.',
        iconName: 'Camera'
      },
      {
        title: 'Four Dedicated Capture Engines',
        desc: 'Full Page (Alt+Shift+S), Visible Area (Alt+Shift+V), Selected Marquee, and Nested Scrolling Containers.',
        iconName: 'Layers'
      },
      {
        title: 'True Destructive Redaction',
        desc: 'Permanently wipes underlying pixel data with high-entropy noise masks so original data can never be digitally recovered.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Smart-Split Multi-Page PDF',
        desc: 'Automatic horizontal whitespace scanning prevents lines of text from being sliced in half across pages.',
        iconName: 'FileText'
      }
    ],
    features: [
      {
        title: 'Four Dedicated Capture Engines',
        description: 'Independent calibrated paths for Full Page, Visible Viewport, Interactive Marquee Crop, and Inner Scrolling Containers (e.g., chat logs and code panels).',
        iconName: 'Layers',
        badge: 'Core'
      },
      {
        title: 'Deterministic Linear Undo & Redo',
        description: 'Every annotation, shape mutation, and sticker placement is recorded in a linear history stack. Undo reaches all the way back to the initial capture.',
        iconName: 'RotateCcw',
        badge: 'Studio'
      },
      {
        title: 'True Destructive Redaction',
        description: 'Irreversible raster pixel destruction with high-entropy noise masks, mosaic pixelation, and Gaussian blur for sensitive credentials and financial data.',
        iconName: 'ShieldCheck',
        badge: 'Privacy'
      },
      {
        title: 'Smart-Split Multi-Page PDF Export',
        description: 'Outputs standard A4 and US Letter multi-page PDFs locally. Analyzes whitespace gutters to automatically place page breaks cleanly between paragraphs.',
        iconName: 'FileText',
        badge: 'Export'
      },
      {
        title: 'Comprehensive Unicode Emoji Library',
        description: 'Search and place native system emojis across all 9 standard categories without downloading external fonts or tracking scripts.',
        iconName: 'Smile',
        badge: 'Stickers'
      },
      {
        title: 'Independent Metadata Watermarking',
        description: 'Preserves verified source URL and capture timestamps, with independent placement controls (Top, Bottom, or None).',
        iconName: 'Link',
        badge: 'Metadata'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Select Capture Mode',
        instruction: 'Click the Snap Flow Studio toolbar icon or press Alt+Shift+S (Full Page) or Alt+Shift+V (Visible Area).'
      },
      {
        step: 2,
        title: 'Automatic Page Scrolling & Stitching',
        instruction: 'The extension measures scrollable extents, scrolls page segments, and stitches the composite with subpixel seam elimination.'
      },
      {
        step: 3,
        title: 'Annotate, Redact & Style',
        instruction: 'Add vector arrows, boxes, text labels, and emoji stickers. Apply irreversible noise redaction to sensitive text or numbers.'
      },
      {
        step: 4,
        title: 'Export Locally or Copy to Clipboard',
        instruction: 'Export to lossless PNG, JPEG, modern WebP, smart-split multi-page PDF, or 1-click system clipboard copy.'
      }
    ],
    targetAudiences: [
      {
        role: 'Product Managers & QA Engineers',
        problem: 'Splicing screenshots of long web dashboards or bug reproduction steps with misaligned seams and blurred text.',
        benefit: 'Capture high-DPI full-page composites and annotate defect reports with pixel-perfect clarity.'
      },
      {
        role: 'Technical Writers & Content Creators',
        problem: 'Documentation screenshots that clumsily slice across paragraphs or expose sensitive credentials.',
        benefit: 'Create publication-ready guides with vector arrows and irreversible noise redaction.'
      },
      {
        role: 'Privacy & Compliance Officers',
        problem: 'Third-party screenshot extensions sending proprietary internal data or screenshots to remote cloud servers.',
        benefit: '100% client-side architecture guarantees zero data leaves your local machine.'
      },
      {
        role: 'Designers & Developers',
        problem: 'Taking multiple fragmented screenshots of nested scrollable panels and chat widgets.',
        benefit: 'Target inner scrolling containers with dedicated container detection in one seamless capture.'
      }
    ],
    pricingTiers: [
      {
        id: 'free',
        name: '100% Free & Private',
        price: '$0',
        period: 'free forever',
        highlight: true,
        badge: 'Zero Telemetry • No Accounts',
        features: [
          'Full-page, visible area, marquee, and scroll container captures',
          'Fractional subpixel seam elimination',
          'Full Studio editor with vector arrows, boxes, and text',
          'Destructive noise redaction, mosaic blur, and pixelation',
          '9-category Unicode emoji sticker picker',
          'Smart-split multi-page PDF export (A4 & Letter)',
          'Lossless PNG, JPEG, and WebP downloads',
          '1-click direct system clipboard copy',
          '100% client-side processing — zero server uploads'
        ],
        ctaText: 'Open Snap Flow Studio',
        ctaSubtext: 'Free Web App & Chrome Extension'
      }
    ],
    permissions: [
      {
        name: 'activeTab',
        required: true,
        purpose: 'Runs capture routines strictly on the active tab you explicitly trigger. Never monitors background tabs or history.'
      },
      {
        name: 'scripting',
        required: true,
        purpose: 'Measures document scroll heights and coordinates interactive marquee selection boxes on the webpage.'
      },
      {
        name: 'storage',
        required: true,
        purpose: 'Stores your studio UI preferences (default export format, watermark placement) and manages local IndexedDB captures.'
      }
    ],
    privacy: {
      is100PercentOffline: true,
      dataStorage: 'Captures are saved in browser IndexedDB on your own computer (keeps 10 most recent). Zero cloud uploads.',
      externalRequests: [],
      guarantee: 'Snap Flow Studio does not operate cloud image-rendering servers or analytics beacons. Every capture, stitch, annotation, and export happens 100% inside your local Chrome browser session.'
    },
    technicalLimitations: [
      'Cannot execute on internal Chrome pages (chrome://, edge://, about:) or the Chrome Web Store gallery due to browser security restrictions.',
      'Extremely tall documents (>40,000px) are bounded by browser canvas memory limits.',
      'Dynamic sticky navigation headers require scroll synchronization to avoid duplicated header bars.'
    ],
    screenshots: [
      {
        src: '/assets/extensions/snapflow-studio/screenshot-01-hero.png',
        title: 'Seamless Capture & Stitching',
        caption: 'Full-page composite with subpixel DPR seam elimination, 4 capture modes, and high-DPI output.',
        tag: 'Capture'
      },
      {
        src: '/assets/extensions/snapflow-studio/screenshot-02-editor.png',
        title: 'Built-in Studio Editor',
        caption: 'Vector arrows, boxes, text labels, destructive noise redaction, and emoji sticker library.',
        tag: 'Studio'
      },
      {
        src: '/assets/extensions/snapflow-studio/screenshot-03-workflow.png',
        title: 'Workflow & Multi-Page Export',
        caption: 'Deterministic undo/redo history, lossless PNG/JPEG/WebP export, and smart-split multi-page PDF.',
        tag: 'Export'
      }
    ],
    faq: [
      {
        question: 'Is Snap Flow Studio free?',
        answer: 'Yes. Snap Flow Studio is completely free. There are no paywalls, hidden watermark locks, or subscription requirements.'
      },
      {
        question: 'Where are screenshots stored and processed?',
        answer: 'Screenshots are processed in your browser and saved in local IndexedDB storage on your computer. Only your 10 most recent captures are kept, and closing the Studio tab does not delete them. They are never sent to any remote server or third-party cloud.'
      },
      {
        question: 'Does Snap Flow Studio track my browsing history?',
        answer: 'No. Snap Flow Studio operates under the activeTab permission model. It only inspects the active browser tab when you click a capture action, and never monitors other tabs or history.'
      },
      {
        question: 'Why can internal browser pages not be captured?',
        answer: 'Google Chrome enforces strict security restrictions blocking all extensions from running content scripts on internal pages (chrome://, edge://, about:) and the Chrome Web Store gallery.'
      },
      {
        question: 'Which export formats are supported?',
        answer: 'You can copy directly to your system clipboard as PNG, download Lossless PNG, compressed JPEG, modern WebP, or generate multi-page Smart-Split PDF files.'
      },
      {
        question: 'How does Smart-Split PDF avoid cutting text lines?',
        answer: 'Before dividing tall images across pages, the exporter analyzes horizontal pixel gutters to detect whitespace between paragraphs, placing page breaks naturally in empty gutters.'
      }
    ],
    demoType: 'snapflow-studio'
  }
];

export const STUDIO_METADATA = {
  brandName: 'SubtleWorks',
  studioName: 'SubtleWorks Studio',
  parentBrand: 'Baziq Hue',
  tagline: 'Precision browser extensions. Zero bloat, zero tracking, total control.',
  subheading: 'SubtleWorks Studio is a Baziq Hue product studio building lightweight, hyper-focused Chrome extensions engineered to solve specific browser problems cleanly.',
  supportEmail: 'gmuraguri75@gmail.com',
  storeDeveloperUrl: 'https://chromewebstore.google.com/search/subtleworks%20studio',
  parentBrandUrl: 'https://baziqhue.co.ke',
  studioUrl: 'https://subtleworks-studio.baziqhue.co.ke',
  universalClipboardUrl: 'https://universal-clipboard.baziqhue.co.ke',
  principles: [
    {
      title: 'Hyper-Focused Utility',
      desc: 'Each extension is built to do one specific job exceptionally well, rather than bundling bloated feature sets.',
      iconName: 'Target'
    },
    {
      title: 'Privacy & Security First',
      desc: 'Strictly audited permissions. Offline-first architectures whenever possible. No covert telemetry or selling of browsing data.',
      iconName: 'ShieldCheck'
    },
    {
      title: 'Lightweight Performance',
      desc: 'Small codebases built without bloated dependencies, so they stay out of the way of the pages you use.',
      iconName: 'Zap'
    },
    {
      title: 'Clean Craftsmanship',
      desc: 'Intuitive modern interfaces with keyboard accessibility, thoughtful defaults, and zero aggressive upsell popups.',
      iconName: 'Sparkles'
    }
  ],
  stats: [
    { label: 'Manifest V3 Architecture', value: '100%' },
    { label: 'Ecosystem Extensions', value: '3 Live' },
    { label: 'Unnecessary Bloat', value: '0%' },
    { label: 'Telemetry/Ad Trackers', value: 'Zero' }
  ]
};

// Helper utilities for the product ecosystem
export function getProductBySlug(slug: string): Product | undefined {
  const normalized = slug.toLowerCase().trim();
  return PRODUCTS.find(
    (p) => p.slug === normalized || p.aliases.includes(normalized) || p.id === normalized
  );
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return PRODUCTS.filter((p) => p.slug !== currentSlug && !p.aliases.includes(currentSlug));
}
