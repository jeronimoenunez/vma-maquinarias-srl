/**
 * VMA RENTAL — Feature Flags
 *
 * UN SOLO INTERRUPTOR:
 *   Cloudflare Pages → Environment variables:
 *   PUBLIC_SPRINT2_ENABLED = true
 *
 * Secrets necesarios (Cloudflare → Settings → Secrets):
 *   ANTHROPIC_API_KEY
 *   RESEND_API_KEY
 *   SHEETS_WEBHOOK_URL
 */

export const sprint2Enabled =
  import.meta.env.PUBLIC_SPRINT2_ENABLED === "true";

export const features = {
  aiChat: sprint2Enabled,
  fallbackFormApi: sprint2Enabled,
  leadRouting: sprint2Enabled,
} as const;

export type FeatureFlags = typeof features;