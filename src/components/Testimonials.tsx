import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { FAQ, TESTIMONIALS } from "../content";

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimoni">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Kata mereka</span>
          <h2 id="testimoni">Cerita mereka yang sudah coba</h2>
        </div>
        <ul className="testimonials">
          {TESTIMONIALS.map((item) => (
            <li className="testimonial reveal" key={item.name}>
              <div className="testimonial__stars" aria-label="5 dari 5 bintang">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
              </div>
              <p>“{item.text}”</p>
              <div className="testimonial__who">
                <span className="testimonial__avatar" aria-hidden="true">{item.name.charAt(0)}</span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
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
