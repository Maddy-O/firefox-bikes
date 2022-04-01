import { PriceDetails } from "./PriceDetails";
import { ProductInfo } from "./ProductInfo";

export const Cart = () => {
  return (
    <>
      <div
        className="title"
        style={{
          width: "80%",
          fontSize: "40px",
          fontWeight: "bold",
          margin: "2% 10%",
        }}
      >
        <div style={{ color: "#3f4351" }}>SHOPPING</div>
        <div style={{ color: "silver" }}>CART</div>
      </div>

      <div
        className="Cart-main"
        style={{ display: "flex", margin: "10%" ,  gap: "5%" }}
      >
        <ProductInfo />

        <div className="right-container">
          <PriceDetails />
        </div>
      </div>
    </>
  );
};
