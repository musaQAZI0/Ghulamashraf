import { SiteFrame } from "@/components/layout/SiteFrame";

export default function TravelPage() {
  return (
    <SiteFrame>
      <section className="page-hero">
        <span className="eyebrow">Travel & Leisure</span>
        <h1>Reflective journeys through places, culture, and memory.</h1>
        <p>
          A calm editorial space for travel writing, cultural notes, personal observations, and photo-led reflections.
        </p>
      </section>
      <section className="topic-grid route-topic-grid">
        {["Places", "Culture", "Leisure", "Reflections", "Photos", "Travel Notes"].map((item) => (
          <article className="topic-card" key={item}>
            <span>{item}</span>
            <p>Editorial collection prepared for future entries and visual stories.</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
