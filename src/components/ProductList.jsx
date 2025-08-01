import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const ProductList = () => {
    const [query, setQuery] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const PRODUCTS_PER_PAGE = 15;

    useEffect(() => {
        const fetchAllProducts = async () => {
            const res = await fetch("https://dummyjson.com/products?limit=100");
            const data = await res.json();
            setAllProducts(data.products);
            setFilteredProducts(data.products);
        };
        fetchAllProducts();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = query.trim().toLowerCase();

        const results = keyword
            ? allProducts.filter((product) =>
                product.title.toLowerCase().includes(keyword)
            )
            : allProducts;

        setFilteredProducts(results);
        setCurrentPage(1); // reset ke halaman pertama saat search
    };

    // Pagination logic
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSearch}
                className="mb-6 flex items-stretch gap-3 flex-wrap sm:flex-nowrap"
            >
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari produk..."
                    className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-drab"
                />
                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-drab text-snow text-copy14 font-medium px-6 py-3 rounded-xl shadow hover:bg-rust transition duration-300"
                >
                    <MagnifyingGlassIcon className="h-5 w-5 text-snow" />
                </button>
            </form>

            {currentProducts.length === 0 ? (
                <p className="text-center text-gray-500">Tidak ada produk ditemukan.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-white border rounded-xl shadow hover:shadow-md transition p-4 flex flex-col items-center">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-48 object-contain mb-4"
                            />
                            <h3 className="text-md font-semibold text-center">{product.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-10 flex justify-center gap-2 flex-wrap">
                    <button
                        onClick={() => changePage(currentPage - 1)}
                        className="px-4 py-2 rounded border text-drab hover:bg-drab hover:text-white transition"
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, idx) => {
                        const page = idx + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => changePage(page)}
                                className={`px-4 py-2 rounded border ${page === currentPage
                                        ? "bg-drab text-white"
                                        : "text-drab hover:bg-drab hover:text-white"
                                    } transition`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button
                        onClick={() => changePage(currentPage + 1)}
                        className="px-4 py-2 rounded border text-drab hover:bg-drab hover:text-white transition"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductList;
