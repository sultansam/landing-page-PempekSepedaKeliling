import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    { name: 'Ibu Arisan', role: 'Kebayoran Lama', text: 'Tamu-tamu arisan pada kaget karena pempeknya besar banget tapi rasanya beneran kerasa ikan sungguhan. Cukonya juga pas banget pedes manisnya!' },
    { name: 'Mas Pengantin', role: 'Wedding Event', text: 'Awalnya ragu pesan sepeda keliling buat nikahan, ternyata booth pempek ini yang paling rame dan pertama habis. Tamu pada suka banget sama idenya.' },
    { name: 'Pak Rudi (Reseller)', role: 'Agen Komplek', text: 'Alhamdulillah jualan ini di depan sekolah SD laku keras. Modal kecil muter cepat, sepedanya juga gampang dikenalin pakai warna kuning merah.' },
    { name: 'Adit', role: 'Siswa SMA', text: 'Jajan setiap pulang sekolah, cuma modal 10 ribu udah dapet 4 biji + cukonya enak banget diminum. Gak ada obat!' }
];

const Testimonials: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#FFFDF9' }}>
            <div className="container">
                <h2 className="text-dark text-center" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem' }}>
                    Cerita Mereka yang Sudah Coba
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((testi, idx) => (
                        <div key={idx} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-gray-100)' }}>
                            <div style={{ display: 'flex', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>
                            <p style={{ color: 'var(--color-gray-800)', fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                "{testi.text}"
                            </p>
                            <div>
                                <p style={{ fontWeight: 800, color: 'var(--color-dark)' }}>{testi.name}</p>
                                <p style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem' }}>{testi.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
