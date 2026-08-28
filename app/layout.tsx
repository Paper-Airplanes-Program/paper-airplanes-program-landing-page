import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { themeScript } from "@/components/ui";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.paper-airplanes.org"),
  title: {
    default: "Paper Airplanes — Free Online Education For Refugees",
    template: "%s · Paper Airplanes",
  },
  description:
    "Paper Airplanes bridges gaps in language, higher education and professional skills training for individuals affected by conflict — free, online, and taught one-to-one. 5,476+ students, 6,000+ volunteers, 46+ nationalities.",
  keywords: [
    "refugee education",
    "free online English tutoring",
    "Women in Tech",
    "professional skills development",
    "nonprofit",
    "learning continuity",
  ],
  openGraph: {
    title: "Paper Airplanes — Back to School. Forward for Life.",
    description:
      "Free online education for individuals affected by conflict. One class. One connection. One future changed.",
    url: "/",
    siteName: "Paper Airplanes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Airplanes — Back to School. Forward for Life.",
    description:
      "Free online education for individuals affected by conflict. One class. One connection. One future changed.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#04050d" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // themeScript sets data-theme before React hydrates.
      suppressHydrationWarning
      className={`${jakarta.variable} ${instrument.variable} h-full antialiased`}
    >
      <head>
        {/* Must live inside <head>: a bare <script> between <html> and <body>
            is invalid HTML, so the browser reparents it and the DOM no longer
            matches the tree React rendered. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Scroll reveals start at opacity 0 and are switched on by an
            IntersectionObserver. Without JS that observer never runs, so
            un-hide everything up front. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
