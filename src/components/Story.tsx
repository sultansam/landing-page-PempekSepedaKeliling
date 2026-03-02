import React from 'react';

const Story: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto', gap: '2rem' }}>
                    <div>
                        <h2 className="text-dark" style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                            Cerita di Balik Sepeda Ini
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-secondary)', margin: '0 auto', borderRadius: '2px' }}></div>
                    </div>

                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-800)', lineHeight: 1.8 }}>
                        Awalnya hanya sepeda sederhana yang berkeliling dari gang ke gang. Dengan resep turun-temurun dan ikan pilihan, kami ingin membuktikan bahwa usaha kecil bisa punya rasa besar.
                    </p>

                    <div style={{ padding: '2rem', backgroundColor: '#FFF9EB', borderRadius: '16px', border: '1px solid #FFE4B5', width: '100%' }}>
                        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--color-secondary)' }}>
                            "Kami percaya satu hal: Makanan enak bisa menyatukan keluarga, teman, dan tetangga."
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', width: '100%', marginTop: '2rem' }}>
                        {[
                            { title: 'Rp 2.500', subtitle: 'Harga bersahabat' },
                            { title: 'Besar', subtitle: 'Ukuran bikin puas' },
                            { title: 'Cuko Khas', subtitle: 'Bikin ketagihan' },
                            { title: 'Fresh', subtitle: 'Dibuat setiap hari' }
                        ].map((highlight, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--color-light)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 className="text-primary" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{highlight.title}</h3>
                                <p style={{ color: 'var(--color-gray-500)', fontWeight: 500 }}>{highlight.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
