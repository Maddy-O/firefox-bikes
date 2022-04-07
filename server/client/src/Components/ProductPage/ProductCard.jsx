import "./ProductCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export const ProductCard = ({ data }) => {
  const [add_to_cart, set_add_to_cart] = useState({});
  const LogInStatus =JSON.parse(localStorage.getItem("LogInStatus"))
  console.log('LogInStatus: ', LogInStatus);
  
  const add_to_cart_fun = async() => {
    if(LogInStatus=="Done"){
    await axios
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
    }else{
      alert("Please Login First")
    }
  };
  const direct_go_to_buy_fun = async() => {
    if(LogInStatus=="Done"){ 
    await axios
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
    }else{
      alert("Please Login First")
    }
  };
  return (
    <div className="ProductCard">
      <div className="ProductCard-top-div">
        <h2>
          {data.title} <span className="Section-Span">{data.section}</span>
        </h2>
        <div className="Rating-Div">{data.rating}</div>
        <div
         style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          backgroundColor: `${data.color[0]}`,
        }}>
          
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
        <button onClick={()=>{
          direct_go_to_buy_fun()
          }}>
            <Link style={{textDecoration: "none", color: "black"}} to={"/cart"}> BUY NOW
            </Link>
            
            </button>
      </div>
    </div>
  );
};
