import { useState } from "react";
import { DeliverServices } from "./DeliverAndServices";
import { PriceDetails } from "./PriceDetails";
import { ProductInfo } from "./ProductInfo";

export const Cart = () => {
  const [cart_total, setCart_total] = useState(0)
  const totalPrice=(total)=>{
    localStorage.setItem("cart_total", JSON.stringify(total))
    setCart_total(total)
    // console.log("total in cart", total)
  }
  return (
    <>
      <div
        className="title"
        style={{
          width: "80%",
          fontSize: "40px",
          fontWeight: "bold",
          margin: "1% 10%",
        }}
      >
        <div style={{ color: "#3f4351" }}>SHOPPING</div>
        <div style={{ color: "silver" }}>CART</div>
      </div>

      <div
        className="Cart-main"
        style={{ display: "flex", margin: "8%" ,  gap: "5%" }}
      >
        <ProductInfo totalPrice={totalPrice}/>

        <div className="right-container">
          <PriceDetails cart_total={cart_total} />
        </div>
      </div>
      <DeliverServices/>
    </>
  );
};
