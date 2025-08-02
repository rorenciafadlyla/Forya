import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import FadeSection from "./FadeSection";

const ProductList = () => {
    const [query, setQuery] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const [sortOption, setSortOption] = useState("");

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

        setFilteredProducts(applySort(results, sortOption));
        setCurrentPage(1);
    };

    const applySort = (data, sort) => {
        const sorted = [...data];
        switch (sort) {
            case "termurah":
                return sorted.sort((a, b) => a.price - b.price);
            case "termahal":
                return sorted.sort((a, b) => b.price - a.price);
            case "terbaru":
                return sorted.sort((a, b) => b.id - a.id);
            default:
                return sorted;
        }
    };

    const handleSort = (option) => {
        setSortOption(option);
        const sorted = applySort(filteredProducts, option);
        setFilteredProducts(sorted);
        setShowFilter(false);
        setCurrentPage(1);
    };

    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <FadeSection>
            <div>
                {/* Form Search + Filter */}
                <form
                    onSubmit={handleSearch}
                    className="mb-6 flex items-stretch gap-3 flex-wrap sm:flex-nowrap relative"
                >
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Cari produk..."
                        className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-drab"
                    />
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="w-12 h-12 rounded-xl bg-drab text-snow shadow hover:bg-rust transition flex items-center justify-center"
                        >
                            <MagnifyingGlassIcon className="h-5 w-5 text-snow" />
                        </button>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowFilter((prev) => !prev)}
                                className="flex items-center justify-center bg-white border border-drab text-drab px-4 py-3 rounded-xl shadow hover:bg-drab hover:text-white transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                </svg>
                            </button>

                            {showFilter && (
                                <div className="absolute right-0 z-10 mt-2 bg-white border rounded-lg shadow w-44 text-left">
                                    <button
                                        onClick={() => handleSort("termurah")}
                                        className="w-full px-4 py-2 hover:bg-gray-100 text-sm"
                                    >
                                        Harga Termurah
                                    </button>
                                    <button
                                        onClick={() => handleSort("termahal")}
                                        className="w-full px-4 py-2 hover:bg-gray-100 text-sm"
                                    >
                                        Harga Termahal
                                    </button>
                                    <button
                                        onClick={() => handleSort("terbaru")}
                                        className="w-full px-4 py-2 hover:bg-gray-100 text-sm"
                                    >
                                        Produk Terbaru
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </form>

                {/* List Produk */}
                {currentProducts.length === 0 ? (
                    <p className="text-center text-gray-500">Tidak ada produk ditemukan.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {currentProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white border rounded-xl shadow group hover:shadow-xl transition p-4 flex flex-col items-center"
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-48 object-contain mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                                <h3 className="text-md font-semibold text-center">
                                    {product.title}
                                </h3>
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
        </FadeSection>

    );
};

export default ProductList;
