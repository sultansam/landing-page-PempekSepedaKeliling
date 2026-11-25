import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Highlights, HowToOrder, MenuSection } from "./components/Products";
import Story from "./components/Story";
import Party from "./components/Party";
import Reseller from "./components/Reseller";
import SocialProof, { Faq } from "./components/Testimonials";
import Footer, { CtaBanner, FloatingWhatsApp } from "./components/Footer";

/** Animasi muncul saat discroll (dihormati: tidak jalan bila pengguna memilih kurangi animasi). */
function useRevealOnScroll() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();
  return (
    <>
      <a className="skip-link" href="#menu">Langsung ke menu</a>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <MenuSection />
        <HowToOrder />
        <Story />
        <Party />
        <Reseller />
        <SocialProof />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
