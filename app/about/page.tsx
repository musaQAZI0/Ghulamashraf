import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";

const facts = [
  { value: "04", label: "Academic degrees" },
  { value: "07", label: "Professional sectors" },
  { value: "06+", label: "Countries explored" },
  { value: "04", label: "Fields of service" },
];

const journey = [
  {
    index: "01",
    title: "Roots & upbringing",
    body: "Born in Blackburn and raised in Bolton, with family roots in Attowala, Pakistan. A life shaped by patience, sacrifice, service, and the meeting of Eastern tradition with Western opportunity.",
  },
  {
    index: "02",
    title: "Academic formation",
    body: "Studies across chemistry, molecular engineering, materials science, and Islamic finance created an enduring interest in bringing technical rigour and moral purpose together.",
  },
  {
    index: "03",
    title: "Work & service",
    body: "Experience across science, healthcare, education, social care, technology, quality assurance, and project management developed a practical, human-centred approach to difficult problems.",
  },
  {
    index: "04",
    title: "Writing & contribution",
    body: "Today, writing and public reflection connect these experiences through ideas about faith, learning, culture, responsibility, and the shared work of building stronger communities.",
  },
];

const education = [
  "PhD in Materials Science",
  "MRes in Molecular Engineering",
  "BSc (Hons) in Chemistry & Chemical Technology",
  "MSc in Islamic Banking, Finance and Insurance",
];

const experience = [
  "Scientific research and manufacturing",
  "Healthcare and social care",
  "Education and special-needs learning",
  "Information technology and quality assurance",
  "Youth work, mediation, and charitable activity",
  "Project management and humanitarian programmes",
];

const values = [
  { icon: BookOpen, title: "Learning", body: "Curiosity disciplined by study, reflection, and a willingness to keep growing." },
  { icon: HeartHandshake, title: "Service", body: "Knowledge finds its purpose when it improves lives and strengthens communities." },
  { icon: GraduationCap, title: "Character", body: "Achievement matters most when it is joined by humility, patience, and responsibility." },
  { icon: BriefcaseBusiness, title: "Contribution", body: "Ideas should move beyond commentary and help shape useful, lasting action." },
];

export const metadata: Metadata = {
  title: "About",
  description: "The life, education, professional experience, and public contribution of Dr. Ghulam Sarwar Ashraf.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-copy">
            <span className="eyebrow"><i /> About the author</span>
            <h1>Science, faith, service, and a life devoted to <em>learning.</em></h1>
            <p className="about-identity">Dr. Ghulam Sarwar Ashraf</p>
            <p className="about-lede">
              A writer, thinker, and lifelong student exploring how knowledge, character, and public responsibility can serve society.
            </p>
            <div className="cta-row">
              <Link className="primary-button" href="#biography">
                Read biography <ArrowDownRight size={18} />
              </Link>
              <Link className="secondary-button" href="/contact">
                Request full CV <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <figure className="about-portrait">
            <Image
              src="/editorial-hero.png"
              alt="Dr. Ghulam Sarwar Ashraf in his study"
              width={1154}
              height={1400}
              sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
              preload
            />
            <figcaption>
              <span>Writer · Academic</span>
              <span>United Kingdom</span>
            </figcaption>
          </figure>
        </section>

        <section className="about-facts" aria-label="Profile highlights">
          {facts.map((fact) => (
            <div key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </section>

        <section className="about-biography" id="biography">
          <div className="about-section-heading">
            <span className="eyebrow"><i /> Biography</span>
            <h2>A life shaped by two traditions and one enduring purpose.</h2>
          </div>
          <div className="about-biography-copy">
            <p className="about-dropcap">
              Dr. Ashraf was born in Blackburn and raised in Bolton, England, with family roots in Attowala, Tehsil Kharian, Pakistan. The values of patience, sacrifice, and service were first taught by his parents and grandparents, giving him a lasting appreciation for both Western opportunity and Eastern tradition.
            </p>
            <p>
              His academic path spans chemistry, molecular engineering, materials science, and Islamic banking and finance. Alongside this work, he has built experience across youth work, mediation, education, social care, healthcare, technology, manufacturing, quality assurance, and project management.
            </p>
            <p>
              Community service has remained central throughout. His work has included charitable projects, schools for special children, rural hospitals, microfinance, education initiatives, youth scouting, and humanitarian welfare programmes. Through this publication, he now brings those experiences into a wider conversation about faith, learning, culture, and responsible contribution.
            </p>
          </div>
        </section>

        <section className="about-journey">
          <div className="about-section-heading about-section-heading-row">
            <div>
              <span className="eyebrow"><i /> The journey</span>
              <h2>Experience gathered, perspective earned.</h2>
            </div>
            <p>Four chapters that connect personal roots, academic study, professional work, and public reflection.</p>
          </div>
          <div className="about-journey-grid">
            {journey.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-credentials">
          <div className="about-credential-column">
            <span className="eyebrow"><i /> Education</span>
            <h2>Academic foundation</h2>
            <ul>
              {education.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>Studies undertaken across the University of Bradford, University of Manchester, Brunel University, Markfield Institute of Higher Education, and Tudor College.</p>
          </div>
          <div className="about-credential-column">
            <span className="eyebrow"><i /> Experience</span>
            <h2>Professional practice</h2>
            <ul>
              {experience.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="about-values">
          <div className="about-section-heading about-section-heading-row">
            <div>
              <span className="eyebrow"><i /> Guiding principles</span>
              <h2>What makes knowledge meaningful.</h2>
            </div>
            <blockquote>“Knowledge has its greatest value when it is used in service of others.”</blockquote>
          </div>
          <div className="about-values-grid">
            {values.map(({ icon: Icon, title, body }) => (
              <article key={title}>
                <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-closing">
          <span className="eyebrow"><i /> Continue the conversation</span>
          <h2>Read the ideas. Share a perspective. Begin a conversation.</h2>
          <div className="cta-row">
            <Link className="primary-button" href="/articles">Explore articles <ArrowRight size={18} /></Link>
            <Link className="secondary-button" href="/contact">Get in touch <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
