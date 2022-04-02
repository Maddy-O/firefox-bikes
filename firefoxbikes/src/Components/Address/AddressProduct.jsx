
export const AddressProduct = ({ id, title, image }) => {
    console.log(title, id, image);
  return (
    <>
      <div
        className="product-image"
        style={{ backgroundColor: "grey", width: "100%", borderRadius: "5px" }}
      >
        <h3>Delivery Estimates</h3>
        <div className="imageAndDetails" style={{ display: "flex" }}>
          <div className="photo">
            <img src={image} alt="" style={{ width: "90%", height: "90%" }} />
          </div>
          <div className="details">
            <h4>{title}</h4>
            <p>
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
