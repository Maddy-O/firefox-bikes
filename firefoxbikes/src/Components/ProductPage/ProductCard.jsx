import "./ProductCard.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductCard = ({ data }) => {
  const [add_to_cart, set_add_to_cart] = useState({});
  const add_to_cart_fun = () => {
    axios
      .post("http://localhost:4500/cart", {
        title: data.title,
        rating: data.rating,
        color: data.color,
        image: data.image,
        price: data.price,
        discount: data.discount,
        section: data.section,
        popular: data.popular,
      })
      .then((res) => {
        console.log(res);
      });
  };
  const direct_go_to_buy_fun = () => {
    console.log("direct_go_to_buy_fun");
  };
  return (
    <div className="ProductCard">
      <div className="ProductCard-top-div">
        <h2>
          {data.title} <span className="Section-Span">{data.section}</span>
        </h2>
        <div className="Rating-Div">{data.rating}</div>
        <div>
          <div>color</div>
        </div>
      </div>
      <div className="ProductCard-img-div">
        <img src={`${data.image}`} alt="" />
      </div>
      <div className="ProductCard-price-div">₹{data.price}</div>
      <div className="ProductCard-but-div">
        <img id="wish_list"
          src="https://cdn-icons.flaticon.com/png/512/3870/premium/3870922.png?token=exp=1648614852~hmac=984b6b5ca3573577ea3da0f9d8723669"
          alt=""
        />
        <img
          onClick={add_to_cart_fun}
          src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
          alt=""
        />
        <button onClick={direct_go_to_buy_fun}>BUY NOW</button>
      </div>
    </div>
  );
};
