import { AddressPrice } from "./AddressPrice";
import { AddressProduct } from "./AddressProduct";
import axios from "axios";
import { useEffect, useState } from "react";

export const Address = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    zipcode: "",
    address: "",
    locality: "",
    state: "",
    city: "",
    addressType: "",
  });

  const onChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Address Added Successfully!");
  };

  const showData = () => {
    console.log(formData);
  };

  const [bikes, setBikes] = useState([]);
  useEffect(() => getData(), []);

  const getData = async () => {
    await axios.get("http://localhost:4500/cart").then(({ data }) => {
      setBikes([...data]);
      console.log(data);
    });
  };
  


  return (
    <div className="address-container" style={{display: "flex"}}>
      <div className="address" style={{ marginLeft: "35%" }}>
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>ADD</div>
        <div style={{ fontSize: "22px", marginTop: "0px" }}>NEW ADDRESS</div>

        <form onSubmit={onSubmit}>
          <h3>Personal Details</h3>

          <p>First Name</p>
          <input onChange={onChange} id="firstname" />

          <p>Last Name</p>
          <input onChange={onChange} id="lastname" />

          <h3>Shipping Details</h3>

          <p>Phone Number</p>
          <input onChange={onChange} id="phone" />

          <p>ZIP Code</p>
          <input onChange={onChange} id="zipcode" />

          <p>Address 1</p>
          <input onChange={onChange} id="address" />

          <p>Locality</p>
          <input onChange={onChange} id="locality" />

          <div className="state">
            <p>State</p>
            <select>
              <option>Select State</option>
              <option id="delhi" onChange={onChange}>
                DELHI
              </option>
              <option id="karnataka" onChange={onChange}>
                KARNATAKA
              </option>
              <option id="tripura" onChange={onChange}>
                TRIPURA
              </option>
              <option id="odhisa" onChange={onChange}>
                ODHISA
              </option>
              <option id="westBengal" onChange={onChange}>
                WEST BENGAL
              </option>
            </select>
          </div>

          <div className="city">
            <p>City</p>
            <select>
              id="city" onChange={onChange}
              <option>Select City</option>
              <option id="delhi" onChange={onChange}>
                DELHI
              </option>
              <option id="bangalore" onChange={onChange}>
                BANGALORE
              </option>
              <option id="agartala" onChange={onChange}>
                AGARTALA
              </option>
              <option id="bhuvaneshwar" onChange={onChange}>
                BHUVANESHWAR
              </option>
              <option id="kolkata" onChange={onChange}>
                KOLKATA
              </option>
            </select>
          </div>

          <h3>Address Type</h3>
          <div
            className="radio-buttons"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <label>Work</label>
            <input type="radio" id="work" onChange={onChange} value="work" />
            <label>Home</label>
            <input type="radio" id="home" onChange={onChange} value="home" />
            <label>Other</label>
            <input type="radio" id="other" onChange={onChange} value="other" />
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="same"
              onChange={onChange}
              style={{ marginBottom: "10px" }}
            />
            <label>Make this my default address</label>
            <br />
            <input type="checkbox" id="different" onChange={onChange} />
            <label>Billing And Shipping address are same</label>
          </div>

          <div
            className="new-address"
            style={{
              marginTop: "5%",
              marginBottom: "5%",
              height: "40px",
              width: "100%",
            }}
          >
            <button
              style={{
                border: "1px solid grey",
                padding: "8px 45px",
                borderRadius: "5px",
                backgroundColor: "white",
                fontSize: "12px",
              }}
            >
              CLOSE
            </button>
            <button
              onClick={showData}
              style={{
                background: "tomato",
                border: "none",
                padding: "10px 25px",
                margin: "10px",
                borderRadius: "5px",
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              ADD NEW ADDRESS
            </button>
          </div>
        </form>
      </div>
      {/* Product Image and  Price Details */}

      <div className="right-side" style={{width:"320px", height:"auto"}}>
        <div>
        {bikes.map((e) => (
            <AddressProduct
              key={e._id}
              id={e._id}
              title={e.title}
              image={e.image}
            ></AddressProduct>
          ))}
        </div>

        <div className="price" style={{ marginTop: '3px' }}>
          <AddressPrice/>
        </div>
      </div>
    </div>
  );
};
