import React from "react";

const NotDeskTop = () => {
  return (
    <section className="hidden  bg-[var(--primary)] fixed left-0 top-0 h-full w-full z-50 md:flex items-center justify-center text-white flex-col text-2xl text-center">
      <h1 className="mb-4">Opps!</h1>
      <h2>Esta página no está dispoible en computadora</h2>
    </section>
  );
};

export default NotDeskTop;
