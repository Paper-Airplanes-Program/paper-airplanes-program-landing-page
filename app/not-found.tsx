import type { Metadata } from "next";

import { ErrorScreen } from "@/components/landing/error-screen";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
};

/** Every unmatched URL on the site lands here. */
export default function NotFound() {
  return <ErrorScreen code={404} />;
}
