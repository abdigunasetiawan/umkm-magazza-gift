import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const { namaProduct } = useParams();
  const [product, setProduct] = useState(null);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.allProducts;
        const foundProduct = allProducts.find(
          (p) => slugify(p.nama) === namaProduct,
        );
        setProduct(foundProduct);
      })
      .catch((err) => console.error("Gagal memuat data:", err));
  }, [namaProduct]);

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center text-xl text-gray-800 dark:text-gray-100">
        Memuat detail produk...
      </div>
    );
  }

  return (
    <div className="mx-auto mt-[73px] min-h-[calc(100dvh-73px)] max-w-screen-lg p-4 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <img
          src={`/images/products/${product.gambar}`}
          alt={product.nama}
          className="rounded-lg shadow-lg dark:shadow-gray-800"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {product.nama}
          </h1>
          <span className="text-sm text-gray-500 capitalize dark:text-gray-400">
            {product.tipe}
          </span>
          <p className="text-2xl font-semibold text-pink-600 dark:text-pink-400">
            Rp {product.harga.toLocaleString()}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {product.deskripsi}
          </p>

          <div>
            <h3 className="mb-1 font-medium text-gray-600 dark:text-gray-400">
              Tag:
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tag.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded bg-pink-100 px-3 py-1 text-sm text-pink-700 dark:bg-pink-900 dark:text-pink-100"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 
          <div>
            <h3 className="mb-1 font-medium text-gray-600 dark:text-gray-400">Warna:</h3>
            <div className="flex items-center gap-2">
              {product.warna.map((warna, idx) => (
                <span
                  key={idx}
                  className="h-6 w-6 rounded-full border dark:border-gray-600"
                  style={{ backgroundColor: warna }}
                />
              ))}
            </div>
          </div> */}

          <div className="flex flex-wrap gap-3">
            <a
              className="bg-cerise-500 inline-flex gap-3 rounded-lg px-4 py-4 text-white transition hover:opacity-90"
              href={product.link_instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M16.5 7.5v.01" />
              </svg>

              <span>Lihat di Instagram</span>
            </a>
            <a
              className="inline-flex gap-3 rounded-lg bg-green-500 px-4 py-4 text-white transition hover:opacity-90"
              href={`https://wa.me/6285358029570?text=Halo%20Magazza%20Gift,%20saya%20ingin%20beli%20${product.nama}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>

              <span>Pesan via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
