// Semua teks, harga, dan kontak website ada di sini supaya mudah diubah tanpa menyentuh tampilan.

export const WHATSAPP_NUMBER = "6281779812060";
export const INSTAGRAM_HANDLE = "pempeksepedakeliling";
export const TIKTOK_HANDLE = "pempeksepedakeliling62";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#cerita", label: "Cerita" },
  { href: "#party", label: "Party Pempek" },
  { href: "#reseller", label: "Reseller" },
  { href: "#faq", label: "FAQ" }
];

export const HIGHLIGHTS = [
  { title: "Rp 2.500", text: "Harga bersahabat untuk semua kalangan" },
  { title: "Ukuran besar", text: "Satu biji sudah bikin puas" },
  { title: "Cuko khas", text: "Pedas-manis pekat, bikin ketagihan" },
  { title: "Fresh tiap hari", text: "Dibuat pagi, dijual hari itu juga" }
];

export type MenuItem = { name: string; desc: string; size: "kecil" | "besar" };

export const MENU_PRICES = { kecil: "Rp 2.500", besar: "Rp 14.000" };

export const MENU: MenuItem[] = [
  { name: "Lenjer kecil", desc: "Lonjong padat, kenyal, gurih ikannya terasa.", size: "kecil" },
  { name: "Telor kecil", desc: "Isi telur, favorit anak-anak.", size: "kecil" },
  { name: "Adaan", desc: "Bulat renyah di luar, lembut di dalam.", size: "kecil" },
  { name: "Kulit", desc: "Gurih dan garing, paling cocok dicocol cuko.", size: "kecil" },
  { name: "Tahu", desc: "Tahu isi adonan pempek, lembut dan juicy.", size: "kecil" },
  { name: "Keriting", desc: "Bentuk unik, teksturnya bikin nagih.", size: "kecil" },
  { name: "Kapal selam besar", desc: "Isi telur utuh, porsi mengenyangkan.", size: "besar" },
  { name: "Lenjer besar", desc: "Lenjer jumbo untuk yang lapar berat.", size: "besar" }
];

export const ORDER_STEPS = [
  { title: "Chat WhatsApp", text: "Kirim pesanan atau tanya sepeda terdekat dari lokasimu." },
  { title: "Pilih menu & jumlah", text: "Eceran mulai satu biji, atau paket untuk acara dan reseller." },
  { title: "Pempek datang", text: "Disajikan hangat lengkap dengan cuko khas kami." }
];

export const STORY_POINTS = [
  { title: "Dari gang ke gang", text: "Awalnya satu sepeda sederhana yang berkeliling setiap hari." },
  { title: "Resep turun-temurun", text: "Ikan pilihan dan cuko racikan sendiri, rasa yang tidak berubah." },
  { title: "Untuk semua orang", text: "Harga dijaga tetap terjangkau, dari anak sekolah sampai acara keluarga." }
];

export type PartyPackage = {
  name: string;
  price: string;
  qty: string;
  bikes: string;
  crew: string;
  duration: string;
  popular?: boolean;
};

export const PARTY_PACKAGES: PartyPackage[] = [
  { name: "Paket Seru", price: "Rp 1.600.000", qty: "500 pcs", bikes: "1 sepeda", crew: "1 penjaga", duration: "3 jam" },
  { name: "Paket Meriah", price: "Rp 2.225.000", qty: "750 pcs", bikes: "1 sepeda", crew: "1 penjaga", duration: "3 jam", popular: true },
  { name: "Paket Grand", price: "Rp 3.050.000", qty: "1.000 pcs", bikes: "1 sepeda", crew: "2 penjaga", duration: "3 jam" },
  { name: "Paket Mewah", price: "Rp 5.850.000", qty: "2.000 pcs", bikes: "2 sepeda", crew: "3 penjaga", duration: "3 jam" }
];

export const PARTY_OCCASIONS = ["Arisan", "Ulang tahun", "Pernikahan", "Acara kantor", "Pengajian", "Bazar sekolah"];

export const RESELLER_BENEFITS = [
  { title: "Margin menarik", text: "Harga khusus reseller supaya untungmu maksimal." },
  { title: "Mudah dijual", text: "Cocok di sekolah, kantor, atau komplek perumahan." },
  { title: "Dukungan promosi", text: "Banner dan materi promosi siap pakai untuk jualanmu." },
  { title: "Minimal order rendah", text: "Mulai 200 pcs: risiko kecil, modal cepat berputar." }
];

export const FAQ = [
  { q: "Berapa harga pempeknya?", a: "Pempek kecil Rp 2.500 per biji, pempek besar (kapal selam & lenjer besar) Rp 14.000. Disajikan dengan cuko khas kami." },
  { q: "Bisa pesan untuk acara?", a: "Bisa. Pilih Paket Party (500 sampai 2.000 pcs) dan sepeda pempek kami datang ke lokasi acara selama 3 jam. Sebaiknya booking beberapa hari sebelumnya lewat WhatsApp." },
  { q: "Bagaimana cara jadi reseller?", a: "Chat WhatsApp kami dengan pesan \"mau gabung reseller\". Minimal order 200 pcs, dan kami bantu dengan harga khusus serta materi promosi." },
  { q: "Di mana saya bisa menemukan sepeda pempek?", a: "Sepeda kami berkeliling setiap hari. Kirim lokasimu lewat WhatsApp, nanti kami kabari sepeda terdekat atau atur pengantaran." },
  { q: "Apakah pempeknya dibuat setiap hari?", a: "Ya. Pempek dibuat setiap pagi dan dijual di hari yang sama supaya selalu fresh." }
];
