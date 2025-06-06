import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.allProducts;
        const latest = allProducts.slice(-12);
        setProducts(latest);
      })
      .catch((err) => console.error("Gagal memuat data:", err));
  }, []);

  // Fungsi untuk membuat slug dari nama produk
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <div className="mx-auto mt-4 flex max-w-screen-xl flex-col items-center p-4">
      <div className="text-center">
        <h1 className="text-cerise-500 text-3xl font-bold">All Products</h1>
      </div>

      <div className="card_container mt-8 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
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
        to={`/all-products  `}
        className="mt-8 inline-block cursor-pointer border px-12 py-2.5 transition-colors duration-150 hover:bg-black hover:text-white hover:transition-colors hover:duration-150 dark:text-white"
      >
        View All
      </Link>
    </div>
  );
};

export default AllProduct;
