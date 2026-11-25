import { INSTAGRAM_HANDLE, NAV_LINKS, TIKTOK_HANDLE, WHATSAPP_NUMBER, waLink } from "../content";
import { InstagramIcon, PempekKapalSelam, PempekLenjer, TikTokIcon, WaveDivider, WhatsAppIcon } from "./Illustrations";

function formatPhone(number: string) {
  // 6281779812060 -> 0817-7981-2060
  const local = `0${number.slice(2)}`;
  return `${local.slice(0, 4)}-${local.slice(4, 8)}-${local.slice(8)}`;
}

export function CtaBanner() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__card reveal">
          <PempekKapalSelam className="cta__art cta__art--a" />
          <PempekLenjer className="cta__art cta__art--b" />
          <h2>Pempek Rp 2.500 yang bikin banyak orang tersenyum.</h2>
          <p>Kami tidak hanya menjual pempek. Kami membawa rasa, cerita, dan kebahagiaan sederhana untuk semua orang.</p>
          <a className="btn btn--gold btn--lg" href={waLink("Halo, saya mau pesan pempek")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="icon" /> Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <WaveDivider className="footer__wave" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/img/logo-640.webp" alt="Logo Pempek Sepeda Keliling" width="120" height="120" loading="lazy" />
          <p>Pempek rakyat mulai Rp 2.500. Ukuran besar, rasa enak, harga terjangkau untuk semua kalangan.</p>
        </div>
        <div>
          <h3>Jelajahi</h3>
          <ul className="footer__links">
            {NAV_LINKS.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3>Hubungi kami</h3>
          <ul className="footer__links">
            <li>
              <a href={waLink("Halo Pempek Sepeda Keliling")} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="icon" /> {formatPhone(WHATSAPP_NUMBER)}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="icon" /> @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={`https://www.tiktok.com/@${TIKTOK_HANDLE}`} target="_blank" rel="noopener noreferrer">
                <TikTokIcon className="icon" /> @{TIKTOK_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} Pempek Sepeda Keliling. Hak cipta dilindungi.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a className="wa-float" href={waLink("Halo, saya mau pesan pempek")} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Pempek Sepeda Keliling">
      <WhatsAppIcon className="wa-float__icon" />
      <span className="wa-float__label">Pesan via WA</span>
    </a>
  );
}
