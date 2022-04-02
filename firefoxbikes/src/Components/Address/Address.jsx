import { useState } from "react";

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

  return (
    <>
      <div className="address" style={{ marginLeft: "45%" }}>
        <p>ADD</p>
        <p>NEW ADDRESS</p>

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
          <input onChange={onChange} id="zip" />

          <p>Address 1</p>
          <input onChange={onChange} id="address1" />

          <p>Locality</p>
          <input onChange={onChange} id="locality" />

          <div className="state">
            <p>State</p>
            <select>
              id="state" onChange={onChange}
              <option>Select State</option>
              <option>DELHI</option>
              <option>KARNATAKA</option>
              <option>TRIPURA</option>
              <option>ODHISA</option>
              <option>WEST BENGAL</option>
            </select>
          </div>

          <div className="city">
            <p>City</p>
            <select>
              id="city" onChange={onChange}
              <option>Select City</option>
              <option>DELHI</option>
              <option>BANGALORE</option>
              <option>AGARTALA</option>
              <option>BHUVANESHWAR</option>
              <option>KOLKATA</option>
            </select>
          </div>

          <h3>Address Type</h3>
          <div className="radio-buttons">
            <label>Work</label>
            <input type="radio" id="work" onChange={onChange} value="work" />
            <label>Home</label>
            <input type="radio" id="home" onChange={onChange} value="home" />
            <label>Other</label>
            <input type="radio" id="other" onChange={onChange} value="other" />
          </div>

          <div className="checkbox">
            <input type="checkbox" id="same" onChange={onChange} />
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
    </>
  );
};
