export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Remove www subdomain: www.whatismyage.me → whatismyage.me
    if (url.hostname === 'www.whatismyage.me') {
      const newUrl = new URL(request.url);
      newUrl.hostname = 'whatismyage.me';
      return Response.redirect(newUrl.toString(), 301);
    }

    // Consolidate duplicate "1 billion seconds" article into the established,
    // internally-linked, indexed page (avoid near-duplicate content competing
    // with itself in the index)
    if (
      url.pathname === '/blog/how-many-years-is-1-billion-seconds' ||
      url.pathname === '/blog/how-many-years-is-1-billion-seconds/'
    ) {
      url.pathname = '/blog/when-will-i-be-1-billion-seconds-old/';
      return Response.redirect(url.toString(), 301);
    }

    // Retired one-page-per-birth-year articles (2026-10-12) -> one age table,
    // landing on the matching row
    const bornIn = url.pathname.match(/^\/blog\/how-old-am-i-if-i-was-born-in-(\d{4})\/?$/);
    if (bornIn) {
      url.pathname = '/blog/how-old-am-i-by-birth-year/';
      url.hash = 'born-' + bornIn[1];
      return Response.redirect(url.toString(), 301);
    }

    // Enforce trailing slashes on blog posts (but not files)
    if (url.pathname.startsWith('/blog/') && !url.pathname.endsWith('/')) {
      const hasFileExtension = /\.\w+$/.test(url.pathname);
      if (!hasFileExtension) {
        url.pathname += '/';
        return Response.redirect(url.toString(), 301);
      }
    }

    // Continue to the original request
    return env.ASSETS.fetch(request);
  },
};
