import Link from "next/link";
import { Download } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { milestones } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="page-hero">
        <span className="eyebrow">Professional Profile</span>
        <h1>Biography, education, career, and public contribution.</h1>
        <p>
          A refined profile page for presenting Dr. Ghulam Sarwar Ashraf&apos;s academic background, professional roles,
          achievements, publications, awards, and downloadable CV.
        </p>
        <Link className="primary-button" href="/cv.pdf">
          Download CV <Download size={18} />
        </Link>
      </section>
      <section className="profile-grid">
        <article>
          <span className="eyebrow">Biography</span>
          <h2>A life shaped by learning and service.</h2>
          <p>
            This page is ready for the full professional biography, including teaching, leadership, publications, awards,
            media appearances, and public-facing work.
          </p>
        </article>
        <div className="profile-list">
          {milestones.map((item) => (
            <div className="profile-list-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
