import heartIcon from "./Images/heart.png";
import deleteIcon from "./Images/delete.png";

export const ProductData = ({ _id, title, price, color, image, section }) => {
  return (
    <>
      <div className="middle" style={{ display: "flex", margin: "22px" }}>
        <div
          style={{
            width: "222px",
            height: "170px",
            border: "1px solid grey",
            borderRadius: "5px",
          }}
        >
          <img src={image} alt="" style={{ width: "170px", height: "150px" }} />
        </div>

        {/* Product Data */}
        <div className="product-data">
          
          <div className="name-price" style={{
            display: "flex", width: "550px", justifyContent: "space-between",
          }}>
          <div style={{ marginLeft: "30px"}}>
            <h3>
              {title} {section}
            </h3>
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: `${color[0]}`,
              }}
            ></div>
          </div>
          <div style={{ marginLeft: "50%" }}>
            <p style={{ }}>Price</p>
            <h4>₹{price}</h4>
          </div>
          </div>

          {/* DELETE Button and Wishlist Button */}
          <div className="delete" style={{
            display: "flex", justifyContent: "space-between",
            marginTop: '22px', width: "500px", marginLeft: '22px'
          }}>
            <button style={{border: "none", backgroundColor: "transparent", marginLeft: '2px', cursor: "pointer"}} >
              <img
                src={heartIcon}
                alt=""
                style={{ width: "22px", height: "22px" }}
              />
            </button>
            <button style={{border: "none", backgroundColor: "transparent", marginLeft: '30px', cursor: "pointer"}} >
              <img
                src={deleteIcon}
                alt=""
                style={{ width: "22px", height: "22px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
