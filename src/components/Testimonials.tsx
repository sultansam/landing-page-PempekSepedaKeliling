import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ, INSTAGRAM_HANDLE, TIKTOK_HANDLE } from "../content";
import { InstagramIcon, TikTokIcon } from "./Illustrations";

const TIKTOK_SCRIPT = "https://www.tiktok.com/embed.js";

/**
 * Konten asli dari akun sendiri: sematan profil kreator TikTok (video terbaru tampil otomatis) + kartu Instagram.
 * Script TikTok baru dimuat saat bagian ini mendekati layar, supaya halaman tetap cepat dibuka.
 */
export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) { setLoad(true); return; }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!load) return;
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TIKTOK_SCRIPT}"]`);
    if (existing) return;
    const script = document.createElement("script");
    script.src = TIKTOK_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, [load]);

  const tiktokUrl = `https://www.tiktok.com/@${TIKTOK_HANDLE}`;
  const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  return (
    <section className="section" id="sosmed" ref={sectionRef} aria-labelledby="sosmed-title">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Lihat langsung</span>
          <h2 id="sosmed-title">Keseruan sepeda pempek setiap hari</h2>
          <p>Video asli dari jalanan dan acara pelanggan kami. Ikuti biar nggak ketinggalan lokasi dan promo terbaru.</p>
        </div>

        <div className="social">
          <div className="social__tiktok reveal">
            {load ? (
              <blockquote
                className="tiktok-embed"
                cite={tiktokUrl}
                data-unique-id={TIKTOK_HANDLE}
                data-embed-type="creator"
                style={{ maxWidth: "780px", minWidth: "288px", margin: 0 }}
              >
                <section>
                  <a target="_blank" rel="noopener noreferrer" href={tiktokUrl}>@{TIKTOK_HANDLE}</a>
                </section>
              </blockquote>
            ) : (
              <div className="social__placeholder" aria-hidden="true">Memuat video TikTok…</div>
            )}
          </div>

          <div className="social__cards">
            <a className="social-card social-card--tiktok reveal" href={tiktokUrl} target="_blank" rel="noopener noreferrer">
              <TikTokIcon className="social-card__icon" />
              <div>
                <strong>TikTok</strong>
                <span>@{TIKTOK_HANDLE}</span>
              </div>
              <span className="social-card__cta">Follow</span>
            </a>
            <a className="social-card social-card--ig reveal" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="social-card__icon" />
              <div>
                <strong>Instagram</strong>
                <span>@{INSTAGRAM_HANDLE}</span>
              </div>
              <span className="social-card__cta">Follow</span>
            </a>
            <p className="social__note reveal">Sudah pernah coba? Tag kami di story atau video kamu, nanti kami repost!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section section--cream" id="faq">
      <div className="container faq">
        <div className="section__head section__head--left reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Yang sering ditanyakan</h2>
          <p>Belum ketemu jawabannya? Tanya langsung lewat WhatsApp, kami balas secepatnya.</p>
        </div>
        <div className="faq__list">
          {FAQ.map((item, index) => {
            const isOpen = open === index;
            return (
              <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-${index}`} onClick={() => setOpen(isOpen ? null : index)}>
                    {item.q}
                    <ChevronDown className="faq__chevron" size={20} />
                  </button>
                </h3>
                <div id={`faq-${index}`} className="faq__answer" role="region" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
