const Home = () => {
    return (
        <section className="px-6 py-16 bg-ice text-onyx space-y-24">
            {/* Section: Hero */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Teks Selamat Datang */}
                <div className="text-center md:text-left">
                    <h2 className="text-heading1 font-heading text-drab mb-4">
                        Selamat Datang di <span className="text-rust">MiniLemon</span>
                    </h2>
                    <p className="text-copy15 font-body text-slate mb-6">
                        Temukan produk unik, bergaya, dan penuh karakter hanya di MiniLemon —
                        tempat terbaik untuk eksplorasi belanja kreatif dari berbagai kategori.
                    </p>
                    <a
                        href="/products"
                        className="inline-block bg-drab text-snow text-copy14 font-medium px-6 py-3 rounded-xl shadow hover:bg-rust transition duration-300"
                    >
                        Jelajahi Produk
                    </a>
                </div>

                {/* Gambar Ilustrasi */}
                <div className="flex justify-center">
                    <img
                        src="/images/shopping.svg"
                        alt="Ilustrasi belanja"
                        className="w-full max-w-md"
                    />
                </div>
            </div>

            {/* Section: Kategori Unggulan */}
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-heading2 font-heading text-drab mb-10">Kategori Unggulan</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                        { name: "Fashion", image: "/images/Fashion.svg" },
                        { name: "Furniture", image: "/images/Furniture.svg" },
                        { name: "Make Up", image: "/images/Makeup.svg" },
                        { name: "Parfume", image: "/images/Parfume.svg" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={`Ilustrasi ${item.name}`}
                                className="mx-auto mb-4 rounded-full w-24 h-24 object-contain"
                            />
                            <p className="text-cardtitle font-semibold text-slate">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section: Testimoni */}
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-heading2 font-heading text-drab mb-10">Apa Kata Mereka?</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                    {[
                        {
                            quote: "MiniLemon punya banyak produk yang unik banget! Belanja jadi lebih seru.",
                            name: "Liana, Mahasiswa",
                        },
                        {
                            quote: "Aku suka tampil beda, dan semua produk di sini itu original. Keren banget!",
                            name: "Rio, Freelancer",
                        },
                    ].map((testi, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
                        >
                            <p className="text-copy14 text-slate mb-3 italic">“{testi.quote}”</p>
                            <p className="text-cardtitle font-bold text-onyx">— {testi.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
