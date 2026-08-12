import { ArrowRight, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <span className="eyebrow">Contact</span>
        <h2>Begin a conversation, invite collaboration, or request a media appearance.</h2>
        <a className="email-link" href="mailto:contact@ghulamashraf.com">
          <Mail size={18} /> contact@ghulamashraf.com
        </a>
      </div>
      <form className="contact-form">
        <label>
          Name
          <input name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="How can we help?" />
        </label>
        <button className="primary-button" type="submit">
          Send Message <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
