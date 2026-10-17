import { useEffect } from 'react';
import { absoluteUrl, type PageMeta } from '../data/siteMeta.ts';

function setHeadAttribute(selector: string, attribute: 'content' | 'href', value: string) {
  document.head.querySelector(selector)?.setAttribute(attribute, value);
}

/**
 * Keeps the document title and the description, canonical and share tags in step with
 * the page being shown. The same values are baked into each route's HTML at build time
 * (see vite.config.ts); this covers navigation inside the single-page app.
 */
export function usePageMeta({ path, title, description, image, noindex = false }: PageMeta): void {
  useEffect(() => {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = title;
    setHeadAttribute('meta[name="description"]', 'content', description);
    setHeadAttribute('meta[name="robots"]', 'content', noindex ? 'noindex' : 'index, follow');
    setHeadAttribute('link[rel="canonical"]', 'href', url);
    setHeadAttribute('meta[property="og:url"]', 'content', url);
    setHeadAttribute('meta[property="og:title"]', 'content', title);
    setHeadAttribute('meta[property="og:description"]', 'content', description);
    setHeadAttribute('meta[property="og:image"]', 'content', imageUrl);
    setHeadAttribute('meta[name="twitter:title"]', 'content', title);
    setHeadAttribute('meta[name="twitter:description"]', 'content', description);
    setHeadAttribute('meta[name="twitter:image"]', 'content', imageUrl);
  }, [path, title, description, image, noindex]);
}
