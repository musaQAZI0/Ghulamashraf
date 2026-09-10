import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dr. Ghulam Sarwar Ashraf for speaking, collaboration, and media enquiries.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <section className="page-hero compact-page-hero">
        <span className="eyebrow"><i /> Contact</span>
        <h1>Invite a conversation or collaboration.</h1>
        <p>Use the form for speaking invitations, media enquiries, educational collaboration, or thoughtful correspondence.</p>
      </section>
      <ContactSection />
    </SiteFrame>
  );
}
