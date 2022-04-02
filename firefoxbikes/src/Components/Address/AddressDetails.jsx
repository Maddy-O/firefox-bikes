import { AddressPrice } from "./AddressPrice";
import { AddressProduct } from "./AddressProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AddressDetails.css";
import { AddressBook } from "./AddressBook";

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

  const submit = () => {
    console.log(formData);
    axios.post("http://localhost:8080/users", formData).then(() => {});
  };

  const [create, setCreate] = useState([]);
  useEffect(() => showData(), []);

  const showData = () => {
    axios.get("http://localhost:8080/users", formData).then((res) => {
      setCreate(res.data);
    });
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
    <>
      <div className="address-book">
        {create.map((el) => (
          // console.log("Address",el)
          <AddressBook data={el} key={el.id} />
        ))}
      </div>

      <div
        className="address-container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div
          className="address"
          style={{
            marginLeft: "3.5%",
            padding: "10px",
            width: "680px",
            border: "1px solid tomato",
            borderRadius: "6px",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>ADD</div>
          <div style={{ fontSize: "22px", marginTop: "0px" }}>NEW ADDRESS</div>

          <form onSubmit={onSubmit} style={{ height: "400px" }}>
            <h3>Personal Details</h3>
            <div style={{ display: "flex", gap: "25px", height: "35px" }}>
              <p>First Name : </p>
              <input onChange={onChange} id="firstName" />

              <p>Last Name : </p>
              <input onChange={onChange} id="lastName" />
            </div>

            <h3>Shipping Details</h3>
            <div
              className="shiiping-details"
              style={{ display: "flex", gap: "25px", height: "35px" }}
            >
              <p>Phone Number : </p>
              <input onChange={onChange} id="phone" />

              <p>ZIP Code : </p>
              <input onChange={onChange} id="zipcode" />
            </div>
            <div
              style={{
                display: "flex",
                gap: "25px",
                margin: "10px",
                height: "35px",
              }}
            >
              <p>Address 1 : </p>
              <input onChange={onChange} id="address" />

              <p>Locality : </p>
              <input onChange={onChange} id="locality" />
            </div>

            <div
              className="state-city"
              style={{
                display: "flex",
                gap: "25px",
                margin: "10px",
                height: "70px",
              }}
            >
              <div className="state">
                <p>State</p>
                <select id="state" onChange={onChange}>
                  <option>Select State</option>
                  <option value="Delhi">DELHI</option>
                  <option value="Karnataka">KARNATAKA</option>
                  <option value="Tripura">TRIPURA</option>
                  <option value="Odhisa">ODHISA</option>
                  <option value="West Bengal">WEST BENGAL</option>
                </select>
              </div>

              <div className="city">
                <p>City</p>
                <select id="city" onChange={onChange}>
                  <option>Select City</option>
                  <option value="Delhi">DELHI</option>
                  <option value="Bangalore">BANGALORE</option>
                  <option value="Agartala">AGARTALA</option>
                  <option value="Bhuvaneshwar">BHUVANESHWAR</option>
                  <option value="Kolkata">KOLKATA</option>
                </select>
              </div>
            </div>

            <h3>Address Type</h3>
            <div
              className="radio-buttons"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                height: "20px",
              }}
            >
              <label>Work</label>
              <input id="addressType" type="radio" value="work" />
              <label>Home</label>
              <input id="addressType" type="radio" value="home" />
              <label>Other</label>
              <input id="addressType" type="radio" value="other" />
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
                  cursor: "pointer",
                }}
              >
                CLOSE
              </button>
              <button
                onClick={submit}
                style={{
                  background: "tomato",
                  border: "none",
                  padding: "10px 25px",
                  margin: "10px",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                ADD NEW ADDRESS
              </button>
            </div>
          </form>
        </div>

        {/* Product Image and  Price Details */}
        <div
          className="right-side"
          style={{
            width: "320px",
            height: "auto",
            // backgroundColor: "#4a4949",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#4a4949",
              color: "white",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            <h3>Delivery Estimates</h3>
            {bikes.map((e) => (
              <AddressProduct
                key={e._id}
                id={e._id}
                title={e.title}
                image={e.image}
              ></AddressProduct>
            ))}
          </div>

          <div className="price" style={{ marginTop: "1px" }}>
            <AddressPrice />
          </div>
        </div>
      </div>
    </>
  );
};
