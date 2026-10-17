import { PRODUCTS, type Product } from './products.ts';

/**
 * Public origin of the deployed site. Canonical URLs, share tags, the sitemap and
 * robots.txt are all built from this one value, at run time and at build time.
 */
export const SITE_URL = 'https://subtleworks-studio.baziqhue.co.ke';

const DEFAULT_SOCIAL_IMAGE = '/assets/extensions/phantom-typer/hero-preview.png';

export interface PageMeta {
  /** Router path, e.g. "/about" */
  path: string;
  title: string;
  description: string;
  /** Site-relative image used for link previews */
  image: string;
  /** Keeps error pages out of search results */
  noindex?: boolean;
}

export const HOME_META: PageMeta = {
  path: '/',
  title: 'SubtleWorks Studio — Precision Chrome Extensions | Baziq Hue',
  description:
    'SubtleWorks Studio is a Baziq Hue product studio building lightweight, hyper-focused Chrome extensions engineered to solve specific browser problems cleanly. Zero bloat, zero tracking, total control.',
  image: DEFAULT_SOCIAL_IMAGE
};

export const ABOUT_META: PageMeta = {
  path: '/about',
  title: 'About SubtleWorks Studio — Baziq Hue',
  description:
    'SubtleWorks Studio is the Baziq Hue product studio behind Snap Flow Studio, Phantom Typer, and Invisible Selection: lightweight, single-purpose Chrome extensions with verified zero-bloat architectures.',
  image: DEFAULT_SOCIAL_IMAGE
};

export const PRIVACY_META: PageMeta = {
  path: '/privacy',
  title: 'Privacy Policy & Permissions Audit — SubtleWorks Studio',
  description:
    'What each SubtleWorks Studio extension stores, which network requests it makes, and every Chrome permission it declares — with links to the full privacy policies.',
  image: DEFAULT_SOCIAL_IMAGE
};

export const SUPPORT_META: PageMeta = {
  path: '/support',
  title: 'Support & Help Center — SubtleWorks Studio',
  description:
    'Get help with Snap Flow Studio, Phantom Typer, and Invisible Selection: contact the developer by email, ask questions, and find answers to common problems.',
  image: DEFAULT_SOCIAL_IMAGE
};

export const NOT_FOUND_META: PageMeta = {
  path: '/404',
  title: 'Page Not Found — SubtleWorks Studio',
  description: 'The page you were looking for does not exist. Browse the SubtleWorks Studio extensions instead.',
  image: DEFAULT_SOCIAL_IMAGE,
  noindex: true
};

export function productMeta(product: Product): PageMeta {
  return {
    path: `/extensions/${product.slug}`,
    title: `${product.name} — SubtleWorks Studio`,
    description: product.tagline,
    image: product.socialImage ?? product.heroPreview
  };
}

/** Every page that should be crawled, in sitemap order. */
export const INDEXABLE_PAGES: PageMeta[] = [
  HOME_META,
  ...PRODUCTS.map(productMeta),
  ABOUT_META,
  PRIVACY_META,
  SUPPORT_META
];

/** Old or alternative product URLs and the canonical path each one should redirect to. */
export const ROUTE_ALIASES: { from: string; to: string }[] = PRODUCTS.flatMap((product) =>
  product.aliases.map((alias) => ({ from: `/extensions/${alias}`, to: `/extensions/${product.slug}` }))
);

export const absoluteUrl = (path: string): string => SITE_URL + path;
