import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { keyword } = useParams();

  return (
    <div className="flex h-screen items-center justify-center text-3xl">
      Hasil pencarian untuk: <span className="ml-2 font-bold">{keyword}</span>
    </div>
  );
};

export default SearchPage;
