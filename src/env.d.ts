/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_POSTHOG_KEY?: string;
  readonly PUBLIC_POSTHOG_HOST?: string;
}

interface Window {
  /** Present only when PUBLIC_POSTHOG_KEY is configured. */
  posthog?: typeof import('posthog-js').default;
}
