import React, { useEffect, useState } from "react";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.popularProducts;
        const latest = allProducts.slice(-4); // Ambil 4 data terakhir
        setProducts(latest);
      })
      .catch((err) => console.error("Gagal memuat data:", err));
  }, []);

  return (
    <div className="mx-auto mt-4 max-w-screen-xl p-4">
      <div className="text-center">
        <h1 className="text-cerise-500 text-3xl font-bold">Best Seller</h1>
        <p className="mt-2">Limited availability. Order now!</p>
      </div>

      <div className="card_container mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="img h-48 lg:h-80">
              <img
                className="h-full w-full object-cover"
                src={`/images/products/${product.gambar}`}
                alt={product.nama}
              />
            </div>
            <div className="deskripsi mt-2">
              <h3 className="font-bold">{product.nama}</h3>
              <p>Rp {product.harga.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mx-auto mt-8 block border px-12 py-4">View All</button>
    </div>
  );
};

export default BestSeller;
