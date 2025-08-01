import ProductList from "../components/ProductList";

const Products = () => {
    return (
        <section className="px-6 py-6 bg-ice text-onyx space-y-24">
            <div className="p-6">
                <h2 className="text-heading2 font-heading text-drab mb-4 text-center">Daftar Produk</h2>
                <ProductList />
            </div>
        </section>
    );
};

export default Products;
