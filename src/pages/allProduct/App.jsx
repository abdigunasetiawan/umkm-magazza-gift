import React, { useEffect, useState } from "react";
import BestSeller from "../home/BestSeller";
import { Link } from "react-router-dom";

const AllProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.allProducts;
        setProducts(allProducts);
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
    <div className="mx-auto mt-[73px] flex max-w-screen-xl flex-col items-center p-4">
      <div className="text-center">
        <h1 className="text-cerise-500 text-3xl font-bold">All Products</h1>
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
    </div>
  );
};

export default AllProductPage;
