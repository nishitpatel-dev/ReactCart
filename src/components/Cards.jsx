import React from "react";

const Cards = ({ name, id, price, imgSrc, handler }) => {
  return (
    <>
      <div className="productCart">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button
          onClick={() => handler({ name, id, price, quantity: 1, imgSrc })}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Cards;
