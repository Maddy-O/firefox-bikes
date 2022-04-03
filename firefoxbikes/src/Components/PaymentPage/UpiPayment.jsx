import Axios from "axios";
import React, { useState } from "react";

const UpiPayment = () => {
  const url = "http://localhost:8080/upipayment";
  const [data, setData] = useState({
    upi: "",
    id: "",
  });

  const handleInduptChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      upi: data.upi,
      id: parseInt(data.id),
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        margin: "auto",
        marginTop: "50px",
        boxShadow: "5px 5px 15px gray",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          width: "40%",
          padding: "10px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "2px",
            boxShadow: "0px 2px 0px whitesmoke",
          }}
        >
          <div
            style={{
              margin: "2px",
              width: "50%",
            }}
          >
            Back
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "right",
            }}
          >
            FireFoxbikes
          </div>
        </div>
        <div>
          <p style={{ fontSize: "30px", fontWeight: "500" }}>Enter new card</p>
          <p style={{ fontWeight: "500" }}>Total Payable Amount₹22640</p>
          <p style={{ fontWeight: "0" }}>Transaction Id: 100110125</p>
        </div>
      </div>
      <div
        style={{
          width: "60%",
          padding: "10px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "2px",
            boxShadow: "0px 2px 0px whitesmoke",
          }}
        >
          <div
            style={{
              width: "50%",
              margin: "2px",
            }}
          >
            Enter new card
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "right",
            }}
          >
            <select id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
        <div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
          <form
            style={{ width: "80%", margin: "auto", marginTop: "20px" }}
            onSubmit={(e) => submit(e)}
          >
            <div>
              <label>Google Pay</label>
              <br />
              <input
                style={{
                  height: "25px",
                  marginTop: "15px",
                  marginBottom: "10px",
                  width: "100%",
                }}
                onChange={(e) => handleInduptChange(e)}
                id="cardNum"
                value={data.cardNum}
                placeholder="Enter Card Number"
                type="text"
              ></input>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "25px",
                }}
              >
                <input
                  onChange={(e) => handleInduptChange(e)}
                  id="tnc"
                  placeholder="Name as on card"
                  type="checkbox"
                ></input>
                <p style={{ fontSize: "13px", color: "grey" }}>
                  Save this option securely for faster payment
                </p>
              </div>
              <button
                style={{
                  width: "100%",
                  height: "35px",
                  backgroundColor: "green",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  marginBottom: "25px",
                }}
                type="submit"
              >
                VERIFY
              </button>
            </div>
            <hr
              style={{ marginBottom: "25px", border: "1px solid whitesmoke" }}
            />
            <div style={{ height: "35px" }}>
              <label>PhonePe</label>
            </div>
            <hr
              style={{ marginBottom: "25px", border: "1px solid whitesmoke" }}
            />
            <div style={{ height: "35px" }}>
              <label>BHIM</label>
            </div>
            <hr
              style={{ marginBottom: "25px", border: "1px solid whitesmoke" }}
            />
            <div style={{ height: "35px" }}>
              <label>Paytm</label>
            </div>
            <hr
              style={{ marginBottom: "25px", border: "1px solid whitesmoke" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpiPayment;
