export const DeliverServices = () => {
  return (
    <>
      <div className="delivery" style={{ margin: "5%", marginLeft: "10%" }}>
        <div style={{ fontSize: "30px", marginLeft: "20px" }}>DELIVERY &</div>
        <div
          style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "20px" }}
        >
          SERVICES
        </div>

        <div
          style={{
            display: "flex",
            width: "60%",
            height: "180px",
            margin: "2%",
            marginLeft: "2%",
            backgroundColor: "whitesmoke",
          }}
        >
          <div style={{ margin: "20px", padding: "5px" }}>
            <input
              type="number"
              placeholder="Enter Pincode"
              style={{
                padding: "7px 30px",
                borderRadius: "5px",
                border: "1px solid grey",
                textAlign: 'left'
              }}
            />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "30px",
              }}
            >
              Free Home Delivery
            </div>
            <div>The product will be delivered within 10-12 days</div>
          </div>
          <div style={{ margin: "15px", padding: "5px" }}>
            <img
              src="https://www.firefoxbikes.com/on/demandware.static/Sites-HeroFirefox-Site/-/default/dwa7ff7c86/assets/images/delivery.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
