import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchPage = () => {
  const { keyword } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json");
        let data = await res.json();
        data = data.allProducts;
        console.log(data);

        setProducts(data);

        const keywordLower = keyword.toLowerCase();
        const result = data.filter((item) =>
          item.nama.toLowerCase().includes(keywordLower),
        );

        setFiltered(result);
        setLoading(false);
      } catch (err) {
        console.error("Gagal mengambil produk:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [keyword]);

  if (loading) {
    return <div className="p-8 text-center text-xl">Memuat data...</div>;
  }

  return (
    <div className="mx-auto mt-[73px] flex min-h-[calc(100vh-(73px+89px))] max-w-screen-xl flex-col items-center p-4">
      <div className="text-center">
        <h1 className="text-cerise-500 text-3xl font-bold">
          Search result for {keyword}
        </h1>
      </div>

      <div className="card_container mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {filtered.map((product) => (
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

export default SearchPage;
