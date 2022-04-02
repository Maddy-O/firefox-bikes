import { ProductData } from "./ProductData";
import axios from "axios";
import { useEffect, useState } from "react";
import cartIcon from "./Images/shopping-cart.png";

export const ProductInfo = ({totalPrice}) => {
  const [bikes, setBikes] = useState([]);
  
  useEffect(() => getData(), []);
  const [total, setTotal] = useState(0);
  totalPrice(total)

  const getData = async () => {
    await axios.get("http://localhost:4500/cart").then(({data}) => {

      setBikes([...data]);
      // console.log(data);
      let sum = 0;
      for (let i in data) {
        sum += +(data[i].price);
      }
      setTotal(sum);
    });
  };
  const deleteFromCart= async (id)=>{
    await axios.delete(`http://localhost:4500/cart/${id}`).then((res)=>{
      console.log(res);
      getData();
    })
  }

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
                src={cartIcon}
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
              deleteFromCart={deleteFromCart}
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
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹{total}</p>
        </div>
      </div>
    </>
  );
};
