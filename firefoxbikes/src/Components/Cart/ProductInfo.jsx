import { ProductData } from "./ProductData";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProductInfo = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => getData(), []);
  let totalPrice = 0;

  const getData = async () => {
    await axios.get("http://localhost:4500/cart").then((res) => {

      setBikes([...res.data]);
      console.log(res.data);

      for (let i in res.data) {
        totalPrice += +(res.data[i].price);
      }
      console.log((totalPrice));
    });
  };

  return (
    <>
      <div style={{ width: "780px", height: "auto", border: "1px solid red" }}>
        {/* Cart, Address & Payment Chain */}
        <div className="top" style={{ display: "flex", margin: "20px" }}>
          <div className="cart" style={{ display: "flex" }}>
            <div
              className="icon"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid black",
                margin: "10px",
              }}
            >
              <img
                src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1648736667~hmac=8031e74dbb85d1353b53d35414805d83"
                alt=""
                style={{ width: "27px", color: "#fff", margin: "10px" }}
              />
            </div>
            <h3>CART</h3>
          </div>

          <hr />
          <div className="address" style={{ display: "flex" }}>
            <div
              className="icon"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid black",
                margin: "10px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                alt=""
                style={{ width: "27px", color: "#fff", margin: "10px" }}
              />
            </div>
            <h3>ADDRESS</h3>
          </div>
          <hr />
          <div className="payment" style={{ display: "flex" }}>
            <div
              className="icon"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid black",
                margin: "10px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                alt=""
                style={{ width: "27px", color: "#fff", margin: "10px" }}
              />
            </div>
            <h3>PAYMENT</h3>
          </div>
        </div>
        <hr />

        {/* Middle DIV about product Info */}

        <div className="left-container">
          {bikes.map((e) => (
            <ProductData
              key={e._id}
              id={e._id}
              title={e.title}
              price={e.price}
              color={e.color}
              image={e.image}
              section={e.section}
            ></ProductData>
          ))}
        </div>
        <hr />
        {/* Total Amount of all products */}
        <div
          className="bottom"
          style={{
            display: "flex",
            margin: "10px 25px 20px 80px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>Total</h3>
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹{totalPrice}</p>
        </div>
      </div>
    </>
  );
};
