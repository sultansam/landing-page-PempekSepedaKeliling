import { ArrowRight, PartyPopper } from "lucide-react";
import { waLink } from "../content";
import { BikeWheel, CukoBowl, PempekAdaan, PempekKapalSelam, PempekLenjer, Sparkle, WaveDivider, WhatsAppIcon } from "./Illustrations";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <BikeWheel className="hero__wheel hero__wheel--a" />
      <BikeWheel className="hero__wheel hero__wheel--b" />
      <div className="container hero__grid">
        <div className="hero__copy reveal">
          <span className="eyebrow"><Sparkle className="eyebrow__icon" /> Keliling setiap hari</span>
          <h1>
            Dari sepeda keliling,
            <br />
            <span className="text-red">jadi favorit keluarga.</span>
          </h1>
          <p className="hero__lead">
            Pempek besar, enak, harga mulai <strong className="price-chip">Rp 2.500</strong>. Karena makan enak tidak harus mahal.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={waLink("Halo, saya mau pesan pempek")} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="icon" /> Pesan Sekarang
            </a>
            <a className="btn btn--ghost btn--lg" href="#party">
              <PartyPopper size={20} /> Party Pempek
            </a>
          </div>
          <a className="hero__reseller" href="#reseller">Mau jadi reseller? Lihat caranya <ArrowRight size={16} /></a>
        </div>

        <div className="hero__art reveal reveal--delay">
          <div className="hero__blob" aria-hidden="true" />
          <img className="hero__logo" src="/img/logo-640.webp" alt="Maskot Pempek Sepeda Keliling mengendarai sepeda pempek merah" width="520" height="520" />
          <div className="hero__badge hero__badge--price">
            <span>mulai</span>
            <strong>Rp 2.500</strong>
          </div>
          <PempekKapalSelam className="float float--a" title="Pempek kapal selam" />
          <PempekLenjer className="float float--b" title="Pempek lenjer" />
          <PempekAdaan className="float float--c" title="Pempek adaan" />
          <CukoBowl className="float float--d" title="Mangkuk cuko" />
        </div>
      </div>
      <WaveDivider className="hero__wave" />
    </section>
  );
}
