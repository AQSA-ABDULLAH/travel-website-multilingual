import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr", "ur"], // Add Urdu locale
  defaultLocale: "en",        // Default locale remains English
});

export const config = {
  matcher: ["/", "/(fr|en|ur)/:path*"], // Include 'ur' in the matcher paths
};

