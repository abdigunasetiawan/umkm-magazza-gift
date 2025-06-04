import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <-- Tambahkan ini

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.popularProducts;
        const latest = allProducts.slice(-4);
        setProducts(latest);
      })
      .catch((err) => console.error("Gagal memuat data:", err));
  }, []);

  // Fungsi untuk menjadikan nama produk URL-friendly
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <div className="mx-auto mt-4 flex max-w-screen-xl flex-col items-center p-4">
      <div className="text-center">
        <h1 className="text-cerise-500 text-3xl font-bold">Best Seller</h1>
        <p className="mt-2 dark:text-white">Limited availability. Order now!</p>
      </div>

      <div className="card_container mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((product) => (
          <Link
            to={`/product/${slugify(product.nama)}`}
            key={product.id}
            className="card cursor-pointer transition hover:scale-[1.02]"
          >
            <div className="img h-48 lg:h-80">
              <img
                className="h-full w-full object-cover"
                src={`/images/products/${product.gambar}`}
                alt={product.nama}
              />
            </div>
            <div className="deskripsi mt-2">
              <h3 className="font-bold dark:text-white">{product.nama}</h3>
              <p className="dark:text-white/80">
                Rp {product.harga.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to={`/best-seller`}
        className="mt-8 inline-block cursor-pointer border px-12 py-2.5 dark:text-white"
      >
        View All
      </Link>
    </div>
  );
};

export default BestSeller;
