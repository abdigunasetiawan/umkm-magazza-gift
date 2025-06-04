import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode }) => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains("dark");
    setIsDark(darkMode);
  }, []);

  const handleToggle = () => {
    toggleDarkMode();
    setIsDark((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 z-20 mb-16 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
          <span className="text-ceri text-cerise-600 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Magazza Gift
          </span>
        </a>

        {/* Navigasi Tengah */}
        <div className="hidden w-full justify-center lg:order-1 lg:flex lg:w-auto">
          <ul className="flex space-x-8 font-medium rtl:space-x-reverse">
            <li>
              <Link
                to={`/category/artificial-flower`}
                className="hover:text-cerise-700 dark:hover:text-cerise-500 text-gray-900 hover:underline hover:underline-offset-8 dark:text-white"
              >
                Artificial Flower
              </Link>
            </li>
            <li>
              <Link
                to={`/category/fresh-flower`}
                className="hover:text-cerise-700 dark:hover:text-cerise-500 text-gray-900 hover:underline hover:underline-offset-8 dark:text-white"
              >
                Fresh Flower
              </Link>
            </li>
            <li>
              <Link
                to={`/category/teddy-bouquet`}
                className="hover:text-cerise-700 dark:hover:text-cerise-500 text-gray-900 hover:underline hover:underline-offset-8 dark:text-white"
              >
                Teddy Bouquet
              </Link>
            </li>
            <li>
              <Link
                to={`category/chocolate-bouquet`}
                className="hover:text-cerise-700 dark:hover:text-cerise-500 text-gray-900 hover:underline hover:underline-offset-8 dark:text-white"
              >
                Chocolate Bouquet
              </Link>
            </li>
          </ul>
        </div>

        {/* Kanan: Dark mode, Search input, Hamburger */}
        <div className="flex items-center space-x-3 lg:order-2 rtl:space-x-reverse">
          {/* Dark Mode Toggle */}
          <button
            onClick={handleToggle}
            className="h-10 w-10 rounded-lg bg-gray-100 p-2 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            title="Toggle Dark Mode"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M3 12h1m8-9v1m8 8h1m-9 8v1m-6.4-15.4l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            )}
          </button>

          {/* Search Input - tampil hanya di layar besar */}
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="focus:border-cerise-500 focus:ring-cerise-500 dark:focus:border-cerise-500 dark:focus:ring-cerise-500 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
            title="Toggle Menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu navigasi mobile */}
      {isOpen && (
        <div
          className="border-t border-gray-200 bg-gray-50 lg:hidden dark:border-gray-700 dark:bg-gray-800"
          id="navbar-sticky"
        >
          <ul className="flex flex-col space-y-2 p-4 font-medium">
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Artificial Flower
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Fresh Flower
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Teddy Bouquets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Chocolate Bouquets
              </a>
            </li>
            {/* Input Search pada menu mobile */}
            <li>
              <input
                type="text"
                placeholder="Search..."
                className="focus:border-cerise-500 focus:ring-cerise-500 dark:focus:border-cerise-500 dark:focus:ring-cerise-500 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
