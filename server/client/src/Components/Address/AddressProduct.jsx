export const AddressProduct = ({ id, title, image }) => {
  return (
      <>
          <hr style={{color: 'white', width: '80%'}}/>
      <div
        className="product-image"
        style={{
          backgroundColor: "#4a4949",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <div className="imageAndDetails" style={{ display: "flex" }}>
          <div
            className="photo"
            style={{
              backgroundColor: "white",
              width: "60%",
              margin: "10px",
              borderRadius: "5px",
            }}
          >
            <img src={image} alt="" style={{ width: "80%", height: "90%" }} />
          </div>
          <div className="details">
            <h4>{title}</h4>
            <p style={{ fontSize: "12px" }}>
              Estimated Delivery
              <br />
              within 10-12 days
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
