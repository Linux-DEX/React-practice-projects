import { useState } from "react";

const PRICE_PER_ITEM = 5;

const Card = () => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * PRICE_PER_ITEM;

  const handleClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add 1 item</button>
      <p>Total price: {totalPrice}</p>
    </div>
  );
};

export default Card;
