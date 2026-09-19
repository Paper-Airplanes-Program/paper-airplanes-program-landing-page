import { ErrorScreen } from "@/components/landing/error-screen";

/**
 * Rendered with a 403 when a route calls `forbidden()` from next/navigation.
 * The call needs `experimental.authInterrupts` in next.config.ts.
 */
export default function Forbidden() {
  return <ErrorScreen code={403} />;
}
