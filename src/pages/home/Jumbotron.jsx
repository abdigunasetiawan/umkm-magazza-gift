import React from "react";

const Jumbotron = () => {
  return (
    <section className="mt-[73px] bg-gradient-to-b from-[#FFFFFF] to-[#FAF0F0] to-[54%]">
      <div className="mx-auto flex min-h-96 max-w-screen-xl flex-wrap items-center p-4 lg:justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-cerise-700 text-3xl font-bold lg:text-5xl">
            From your heart <br />
            Through our hands
          </h1>
          <p>Every bouquet is made with love and care</p>
        </div>

        <div className="mx-auto w-xs lg:mx-0 lg:w-lg">
          <img src="/images/hero.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
