import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';
import heroImg from '../assets/hero_gerobak_1772382699306.png'; // Make sure the bundler resolves this

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: -1,
        }}
      />

      <div className="container animate-fade-in">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--color-light)' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Dari Sepeda Keliling, <br />
            <span className="text-primary">Jadi Favorit Banyak Keluarga.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Pempek besar, enak, harga cuma <span className="text-primary" style={{ fontWeight: 700 }}>Rp 2.500</span>. Karena makan enak tidak harus mahal.
          </p>
          <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
            Setiap hari kami berkeliling membawa satu tujuan sederhana — menghadirkan pempek enak dengan harga yang semua orang bisa nikmati. Dari anak sekolah sampai acara pernikahan.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">
              <Utensils size={20} />
              Pesan Sekarang
            </button>
            <button className="btn btn-secondary">
              Booking Party Pempek
            </button>
            <button className="btn btn-outline" style={{ color: 'var(--color-light)', borderColor: 'var(--color-light)' }}>
              Jadi Reseller <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
