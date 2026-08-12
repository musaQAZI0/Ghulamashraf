import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type SiteFrameProps = {
  children: React.ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <main className="site-shell">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
