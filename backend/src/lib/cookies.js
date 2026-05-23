import { ENV } from "./env.js";

const parseBoolean = (value) => {
  if (value === undefined) return undefined;

  return ["1", "true", "yes"].includes(value.toLowerCase());
};

const normalizeSameSite = (value) => {
  const sameSite = value?.toLowerCase();
  return ["lax", "strict", "none"].includes(sameSite) ? sameSite : undefined;
};

const hasHttpsClient = ENV.CLIENT_URLS.some((url) => url.startsWith("https://"));

export const getAuthCookieOptions = (maxAge) => {
  const sameSite =
    normalizeSameSite(ENV.COOKIE_SAME_SITE) ||
    (ENV.NODE_ENV === "production" || hasHttpsClient ? "none" : "lax");
  const configuredSecure = parseBoolean(ENV.COOKIE_SECURE);
  const secure =
    sameSite === "none"
      ? true
      : (configuredSecure ?? (ENV.NODE_ENV === "production" || hasHttpsClient));

  return {
    httpOnly: true,
    sameSite,
    secure,
    ...(maxAge === undefined ? {} : { maxAge }),
  };
};
