export const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  // CSP: arrancá en Report-Only primero en prod real
  // "Content-Security-Policy": "default-src 'self'; img-src 'self' data: https:; ..."
} as const;
