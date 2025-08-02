import FadeSection from "../components/FadeSection";

const Home = () => {
    return (
        <div>
            {/* Section 1: Hero */}
            <FadeSection fullScreen>
                <section className="min-h-screen px-6 py-24 bg-ice text-white flex items-center" data-aos="fade-up">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <div className="space-y-6 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-drab leading-tight">
                                Jelajahi Gaya Hidup Unikmu bersama <br />
                                <span className="text-rust">Forya</span>
                            </h1>

                            <p className="text-copy15 text-slate max-w-lg">
                                Dari <span className="font-semibold text-rust">fashion edgy</span> hingga
                                <span className="font-semibold text-rust"> furniture handmade</span>, Forya hadir
                                untuk kamu yang ingin tampil beda dan berkarakter.
                            </p>

                            <div className="flex justify-center md:justify-start gap-4">
                                <a
                                    href="/products"
                                    className="bg-rust text-white text-copy14 font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#b96445] transition duration-300"
                                >
                                    Jelajahi Produk
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center">
                            <img
                                src="/images/shopping.svg"
                                alt="Belanja di Forya"
                                className="w-full max-w-[500px] md:max-w-[600px]"
                            />
                        </div>
                    </div>
                </section>
            </FadeSection>



            {/* Section 2: Kategori */}
            <FadeSection fullScreen>
                <section className="min-h-screen px-6 py-24 bg-slate text-white" data-aos="fade-up">
                    <div className="max-w-6xl mx-auto text-center space-y-6">
                        <h3 className="text-heading2 font-heading">Kategori Unggulan</h3>
                        <p className="text-copy15 text-slate-200 max-w-2xl mx-auto">
                            Temukan berbagai produk menarik dari kategori favorit kami.
                            Semuanya dikurasi khusus untuk kamu yang ingin tampil beda.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
                            {[
                                { name: "Fashion", image: "/images/Fashion.svg" },
                                { name: "Furniture", image: "/images/Furniture.svg" },
                                { name: "Make Up", image: "/images/Makeup.svg" },
                                { name: "Parfume", image: "/images/Parfume.svg" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white text-onyx p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.05] hover:bg-[#f5f5f5] transition-all duration-300 ease-in-out group"
                                    data-aos="zoom-in"
                                >
                                    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-drab group-hover:border-rust transition">
                                        <img
                                            src={item.image}
                                            alt={`Ilustrasi ${item.name}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <p className="text-lg font-semibold group-hover:text-rust">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeSection>


            {/* Section 3: Testimoni */}
            <FadeSection fullScreen>
                <section className="min-h-screen px-6 py-24 bg-rust text-white" data-aos="fade-up">
                    <div className="max-w-5xl mx-auto text-center space-y-6">
                        <h3 className="text-heading2 font-heading">Apa Kata Mereka?</h3>
                        <p className="text-copy15 text-orange-100 max-w-xl mx-auto">
                            Simak pengalaman para pengguna yang sudah mencoba produk kami.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mt-10">
                            {[
                                {
                                    quote: "Forya punya banyak produk yang unik banget! Belanja jadi lebih seru.",
                                    name: "Liana, Mahasiswa",
                                    avatar: "/images/liana.png", // Ganti ke avatar yang kamu punya
                                },
                                {
                                    quote: "Aku suka tampil beda, dan semua produk di sini itu original. Keren banget!",
                                    name: "Rio, Freelancer",
                                    avatar: "/images/rio.png",
                                },
                            ].map((testi, i) => (
                                <div
                                    key={i}
                                    className="bg-white text-onyx p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    <div className="absolute -top-6 left-6">
                                        <img
                                            src={testi.avatar}
                                            alt={testi.name}
                                            className="w-12 h-12 rounded-full border-2 border-rust shadow"
                                        />
                                    </div>
                                    <p className="text-copy15 italic pl-16">“{testi.quote}”</p>
                                    <p className="text-cardtitle font-semibold mt-4 text-right">— {testi.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeSection>
        </div>
    );
};

export default Home;