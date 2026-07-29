// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Change this to wherever you deploy it.
  site: 'https://wanted.darynarodriguez.com',
  devToolbar: { enabled: false },
  // 4330, not Astro's default 4321: another dev server on this machine already
  // holds 4321 and 4322, so the default made the port move on every restart.
  server: { port: Number(process.env.PORT) || 4330 },
});
