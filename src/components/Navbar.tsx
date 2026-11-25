import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, waLink } from "../content";
import { WhatsAppIcon } from "./Illustrations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Laci menu HP sengaja di luar <header>: backdrop-filter di header membuat elemen fixed di dalamnya
  // terkurung di area header, jadi laci tidak bisa menutupi layar.
  return (
    <>
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Pempek Sepeda Keliling, kembali ke atas">
          <img src="/img/logo-640.webp" alt="" width="44" height="44" />
          <span>Pempek <strong>Sepeda Keliling</strong></span>
        </a>

        <nav className="nav__links" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <a className="btn btn--primary btn--sm nav__cta" href={waLink("Halo, saya mau pesan pempek")} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="icon" /> Pesan
        </a>

        <button className="nav__toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

      <div id="mobile-menu" className={`nav__drawer ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Navigasi HP">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </nav>
        <a className="btn btn--primary btn--block" href={waLink("Halo, saya mau pesan pempek")} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          <WhatsAppIcon className="icon" /> Pesan via WhatsApp
        </a>
      </div>
    </>
  );
}
