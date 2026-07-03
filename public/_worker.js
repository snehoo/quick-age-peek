export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Remove www subdomain: www.whatismyage.me → whatismyage.me
    if (url.hostname === 'www.whatismyage.me') {
      const newUrl = new URL(request.url);
      newUrl.hostname = 'whatismyage.me';
      return Response.redirect(newUrl.toString(), 301);
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
