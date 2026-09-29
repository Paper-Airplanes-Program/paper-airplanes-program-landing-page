import { ErrorScreen } from "@/components/landing/error-screen";

export default function Forbidden() {
  return <ErrorScreen code={403} />;
}
