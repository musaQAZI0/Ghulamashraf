import type { Metadata } from "next";
import { Clock3 } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";

export const metadata: Metadata = {
  title: "Media",
  description: "Interviews, video reflections, press appearances, and public media from Dr. Ghulam Sarwar Ashraf.",
};

export default function MediaPage() {
  return (
    <SiteFrame>
      <section className="page-hero">
        <span className="eyebrow">Media</span>
        <h1>Interviews, video reflections, press notes, and photos.</h1>
        <p>A curated index for public talks, interviews, reflections, press appearances, and visual moments.</p>
      </section>
      <section className="media-grid">
        {["Featured Interview", "Video Reflection", "Press Appearance"].map((item) => (
          <article className="media-card" key={item}>
            <div className="media-button" aria-hidden="true"><Clock3 size={18} /></div>
            <span className="badge">Archive in preparation</span>
            <h3>{item}</h3>
            <p>Verified recordings, dates, and publication links will appear here as the media archive is prepared.</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
