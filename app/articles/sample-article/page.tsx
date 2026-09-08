import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, Share2 } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";

export default function SampleArticlePage() {
  return (
    <SiteFrame>
      <main className="reading-page">
        <article>
          <header className="reading-header">
            <Link className="reading-back" href="/articles"><ArrowLeft size={16} /> All articles</Link>
            <span className="badge">Education</span>
            <h1>Reimagining Learning for a Generation That Reads the World Differently</h1>
            <p className="reading-deck">A reflection on curiosity, discipline, and the teacher&apos;s role in shaping confident, ethical learners.</p>
            <div className="reading-byline">
              <div>
                <strong>Dr. Ghulam Sarwar Ashraf</strong>
                <span>Aug 8, 2026</span>
              </div>
              <span><Clock3 size={16} /> 6 min read</span>
              <button type="button" aria-label="Share this article"><Share2 size={16} /> Share</button>
            </div>
          </header>

          <figure className="reading-figure">
            <Image src="/editorial-hero.png" alt="A reflective academic study setting" width={1154} height={1400} sizes="(max-width: 900px) calc(100vw - 28px), 1240px" />
            <figcaption>Learning begins with attention: to ideas, to people, and to the world beyond the classroom.</figcaption>
          </figure>

          <div className="reading-layout">
            <aside className="reading-aside">
              <span>In this essay</span>
              <a href="#curiosity">Curiosity as practice</a>
              <a href="#judgment">Teaching judgment</a>
              <a href="#service">Knowledge in service</a>
            </aside>
            <div className="reading-content">
              <p className="reading-intro">Every generation learns to read the world through a different set of tools. The challenge for education is not merely to keep pace with those tools, but to preserve the habits of attention, judgment, and responsibility that make learning worthwhile.</p>
              <h2 id="curiosity">Curiosity as a disciplined practice</h2>
              <p>Curiosity is often described as a natural gift. In practice, it is also a discipline: the willingness to stay with a difficult question, examine an assumption, and listen before reaching a conclusion. A strong classroom makes room for wonder while teaching students how to test what they think they know.</p>
              <p>Technology can widen access to information, but information alone does not create understanding. Learners still need time to compare, question, connect, and explain. These slower acts are not obstacles to progress; they are the foundations of sound thought.</p>
              <blockquote>Education becomes powerful when knowledge is joined with character, responsibility, and service.</blockquote>
              <h2 id="judgment">Teaching judgment, not only answers</h2>
              <p>When answers are instantly available, the educator&apos;s role becomes more important, not less. Teachers help students recognise a trustworthy source, understand context, notice what is missing, and accept the responsibility that accompanies a decision.</p>
              <p>This work requires both intellectual confidence and humility. A learner should be able to defend a conclusion while remaining open to correction. That combination prepares people for citizenship, professional life, and relationships far beyond formal education.</p>
              <h2 id="service">Knowledge in service of others</h2>
              <p>The deepest measure of learning is what it enables us to contribute. Education should equip people to solve practical problems, care for their communities, and approach difference with courage and generosity. Achievement and service belong in the same conversation.</p>
              <p>For a generation reading the world differently, the goal is not to recreate the classroom of the past. It is to carry forward its best purposes: clear thought, moral imagination, patient inquiry, and a commitment to the public good.</p>
              <div className="reading-author-note">
                <span>About the author</span>
                <h3>Dr. Ghulam Sarwar Ashraf</h3>
                <p>A writer and academic reflecting on education, faith, culture, service, and society.</p>
                <Link href="/about">View profile <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </article>

        <nav className="reading-pagination" aria-label="Article navigation">
          <Link href="/articles"><ArrowLeft size={17} /><span><small>Previous</small>The discipline of hope</span></Link>
          <Link href="/articles"><span><small>Next</small>Human judgment and fast machines</span><ArrowRight size={17} /></Link>
        </nav>
      </main>
    </SiteFrame>
  );
}
