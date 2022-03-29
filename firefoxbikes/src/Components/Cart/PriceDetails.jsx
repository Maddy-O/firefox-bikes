export const PriceDetails = () => {
  return (
    <>
      <div className="Cart">
        <div className="Price_Details">
          <h3>Price Details</h3>
        </div>
        <div className="MRP">
          <div>
            <h5>Total MRP (Incl. GST)</h5>
            <h5>Rs.25000</h5>
          </div>
          <div>
            <h5>Discount/Promotion</h5>
            <h5>-Rs0.00</h5>
          </div>
          <div>
            <h5>Deliver Charges</h5>
            <h5>Rs.00</h5>
          </div>
        </div>
        <hr />
        {/* Total Price */}
        <div>
          <h3>Total</h3>
          <h3>Rs.25000</h3>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <hr />
        {/* Coupon Codes */}
        <div className="Coupon">
          <h3>Coupon Codes</h3>
          <input type="text" placeholder="Enter Coupon Code" />
        </div>
      </div>
    </>
  );
};
