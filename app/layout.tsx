import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ghulamashraf.com"),
  title: {
    default: "Dr. Ghulam Sarwar Ashraf",
    template: "%s | Dr. Ghulam Sarwar Ashraf",
  },
  description:
    "Essays and public reflection on education, faith, culture, service, and society by Dr. Ghulam Sarwar Ashraf.",
  keywords: ["Ghulam Sarwar Ashraf", "education", "faith", "culture", "public reflection", "essays"],
  openGraph: {
    type: "website",
    title: "Dr. Ghulam Sarwar Ashraf",
    description: "Scholarship, reflection, and ideas in service of society.",
    images: [{ url: "/editorial-hero.png", width: 1154, height: 1400, alt: "Dr. Ghulam Sarwar Ashraf" }],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
