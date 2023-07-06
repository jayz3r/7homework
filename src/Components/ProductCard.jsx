import React, { useEffect } from "react";
import './ProductCard.css'
import { addToCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

const ProductCard = ({ data }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate()

  const handleAddtoCart = (data) =>{
    dispatch(addToCart(data))
    navigate("/cart")
  }
  return (

      <div className="card" style={{ backgroundColor: 'grey' }}>
        <img src={data.thumbnail} className="cardPicture" />
        <h2 className="cardName">{data.title}</h2>
        <p className="cardPrice">Price: {data.price}</p>
        <p className="cardRating"> Rating: {data.rating}</p>
        <p className="cardDescription">{data.description}</p>
        <p className="cardCategory">Category: {data.category}</p>
        <button onClick={() => handleAddtoCart(data)}>Add to Cart</button>
      </div>
  );
};

export default ProductCard;
