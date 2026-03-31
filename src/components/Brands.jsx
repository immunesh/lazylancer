import React from "react";

const brands = ["01", "02", "03", "04"];

const Brands = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:shadow-none"
            >
              <img
                src={`/assets/img/brands/${brand}.svg`}
                alt={`Brand ${brand}`}
                className="h-10 w-auto opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
