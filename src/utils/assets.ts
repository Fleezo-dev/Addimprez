/**
 * Helper to resolve asset URLs correctly across local dev, preview, and GitHub Pages deployments.
 */
export function resolveAssetUrl(url: string | null | undefined): string {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }

  // Strip leading slash to prevent absolute root domain resolution on GitHub Pages subpaths
  const clean = url.startsWith('/') ? url.slice(1) : url;
  const base = import.meta.env.BASE_URL || './';
  
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}
