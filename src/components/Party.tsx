import React from 'react';
import { PartyPopper } from 'lucide-react';
import partyImg from '../assets/pempek_party_1772382737880.png';

const pricingTiers = [
    { name: 'Paket Seru', price: 'Rp 1.600.000', qty: '500 pcs', sepeda: '1 sepeda', penjaga: '1 penjaga', duration: '3 jam', icon: '🎉' },
    { name: 'Paket Meriah', price: 'Rp 2.225.000', qty: '750 pcs', sepeda: '1 sepeda', penjaga: '1 penjaga', duration: '3 jam', icon: '🎊', popular: true },
    { name: 'Paket Grand', price: 'Rp 3.050.000', qty: '1.000 pcs', sepeda: '1 sepeda', penjaga: '2 penjaga', duration: '3 jam', icon: '🏆' },
    { name: 'Paket Mewah', price: 'Rp 5.850.000', qty: '2.000 pcs', sepeda: '2 sepeda', penjaga: '3 penjaga', duration: '3 jam', icon: '💎' }
];

const Party: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="text-dark" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <PartyPopper className="text-secondary" size={40} />
                        Bikin Acara Makin Seru dengan Party Pempek
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', lineHeight: 1.6 }}>
                        Dari arisan sederhana sampai pesta pernikahan, sepeda pempek kami siap jadi pusat perhatian dan bikin tamu tersenyum bahagia.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem', paddingTop: '2rem' }}>
                    {pricingTiers.map((tier, idx) => (
                        <div key={idx} style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: '2.5rem 1.5rem',
                            boxShadow: tier.popular ? 'var(--shadow-glow)' : 'var(--shadow-md)',
                            border: tier.popular ? '2px solid var(--color-primary)' : '1px solid var(--color-gray-200)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            transform: tier.popular ? 'scale(1.05)' : 'none',
                            zIndex: tier.popular ? 1 : 0
                        }}>
                            {tier.popular && (
                                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--color-primary)', color: 'var(--color-dark)', padding: '0.25rem 1rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                    Paling Laris
                                </div>
                            )}
                            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>{tier.icon}</div>
                            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>{tier.name}</h3>
                            <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '2rem' }}>
                                {tier.price}
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-gray-800)' }}>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-gray-100)', paddingBottom: '0.5rem' }}><span>Jumlah</span> <strong>{tier.qty}</strong></li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-gray-100)', paddingBottom: '0.5rem' }}><span>Fasilitas</span> <strong>{tier.gerobak}</strong></li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-gray-100)', paddingBottom: '0.5rem' }}><span>Pelayanan</span> <strong>{tier.penjaga}</strong></li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-gray-100)', paddingBottom: '0.5rem' }}><span>Durasi</span> <strong>{tier.duration}</strong></li>
                            </ul>

                            <a href="https://wa.me/6281779812060?text=Halo%20saya%20tertarik%20dengan%20paket%20party%20pempek" target="_blank" rel="noopener noreferrer" className={`btn mt-8 w-full ${tier.popular ? 'btn-primary' : 'btn-outline'}`} style={{ marginTop: '2rem', width: '100%', boxSizing: 'border-box' }}>
                                Pilih Paket
                            </a>
                        </div>
                    ))}
                </div>

                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <img src={partyImg} alt="Keseruan Party Pempek" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="https://wa.me/6281779812060?text=Halo%20saya%20mau%20booking%20party%20pempek" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem', display: 'inline-flex' }}>
                        Booking Party Sekarang
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Party;
