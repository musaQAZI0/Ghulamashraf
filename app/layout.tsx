import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ghulam Sarwar Ashraf",
  description:
    "A premium personal publication platform for essays, professional profile, media, travel, and public reflection.",
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
