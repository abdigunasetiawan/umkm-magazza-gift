import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryProductPage = () => {
  const { namaCategory } = useParams();
  const [products, setProducts] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        let filteredProducts = [];

        if (namaCategory === "artificial-flower") {
          filteredProducts = data.allProducts.filter(
            (product) => product.tipe === "bouqet bunga artificial",
          );
        } else if (namaCategory === "fresh-flower") {
          filteredProducts = data.allProducts.filter(
            (product) => product.tipe === "bouqet bunga asli",
          );
        } else if (namaCategory === "money-bouquet") {
          filteredProducts = data.allProducts.filter(
            (product) => product.tipe === "bouqet uang",
          );
        } else if (namaCategory === "chocolate-bouquet") {
          filteredProducts = data.allProducts.filter(
            (product) => product.tipe === "bouqet coklat",
          );
        } else {
          setNotFound(true);
          return;
        }

        setProducts(filteredProducts);
        setNotFound(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data:", err);
        setNotFound(true);
      });
  }, [namaCategory]);

  if (notFound) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center text-gray-800 dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">Kategori tidak ditemukan</h1>
        <p className="mb-6">Kategori "{namaCategory}" tidak tersedia.</p>
        <Link
          to="/"
          className="bg-cerise-600 hover:bg-cerise-700 rounded px-4 py-2 text-white transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  if (!products) {
    return (
      <div className="flex h-screen items-center justify-center text-xl text-gray-800 dark:text-gray-100">
        Memuat produk...
      </div>
    );
  }

  return (
    <div className="mx-auto mt-[73px] flex min-h-[calc(100vh-(73px+89px))] max-w-screen-xl flex-col items-center p-4">
      <div className="text-center">
        <h1 className="text-cerise-500 text-3xl font-bold capitalize">
          {namaCategory.replace("-", " ")}
        </h1>
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

export default CategoryProductPage;
