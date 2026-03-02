import React from 'react';
import { TrendingUp, Users, Store, HeartHandshake } from 'lucide-react';

const Reseller: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Bukan Cuma Jualan Pempek, Tapi Bagi Rezeki
                    </h2>
                    <p style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.9, lineHeight: 1.6 }}>
                        Kami membuka kesempatan untuk siapa saja yang ingin menambah penghasilan. Banyak mitra kami yang mulai dari kecil, sekarang bisa punya penghasilan tambahan setiap hari.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {[
                        { icon: <TrendingUp size={32} className="text-secondary" />, title: 'Margin Menarik', desc: 'Harga khusus reseller yang memberikan keuntungan maksimal untuk Anda.' },
                        { icon: <Store size={32} className="text-secondary" />, title: 'Mudah Dijual', desc: 'Cocok untuk sekolah, kantor, atau jualan di komplek perumahan.' },
                        { icon: <Users size={32} className="text-secondary" />, title: 'Support Promosi', desc: 'Kami sediakan banner dan materi promosi untuk membantu jualan Anda.' },
                        { icon: <HeartHandshake size={32} className="text-secondary" />, title: 'Min. Order Rendah', desc: 'Mulai dengan minimal order 200 pcs, risiko kecil, putaran modal cepat.' }
                    ].map((benefit, idx) => (
                        <div key={idx} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FFF5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {benefit.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{benefit.title}</h3>
                            <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.5 }}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button className="btn btn-secondary" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
                        Gabung Jadi Reseller Sekarang
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Reseller;
