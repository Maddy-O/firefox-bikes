import { Link } from "react-router-dom";

export const AddressPrice = () => {
  const cart_total = JSON.parse(localStorage.getItem("cart_total"));
  console.log(cart_total);

  return (
    <>
      <div
        className="main-container"
        style={{
          width: "300px",
          height: "380px",
          backgroundColor: "#191919",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
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
            <p style={{ marginLeft: "90px" }}>₹{cart_total}</p>
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
          <h3 style={{ marginLeft: "120px" }}>₹{cart_total}</h3>
        </div>
        
        <Link to="/paymentpage">
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
            PROCEED TO CHECKOUT
          </button>
        </Link>
      </div>
    </>
  );
};
