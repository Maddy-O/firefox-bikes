import CardPayment from "../PaymentPage/CardPayment";

export const PriceDetails = () => {
  return (
    <>
      <div
        className="main-container"
        style={{
          width: '300px',
          height: '560px',
          backgroundColor: '#191919',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontFamily: 'Oswald', 
        }}
      >
        <div className="Price_Details">
          <h2 style={{ marginLeft: "18px" }}>Price Details</h2>
        </div>
        <div className="MRP">
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: "18px", fontSize: "14px" }}>
              Total MRP (Incl. GST)
            </p>
            <p style={{ marginLeft: "90px" }}>₹25000</p>
          </div>

          <div style={{ display: "flex" }}>
            <p
              style={{ marginLeft: "18px", marginTop: "0px", fontSize: "14px" }}
            >
              Discount/Promotion
            </p>
            <p style={{ marginLeft: "100px", marginTop: "0px" }}>-₹ 0.00</p>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{ marginLeft: "18px", marginTop: "0px", fontSize: "14px" }}
            >
              Deliver Charges
            </p>
            <p style={{ marginLeft: "145px", marginTop: "0px" }}>₹00</p>

          <div  style={{ display: 'flex',  }} >
            <p style={{marginLeft: '18px', marginTop:'0px', fontSize: '14px'}}>Discount/Promotion</p>
            <p style={{marginLeft: '100px', marginTop:'0px'}}>-₹1200</p>
          </div>
          <div style={{ display: 'flex',  }} >
            <p style={{marginLeft: '18px', marginTop:'0px', fontSize: '14px'}}>Deliver Charges</p>
            <p style={{marginLeft: '145px', marginTop:'0px'}}>₹0.00</p>

          </div>
        </div>

        <hr style={{ margin: "10px" }} />

        {/* Total Price */}
        <div
          style={{
            display: "flex",
            padding: "3px",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          <h3 style={{ marginLeft: "18px" }}>Total</h3>
          <h3 style={{ marginLeft: "120px" }}>₹25000</h3>
        </div>
        <button
          style={{
            marginLeft: "20px",
            padding: "10px 55px",
            borderRadius: "5px",
            border: "none",
            color: "white",
            backgroundColor: "tomato",
            fontWeight: "bold",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          <a
            href="PaymentPage"
            style={{ textDecoration: "none", color: "white" }}
          >
            PROCEED TO CHECKOUT
          </a>
        </button>

        <hr style={{ margin: "20px 0px", width: "100%" }} />
        {/* Coupon Codes */}

        <div className="Coupon">
          <h2 style={{ marginLeft: "18px" }}>Coupon Codes</h2>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            style={{
              marginLeft: "18px",
              padding: "10px 35px",
              borderRadius: "5px",
              border: "none",
              color: "white",
              fontSize: "15px",
              background: "transparent",
              border: "0.5px solid white",
              textAlign: "left",

            }}
          />
        </div>
      </div>
    </>
  );
};
