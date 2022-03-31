import { PriceDetails } from "./PriceDetails";
import { ProductInfo } from "./ProductInfo";

export const Cart = () => {
  return (
    <>
      <div className="title">
        <div>SHOPPING</div>
        <div>CART</div>
      </div>
      <div className="Cart-main" style={{ display: "flex", margin: '10%', gap: '5%' }}>
        <div className="left-container">
          <ProductInfo/>
        </div>
        <div className="right-container" >
          <PriceDetails />
        </div>
      </div>
    </>
  );
};
