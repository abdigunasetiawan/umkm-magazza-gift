import React from "react";

const Logo = () => {
  return (
    <a
      href="/"
      className="text-cerise-700 flex items-center gap-x-3 text-2xl font-bold"
    >
      <img width={64} height={64} src="/logo.png" alt="" />
      <span>Magazza Gift</span>
    </a>
  );
};

export default Logo;
