import { useParams } from "react-router-dom";

const Detail = () => {
  const { namaProduct } = useParams();

  return (
    <div className="flex h-screen flex-col items-center justify-center text-3xl">
      <h1>Ini halaman detail produk</h1>
      <h1>Detail Produk: {namaProduct}</h1>
    </div>
  );
};

export default Detail;
