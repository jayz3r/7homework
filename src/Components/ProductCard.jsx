import React from "react";
import './ProductCard.css'
import { increase } from "../store/CartSlice";
import { useDispatch } from "react-redux";


const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  return (

      <div className="card" style={{ backgroundColor: `${data.color}` }}>
        <img src={data.picture} className="cardPicture" />
        <h2 className="cardName">{data.name}</h2>
        <p className="cardPrice">Price: {data.price}</p>
        <p className="cardDescription">{data.description}</p>
        <p className="cardCategory">Category: {data.category}</p>
        <button onClick={() => dispatch(increase())}>Add to Cart</button>
      </div>
  );
};

export default ProductCard;
