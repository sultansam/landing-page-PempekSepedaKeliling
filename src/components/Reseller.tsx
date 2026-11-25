import { HeartHandshake, Megaphone, Store, TrendingUp } from "lucide-react";
import { RESELLER_BENEFITS, waLink } from "../content";
import { PempekLenjer, WhatsAppIcon } from "./Illustrations";

const ICONS = [TrendingUp, Store, Megaphone, HeartHandshake];

export default function Reseller() {
  return (
    <section className="section section--dark" id="reseller">
      <div className="container reseller">
        <div className="reseller__intro reveal">
          <span className="eyebrow eyebrow--gold">Peluang usaha</span>
          <h2>Bukan cuma jualan pempek, tapi bagi rezeki</h2>
          <p>
            Kami membuka kesempatan untuk siapa saja yang ingin menambah penghasilan. Banyak mitra kami mulai dari kecil,
            sekarang punya penghasilan tambahan setiap hari.
          </p>
          <div className="reseller__min">
            <PempekLenjer className="reseller__icon" />
            <div>
              <strong>Mulai 200 pcs</strong>
              <span>Modal kecil, cepat berputar</span>
            </div>
          </div>
          <a className="btn btn--gold btn--lg" href={waLink("Halo, saya mau gabung jadi reseller pempek")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="icon" /> Gabung Jadi Reseller
          </a>
        </div>
        <ul className="benefits">
          {RESELLER_BENEFITS.map((benefit, index) => {
            const Icon = ICONS[index];
            return (
              <li className="benefit reveal" key={benefit.title}>
                <span className="benefit__icon"><Icon size={24} /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
