import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center dark:text-white">
      <h1 className="text-cerise-800 text-5xl font-bold">404</h1>
      <p className="mt-2 text-xl">Halaman tidak ditemukan</p>
      <Link
        to="/"
        className="bg-cerise-500 hover:bg-cerise-600 mt-4 inline-block rounded px-6 py-2 font-semibold text-white transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
