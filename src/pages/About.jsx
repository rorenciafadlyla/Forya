import { Mail, Phone, Instagram } from "lucide-react";
import FadeSection from "../components/FadeSection";

const About = () => {
    return (
        <div className="px-6 pt-24 pb-5 bg-ice text-onyx space-y-20">
            {/* Tentang & Kontak */}
            <FadeSection>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10">
                        <div className="text-left">
                            <h2 className="text-heading2 font-heading text-drab mb-4">Tentang Forya</h2>
                            <p className="text-copy15 font-body text-slate">
                                Forya adalah aplikasi katalog produk yang dibuat untuk menampilkan koleksi produk menarik, lengkap dengan fitur pencarian dan kategori yang memudahkan pengguna dalam eksplorasi.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-section font-heading text-drab">Hubungi Kami</h3>
                            <div className="flex flex-col gap-3 text-copy15 text-slate">
                                <div className="flex items-center gap-3">
                                    <Phone className="text-drab" size={20} />
                                    <span>+62 812 3456 7890</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="text-drab" size={20} />
                                    <span>minilemon@mail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Instagram className="text-drab" size={20} />
                                    <span>@minilemon.id</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src="/images/Shop.svg" alt="Ilustrasi Belanja" className="w-full max-w-sm" />
                    </div>
                </div>
            </FadeSection>

            {/* Keunggulan */}
            <FadeSection>
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <h3 className="text-section font-heading text-rust">Kenapa Pilih Forya?</h3>
                    <div className="grid sm:grid-cols-3 gap-6 text-left text-copy15">
                        <div className="bg-ice border border-drab p-5 rounded-xl shadow">
                            <h4 className="text-drab font-bold mb-2">Original & Unik</h4>
                            <p>Semua produk yang ditampilkan adalah hasil kurasi brand lokal pilihan.</p>
                        </div>
                        <div className="bg-ice border border-drab p-5 rounded-xl shadow">
                            <h4 className="text-drab font-bold mb-2">Navigasi Mudah</h4>
                            <p>Desain sederhana dengan pencarian pintar untuk pengalaman maksimal.</p>
                        </div>
                        <div className="bg-ice border border-drab p-5 rounded-xl shadow">
                            <h4 className="text-drab font-bold mb-2">Support Lokal</h4>
                            <p>Kamu ikut mendukung pertumbuhan UMKM kreatif Indonesia.</p>
                        </div>
                    </div>
                </div>
            </FadeSection>

            {/* Lokasi */}
            <FadeSection>
                <div className="max-w-5xl mx-auto space-y-4">
                    <h3 className="text-section font-heading text-drab text-center">Lokasi Kami</h3>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.252328660043!2d112.7321312152192!3d-7.215328894774814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb84cefae4e7%3A0x7351b1d648d2a3b4!2sTunjungan%20Plaza%20Surabaya!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </FadeSection>
        </div>
    );
};

export default About;
