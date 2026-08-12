import { Play } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";

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
            <button className="media-button" aria-label={`Play ${item}`}>
              <Play size={18} />
            </button>
            <h3>{item}</h3>
            <p>Selected appearance with context, date, and a direct path to watch or read more.</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
