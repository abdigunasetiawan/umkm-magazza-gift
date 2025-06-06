import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./BestSeller.css";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.popularProducts;
        setProducts(allProducts); // Tampilkan semua, tidak slice
      })
      .catch((err) => console.error("Gagal memuat data:", err));
  }, []);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <div className="mx-auto mt-4 max-w-screen-xl p-4">
      <div className="text-center">
        <h1 className="text-cerise-500 text-3xl font-bold">Best Seller</h1>
        <p className="mt-2 dark:text-white">Limited availability. Order now!</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        slidesPerView={2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-8"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link
              to={`/product/${slugify(product.nama)}`}
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center">
        <Link
          to={`/best-seller`}
          className="mt-8 inline-block border px-12 py-2.5 transition-colors hover:bg-black hover:text-white dark:text-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
