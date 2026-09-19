import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Lets routes call `forbidden()` so app/forbidden.tsx is what renders
    // behind a 403 instead of the framework default.
    authInterrupts: true,
  },
};

export default nextConfig;
