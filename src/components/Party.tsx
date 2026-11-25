import { Check, Clock, PartyPopper, Users, Bike } from "lucide-react";
import { PARTY_OCCASIONS, PARTY_PACKAGES, waLink } from "../content";
import { Sparkle, WhatsAppIcon } from "./Illustrations";

export default function Party() {
  return (
    <section className="section section--cream" id="party">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow"><PartyPopper size={16} /> Party pempek</span>
          <h2>Bikin acara makin seru</h2>
          <p>Dari arisan sederhana sampai pesta pernikahan, sepeda pempek kami datang ke lokasi dan jadi pusat perhatian tamu.</p>
          <ul className="chips" aria-label="Cocok untuk">
            {PARTY_OCCASIONS.map((occasion) => <li key={occasion}><Check size={14} /> {occasion}</li>)}
          </ul>
        </div>

        <div className="packages">
          {PARTY_PACKAGES.map((pkg) => (
            <article className={`package reveal ${pkg.popular ? "package--popular" : ""}`} key={pkg.name}>
              {pkg.popular ? <span className="package__badge"><Sparkle className="package__spark" /> Paling laris</span> : null}
              <h3>{pkg.name}</h3>
              <p className="package__qty">{pkg.qty}</p>
              <p className="package__price">{pkg.price}</p>
              <ul className="package__list">
                <li><Bike size={18} /> {pkg.bikes}</li>
                <li><Users size={18} /> {pkg.crew}</li>
                <li><Clock size={18} /> {pkg.duration} di lokasi</li>
              </ul>
              <a
                className={`btn btn--block ${pkg.popular ? "btn--primary" : "btn--outline"}`}
                href={waLink(`Halo, saya mau booking ${pkg.name} (${pkg.qty}, ${pkg.price}). Tanggal acara: `)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="icon" /> Booking {pkg.name.replace("Paket ", "")}
              </a>
            </article>
          ))}
        </div>
        <p className="packages__note reveal">Butuh jumlah lain atau acara lebih dari 3 jam? <a href={waLink("Halo, saya mau tanya paket party pempek custom")} target="_blank" rel="noopener noreferrer">Tanya paket custom</a>.</p>
      </div>
    </section>
  );
}
