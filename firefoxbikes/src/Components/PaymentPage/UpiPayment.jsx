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
    <div>
      <div>
        <div>
          <div>Back</div>
          <div>FireFoxbikes</div>
        </div>
        <div>
          <h1>Enter Google Pay UPI ID</h1>
          <h4>Total Payable Amount₹22640</h4>
          <p>Transaction Id: 100110125</p>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div>UPI OPTIONS</div>
          <select id="language">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div>
          <form onSubmit={(e) => submit(e)}>
            <label>Google Pay</label>
            <input
              onChange={(e) => handleInduptChange(e)}
              id="cardNum"
              value={data.cardNum}
              placeholder="Enter Card Number"
              type="text"
            ></input>
            <div style={{ display: "flex" }}>
              <input
                onChange={(e) => handleInduptChange(e)}
                id="tnc"
                placeholder="Name as on card"
                type="checkbox"
              ></input>
              <p>Save this option securely for faster payment</p>
            </div>
            <button type="submit">PROCEED</button>
            <label>PhonePe</label>
            <label>BHIM</label>
            <label>Paytm</label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpiPayment;
