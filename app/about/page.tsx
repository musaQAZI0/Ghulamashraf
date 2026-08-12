import Link from "next/link";
import { Download } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { milestones } from "@/lib/site-content";

const biography = [
  "Dr. Ghulam S. Ashraf is a writer, thinker, and lifelong student of faith, family, and the human journey. Born in Blackburn and raised in Bolton, England, his roots trace back to Attowala, Tehsil Kharian, Pakistan, a heritage that has given him a deep appreciation for both Western opportunity and Eastern tradition. He grew up surrounded by the values of patience, sacrifice, and service, lessons first taught to him by his late parents, Muhammad Ashraf and Nazir Begum, and further shaped by his beloved grandparents.",
  "Academically, Dr. Ashraf holds a BSc (Hons) in Chemistry & Chemical Technology, an MRes in Molecular Engineering, a PhD in Materials Science, and an MSc in Islamic Banking, Finance and Insurance. He studied at the University of Bradford, University of Manchester, Brunel University, the Markfield Institute of Higher Education, and Tudor College. This unique combination of scientific rigour and ethical finance reflects his belief in integrating technical excellence with moral purpose.",
  "Beyond his academic qualifications, Dr. Ashraf has developed a rich portfolio of skills and experience across multiple caring professions. He has worked extensively in youth work, mediation, charitable activities, education and tuition, social care, special children's education, and healthcare. These roles have shaped not only his understanding of human need but also his commitment to serving others with patience, empathy, and professionalism.",
  "He has been a pioneer in multiple transformative projects, including setting up charitable projects, establishing new schools for special children, building hospitals in rural communities, launching microfinance projects, educating poor children, leading scouts for young people, and developing humanitarian assistance welfare programmes. His work has consistently focused on empowering the most vulnerable and creating sustainable, community-led change.",
  "Dr. Ashraf also brings extensive industrial experience across a range of sectors, including scientific research, manufacturing, healthcare, information technology, education, quality assurance, and project management. This diverse background has equipped him with a practical, solutions-oriented mindset that he applies to every endeavour.",
  "His worldview has been further enriched by extensive travel across the globe, including Malaysia, Qatar, Saudi Arabia, Turkey, the UAE, France, and beyond. These journeys have deepened his appreciation for diverse cultures, Islamic heritage, and the shared humanity that connects us all.",
  "Outside of his professional and humanitarian work, Dr. Ashraf is an avid sports follower, with a keen interest in football, cricket, and current affairs.",
  "In this blog, Dr. Ashraf offers not only a dedication to those who came before him but also an invitation to readers to remember their own roots. He resides with his family and continues to write, reflect, and teach.",
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="page-hero">
        <span className="eyebrow">Professional Profile</span>
        <h1>Biography, education, career, and public contribution.</h1>
        <p>
          A concise profile of Dr. Ghulam Sarwar Ashraf&apos;s academic work, professional service, public writing,
          and contribution to learning communities.
        </p>
        <Link className="primary-button" href="/cv.pdf">
          Download CV <Download size={18} />
        </Link>
      </section>
      <section className="profile-grid">
        <article className="biography-card">
          <span className="eyebrow">Biography</span>
          <h2>About the Author</h2>
          {biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
