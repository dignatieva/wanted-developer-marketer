// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Drives the canonical link and the og: tags. Update this if a custom domain
  // is added, otherwise link previews and canonical will point at the old host.
  site: 'https://wanted-developer-marketer-posthog.vercel.app',
  devToolbar: { enabled: false },
  // 4330, not Astro's default 4321: another dev server on this machine already
  // holds 4321 and 4322, so the default made the port move on every restart.
  server: { port: Number(process.env.PORT) || 4330 },

  vite: {
    server: {
      // Mirrors the rewrites in vercel.json so /ingest resolves in dev too.
      // Without this, analytics works in production and 404s locally, which is
      // the kind of difference you only discover at the worst moment.
      // Longest prefix first: Vite matches these in declaration order.
      proxy: {
        '/ingest/static': {
          target: 'https://eu-assets.i.posthog.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/ingest/, ''),
        },
        '/ingest': {
          target: 'https://eu.i.posthog.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/ingest/, ''),
        },
      },
    },
  },
});
