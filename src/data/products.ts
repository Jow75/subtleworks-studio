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
  reviewsUrl?: string;
  icon: string;
  heroPreview: string;
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
  demoType: 'phantom-typer' | 'invisible-selection';
}

export const PRODUCTS: Product[] = [
  {
    id: 'phantom-typer',
    slug: 'phantom-typer',
    aliases: ['human-typer-fast-speed', 'human-typing-simulator'],
    name: 'Phantom Typer — Human Typing Simulator',
    shortName: 'Phantom Typer',
    tagline: 'Simulates genuine human keyboard typing with realistic cadences, natural pauses, and seamless automation.',
    shortDescription: 'Simulates human typing on websites with adjustable speeds, smart pauses, typo simulation, and natural automation.',
    fullDescription: [
      'Phantom Typer is a high-precision Chrome extension engineered to inject text via genuine browser keyboard events (keydown, keypress, beforeinput, input, keyup) rather than standard instant paste.',
      'Unlike conventional clipboard dumps that trigger anti-paste detectors or break custom canvas editors, Phantom Typer simulates authentic human typing character-by-character with natural hesitation, punctuation cadence, and optional typo correction.',
      'Includes deep universal support across rich-text platforms, code editors, form fields, and a dedicated InputEvent engine for Google Docs.'
    ],
    category: 'Automation',
    status: 'live',
    pricingType: 'freemium',
    priceBadge: 'Free / Pro from $1.58/mo',
    version: '3.0.4',
    manifestVersion: 3,
    extensionId: 'koidkhdbocncjnleboodehmhedjjbafc',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/koidkhdbocncjnleboodehmhedjjbafc',
    legacyStoreUrl: 'https://chrome.google.com/webstore/detail/koidkhdbocncjnleboodehmhedjjbafc',
    icon: '/assets/extensions/phantom-typer/icon128.png',
    heroPreview: '/assets/extensions/phantom-typer/hero-preview.png',
    badges: ['v3.0.4', 'Manifest V3', 'Google Docs Engine'],
    highlights: [
      {
        title: 'Authentic Human Cadence',
        desc: 'Customizable speeds with ±30% natural velocity variance and realistic punctuation pauses.',
        iconName: 'Zap'
      },
      {
        title: 'Google Docs Engine',
        desc: 'Specialized InputEvent sequencing that directly bridges Google Docs canvas-rendered editor.',
        iconName: 'FileText'
      },
      {
        title: 'Typo Simulation',
        desc: 'Configurable human error rate with realistic adjacent QWERTY mistypes and backspace corrections.',
        iconName: 'Keyboard'
      },
      {
        title: 'Chrome Side Panel & Shortcuts',
        desc: 'Trigger with custom hotkeys (default Ctrl+Shift+Q) or manage text from the integrated side panel.',
        iconName: 'Sliders'
      }
    ],
    features: [
      {
        title: 'Adjustable WPM & Speed Tiers',
        description: 'From deliberate human speeds (Slow, Normal) up to lightning-fast bursts (Fast, Ultra, Insane) with granular timing controls.',
        iconName: 'Gauge',
        badge: 'Core'
      },
      {
        title: 'Human Feel Engine',
        description: 'Randomized character delays, realistic hesitation at commas and periods, and preservation of line breaks.',
        iconName: 'HeartHandshake',
        badge: 'Pro'
      },
      {
        title: 'Typo & Auto-Correction Simulator',
        description: 'Simulates authentic human mistakes by mistyping physical neighboring keys on the keyboard, pausing, and backspacing.',
        iconName: 'CornerDownLeft',
        badge: 'Pro'
      },
      {
        title: 'Google Docs Canvas Support',
        description: 'A dedicated multi-phase engine that coordinates with Docs text-target iframe for reliable character streaming.',
        iconName: 'FileCode2',
        badge: 'Pro'
      },
      {
        title: 'Mechanical Audio Feedback',
        description: 'Synthesizes authentic mechanical and soft switch audio clicks in real-time via the Web Audio API.',
        iconName: 'Volume2',
        badge: 'Pro'
      },
      {
        title: 'Multi-Mode Text Insertion',
        description: 'Support for "Always Type", "Replace Selected", "Append to Field", and "Type only if empty" workflows.',
        iconName: 'Layers',
        badge: 'Core'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Configure Your Text & Speed',
        instruction: 'Open the Phantom Typer popup or side panel, paste or write your text, and pick your target typing cadence.'
      },
      {
        step: 2,
        title: 'Focus Any Input Field',
        instruction: 'Click inside any text field, code editor, Google Docs canvas, or web form on the active tab.'
      },
      {
        step: 3,
        title: 'Trigger with Shortcut or Panel',
        instruction: 'Press your customizable keyboard shortcut (Ctrl+Shift+Q) or click Start Typing from the side panel.'
      },
      {
        step: 4,
        title: 'Watch Natural Character Streaming',
        instruction: 'Text streams into the element character-by-character with realistic key events, live pauses, and typo handling.'
      }
    ],
    targetAudiences: [
      {
        role: 'Developers & QA Engineers',
        problem: 'Testing complex forms that require valid keyboard event sequences or reject sudden paste events.',
        benefit: 'Automate realistic data entry and form verification without repetitive manual typing.'
      },
      {
        role: 'Content Creators & Tutorial Makers',
        problem: 'Awkward pauses or typing blunders during screen recordings, live streams, and course production.',
        benefit: 'Stream flawless, natural-looking code and prose with zero recording stress.'
      },
      {
        role: 'Live Presenters & Product Demos',
        problem: 'Nerves or live typing errors while presenting slide demos, webinars, or software pitches.',
        benefit: 'Trigger polished live text entry seamlessly on cue with a single hotkey.'
      },
      {
        role: 'Form & Portal Users',
        problem: 'Aggressive web portals with paste-blocking scripts that force users to type long inputs by hand.',
        benefit: 'Simulate natural human keystrokes to comfortably enter your own saved text.'
      }
    ],
    pricingTiers: [
      {
        id: 'free',
        name: 'Free Starter',
        price: '$0',
        period: 'forever',
        highlight: false,
        features: [
          'Core human typing simulator',
          'Standard speed controls (Slow & Normal)',
          'Works on inputs, textareas, and contenteditable',
          'Standard popup interface',
          'Local storage for draft text'
        ],
        ctaText: 'Install Free on Chrome',
        ctaSubtext: 'No credit card required'
      },
      {
        id: 'yearly',
        name: 'Pro Yearly',
        price: '$18.99',
        period: 'per year ($1.58/mo)',
        highlight: true,
        badge: 'Best Value — Save 60%',
        features: [
          'All Free Starter features',
          'Full Google Docs InputEvent Engine',
          'Fast, Very Fast, Ultra & Insane speeds',
          'Typo simulator with auto-backspace correction',
          'Natural hesitation & punctuation pauses',
          'Integrated Chrome Side Panel controls',
          'Mechanical & soft keyboard audio clicks',
          'Customizable global keyboard shortcuts'
        ],
        ctaText: 'Upgrade to Pro Yearly',
        ctaSubtext: 'Billed annually via Paystack'
      },
      {
        id: 'monthly',
        name: 'Pro Monthly',
        price: '$3.99',
        period: 'per month',
        highlight: false,
        features: [
          'All Pro features included',
          'Google Docs support',
          'All speed tiers unlocked',
          'Typo simulation & smart pauses',
          'Side panel floating controller',
          'Mechanical sound effects',
          'Cancel anytime with one click'
        ],
        ctaText: 'Get Pro Monthly',
        ctaSubtext: 'Billed monthly via Paystack'
      }
    ],
    permissions: [
      {
        name: 'storage',
        required: true,
        purpose: 'Saves your typing speed, draft text, typo preferences, and license state locally in Chrome.'
      },
      {
        name: 'activeTab',
        required: true,
        purpose: 'Grants temporary permission to dispatch typing events into the currently focused webpage when you trigger the shortcut.'
      },
      {
        name: 'scripting',
        required: true,
        purpose: 'Allows injecting the typing simulator runner into your active tab when you initiate typing.'
      },
      {
        name: 'sidePanel',
        required: true,
        purpose: 'Displays the convenient side panel controller alongside your active webpage.'
      },
      {
        name: 'alarms',
        required: true,
        purpose: 'Periodically refreshes license status in the background.'
      },
      {
        name: 'clipboardWrite',
        required: false,
        purpose: 'Optional helper for placing snippets on your clipboard upon explicit action.'
      },
      {
        name: 'identity',
        required: false,
        purpose: 'Facilitates optional Google Sign-in to synchronize your Pro license across your Chrome instances.'
      }
    ],
    privacy: {
      is100PercentOffline: false,
      dataStorage: 'Draft text and settings are stored strictly in local Chrome storage. We never log or transmit the text you type.',
      externalRequests: [
        'Firebase Auth & Firestore (for user authentication and Pro subscription state)',
        'Paystack (secure payment processing for Pro upgrades)',
        'phantom-typer-api.vercel.app (license verification webhook)'
      ],
      guarantee: 'Phantom Typer never transmits your typed content, passwords, or personal webpage interactions to our servers. Network requests are strictly limited to license verification and account authentication.'
    },
    technicalLimitations: [
      'Chrome restricts all extensions from running inside Chrome internal pages (chrome://settings, chrome://extensions) and the Chrome Web Store.',
      'Google Docs requires the Pro InputEvent engine due to its custom canvas-rendering architecture.'
    ],
    screenshots: [
      {
        src: '/assets/extensions/phantom-typer/screenshot-01-popup.png',
        title: 'Popup Typing Composer',
        caption: 'Compose your text, select target speed, and review character counts before triggering.',
        tag: 'Popup'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-02-gdocs.png',
        title: 'Google Docs Side Panel',
        caption: 'Use the integrated side panel alongside Google Docs with play, pause, and speed adjustments.',
        tag: 'Side Panel'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-03-speed.png',
        title: 'Granular Speed & Cadence Settings',
        caption: 'Customize WPM, delay variance, hesitation at punctuation, and typo simulation intensity.',
        tag: 'Settings'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-04-controls.png',
        title: 'Live Side Panel Controls',
        caption: 'Full playback controls with real-time character progress bar and abort button.',
        tag: 'Side Panel'
      },
      {
        src: '/assets/extensions/phantom-typer/screenshot-05-pricing.png',
        title: 'Pro Upgrade & Licensing',
        caption: 'Transparent pricing with monthly and yearly plans powered by Paystack.',
        tag: 'Pricing'
      }
    ],
    faq: [
      {
        question: 'How do I start typing on a page?',
        answer: 'Open the Phantom Typer popup or side panel, enter your desired text, set your speed, click into any input field on the page, and press your hotkey (default: Ctrl+Shift+Q).'
      },
      {
        question: 'Does Phantom Typer store or send what I type?',
        answer: 'No. The text you enter is saved strictly in local Chrome extension storage on your computer. Phantom Typer never reads, monitors, logs, or transmits your keystrokes.'
      },
      {
        question: 'How does it work with Google Docs?',
        answer: 'Google Docs renders text using a custom canvas rather than standard HTML inputs. Phantom Typer includes a dedicated InputEvent sequence engine (available in Pro) that reliably communicates with the Docs canvas event target.'
      },
      {
        question: 'Can I change the keyboard shortcut?',
        answer: 'Yes. In the Settings tab of the extension popup, you can customize the shortcut trigger to any letter combination (e.g. Ctrl+Shift+A through Z).'
      },
      {
        question: 'What is the difference between Free and Pro?',
        answer: 'Free includes standard speeds (Slow and Normal) for standard inputs. Pro unlocks Google Docs support, high-speed modes (Fast, Very Fast, Ultra, Insane), typo simulation, natural pauses, mechanical keyboard audio, and the Chrome side panel controller.'
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
    version: '1.0.1',
    manifestVersion: 3,
    extensionId: 'pddfpjmkodjaobcaieajifcpcmpojlbo',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/pddfpjmkodjaobcaieajifcpcmpojlbo',
    legacyStoreUrl: 'https://chrome.google.com/webstore/detail/pddfpjmkodjaobcaieajifcpcmpojlbo',
    reviewsUrl: 'https://chromewebstore.google.com/detail/invisible-selection/pddfpjmkodjaobcaieajifcpcmpojlbo/reviews',
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
        answer: 'None whatsoever. Invisible Selection makes zero network requests and contains no tracking scripts. The only stored item is your ON/OFF toggle state in Chrome local storage.'
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
  }
];

export const STUDIO_METADATA = {
  brandName: 'SubtleWorks',
  studioName: 'SubtleWorks Studio',
  parentBrand: 'Baziq Hue',
  tagline: 'Precision browser extensions. Zero bloat, zero tracking, total control.',
  subheading: 'SubtleWorks Studio is a Baziq Hue product studio building lightweight, hyper-focused Chrome extensions engineered to solve specific browser problems cleanly.',
  supportEmail: 'gmuraguri75@gmail.com',
  storeDeveloperUrl: 'https://chromewebstore.google.com',
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
      title: 'Sub-Millisecond Performance',
      desc: 'Lightweight codebases built without bloated dependencies, ensuring zero lag, zero battery drain, and instant startup.',
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
    { label: 'Ecosystem Extensions', value: '2 Live' },
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
