import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-dark)', color: 'white', padding: '6rem 0 3rem 0', position: 'relative' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-primary)' }}>
                    Pempek Rp 2.500 yang Bikin Banyak Orang Tersenyum.
                </h2>
                <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '3rem' }}>
                    Kami tidak hanya menjual pempek. Kami membawa rasa, cerita, dan kebahagiaan sederhana untuk semua orang.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                    <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}>Instagram</a>
                    <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}>WhatsApp</a>
                    <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}>Tiktok</a>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.875rem', opacity: 0.6 }}>
                    &copy; {new Date().getFullYear()} Sepeda Pempek Keliling. Hak Cipta Dilindungi Undang-Undang.
                </div>
            </div>

            {/* Sticky WhatsApp CTA */}
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
                <MessageCircle fill="#FFF" size={32} />
            </a>
        </footer>
    );
};

export default Footer;
