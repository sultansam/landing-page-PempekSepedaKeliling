import React from 'react';
import pempekImg from '../assets/pempek_kapal_selam_1772382718677.png';

const Products: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#FFFDF9' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-dark" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Kenapa Banyak yang Balik Lagi?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                        Karena ukurannya bikin puas, rasanya bikin ketagihan, dan harganya gak bikin mikir dua kali.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div className="animate-fade-in" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                        <img
                            src={pempekImg}
                            alt="Pempek Kapal Selam Besar dan Menggugah Selera"
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <p className="text-secondary" style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                Menu Andalan
                            </p>
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Mulai dari <span className="text-primary">Rp 2.500</span></h3>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-800)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Nikmati berbagai macam pilihan pempek: Kapal Selam, Lenjer, Adaan, dan Kulit. Digoreng garing, disajikan hangat dengan cuko pekat asli Palembang.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                                {['Kapal Selam', 'Lenjer', 'Adaan', 'Kulit'].map((item) => (
                                    <span key={item} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-gray-100)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-light)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0 12px 12px 0' }}>
                            <p style={{ fontSize: '1.125rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--color-dark)' }}>
                                "Kadang yang sederhana justru paling bikin bahagia."
                            </p>
                        </div>

                        <div>
                            <button className="btn btn-primary" style={{ width: 'fit-content' }}>
                                Lihat Menu Lengkap
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
