import React from 'react';
import CartoonCard from './CartoonCardComp';

const CartoonListComp = async ({ cartoons, genreId, searchCartoon }) => {

  if (searchCartoon?.length) {
    return (
      <section className="grid mt-10 grid-cols-3 gap-10 px-10">
        {searchCartoon.map((item) => (
          <CartoonCard key={item.id} cartoon={item} />
        ))}
      </section>
    );
  }

  const filteredCartoons = genreId
    ? cartoons.filter((item) => item.ct_genre_id === parseInt(genreId))
    : cartoons;

  return (
    <section className="grid mt-10 grid-cols-3 gap-10 px-10">
      {filteredCartoons.map((item) => (
        <CartoonCard key={item.id} cartoon={item} />
      ))}
      {/* <CartoonCard filteredCartoons={filteredCartoons} /> */}
    </section>
  );
};

export default CartoonListComp;
