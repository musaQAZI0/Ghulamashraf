"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { type FormEvent, useState } from "react";

type ContactSectionProps = {
  compact?: boolean;
};

export function ContactSection({ compact = false }: ContactSectionProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:contact@ghulamashraf.com?subject=${subject}&body=${body}`;
    setStatus("Your email application has been opened with the message prepared.");
  }

  if (compact) {
    return (
      <section className="contact-section contact-compact" id="contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Continue the conversation.</h2>
          <p>For speaking invitations, collaborations, and thoughtful media enquiries.</p>
        </div>
        <Link className="primary-button" href="/contact">
          Get in touch <ArrowRight size={18} />
        </Link>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div>
        <span className="eyebrow">Contact</span>
        <h2>Begin a conversation, invite collaboration, or request a media appearance.</h2>
        <a className="email-link" href="mailto:contact@ghulamashraf.com">
          <Mail size={18} /> contact@ghulamashraf.com
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" placeholder="Your name" autoComplete="name" minLength={2} required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="How can we help?" minLength={10} required />
        </label>
        <button className="primary-button" type="submit">
          Send Message <ArrowRight size={18} />
        </button>
        {status && <p className="contact-status" role="status">{status}</p>}
      </form>
    </section>
  );
}
