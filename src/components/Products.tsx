import { MessageCircle, ShoppingBag, Bike } from "lucide-react";
import { HIGHLIGHTS, MENU, MENU_PRICES, ORDER_STEPS, waLink } from "../content";
import { PempekAdaan, PempekKapalSelam, PempekLenjer, WhatsAppIcon } from "./Illustrations";

export function Highlights() {
  return (
    <section className="highlights" aria-label="Keunggulan">
      <div className="container highlights__grid">
        {HIGHLIGHTS.map((item) => (
          <div className="highlight reveal" key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MenuIcon({ name, size }: { name: string; size: "kecil" | "besar" }) {
  if (size === "besar" && name.toLowerCase().includes("kapal")) return <PempekKapalSelam className="menu-card__icon" />;
  if (name.toLowerCase().includes("adaan") || name.toLowerCase().includes("telor")) return <PempekAdaan className="menu-card__icon" />;
  return <PempekLenjer className="menu-card__icon" />;
}

export function MenuSection() {
  const small = MENU.filter((item) => item.size === "kecil");
  const large = MENU.filter((item) => item.size === "besar");
  return (
    <section className="section section--cream" id="menu">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Menu andalan</span>
          <h2>Kenapa banyak yang balik lagi?</h2>
          <p>Ukurannya bikin puas, rasanya bikin ketagihan, dan harganya gak bikin mikir dua kali.</p>
        </div>

        <div className="menu-feature reveal">
          <figure className="menu-feature__photo">
            <img src="/img/pempek-kapal-selam.webp" alt="Pempek kapal selam terbelah dengan telur di dalam, disiram cuko" width="640" height="640" loading="lazy" />
            <figcaption>Kapal selam besar, isi telur utuh</figcaption>
          </figure>
          <div className="menu-feature__body">
            <div className="menu-group">
              <div className="menu-group__head">
                <h3>Pempek kecil</h3>
                <span className="price-tag">{MENU_PRICES.kecil}<small>/biji</small></span>
              </div>
              <ul className="menu-list">
                {small.map((item) => (
                  <li className="menu-card" key={item.name}>
                    <MenuIcon name={item.name} size={item.size} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-group menu-group--large">
              <div className="menu-group__head">
                <h3>Pempek besar</h3>
                <span className="price-tag price-tag--red">{MENU_PRICES.besar}<small>/biji</small></span>
              </div>
              <ul className="menu-list">
                {large.map((item) => (
                  <li className="menu-card" key={item.name}>
                    <MenuIcon name={item.name} size={item.size} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="menu-note">Semua disajikan hangat dengan cuko pekat khas Palembang.</p>
            <a className="btn btn--primary" href={waLink("Halo, saya mau pesan pempek. Menu yang tersedia hari ini apa saja?")} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="icon" /> Pesan Menu Ini
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEP_ICONS = [MessageCircle, ShoppingBag, Bike];

export function HowToOrder() {
  return (
    <section className="section" aria-labelledby="cara-pesan">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Gampang banget</span>
          <h2 id="cara-pesan">Cara pesan</h2>
        </div>
        <ol className="steps">
          {ORDER_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <li className="step reveal" key={step.title}>
                <span className="step__num">{index + 1}</span>
                <Icon className="step__icon" size={28} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
