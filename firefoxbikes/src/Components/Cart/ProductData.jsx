export const ProductData = ({ _id, title, price, color, image, section }) => {
  return (
    <>
      <div className="middle" style={{ display: "flex", margin: "20px" }}>
        <div
          style={{
            width: "220px",
            height: "170px",
            border: "1px solid grey",
            borderRadius: "5px",
          }}
        >
          <img src={image} alt="" style={{ width: "170px", height: "150px"}} />
        </div>

        {/* Product Data */}
        <div style={{ marginLeft: "30px" }}>
          <h3>
            {title} {section}
          </h3>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: `${color[0]}`,
            }}
          ></div>
        </div>
        <div style={{ marginLeft: "50%" }}>
          <p style={{fontWeight: "bold"}}>Price</p>
          <h4>₹{price}</h4>
        </div>
      </div>
    </>
  );
};
