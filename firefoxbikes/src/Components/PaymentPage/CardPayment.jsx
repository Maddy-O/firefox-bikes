import Axios from "axios";
import React, { useState } from "react";

const CardPayment = () => {
  const url = "http://localhost:8080/cardpayment";
  const [data, setData] = useState({
    cardNum: "",
    expiryDate: "",
    enterCvv: "",
    nameOnCard: "",
    tnc: "",
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
      cardNum: data.cardNum,
      expiryDate: data.expiryDate,
      enterCvv: data.enterCvv,
      nameOnCard: parseInt(data.nameOnCard),
      tnc: data.tnc,
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
          <h1>Enter new card</h1>
          <h4>Total Payable Amount₹22640</h4>
          <p>Transaction Id: 100110125</p>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div>CARDS(CREDIT/DEBIT)</div>
          <select id="language">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div>
          <form onSubmit={(e) => submit(e)}>
            <label>New Card</label>
            <input
              onChange={(e) => handleInduptChange(e)}
              id="cardNum"
              value={data.cardNum}
              placeholder="Enter Card Number"
              type="number"
            ></input>
            <div style={{ display: "flex" }}>
              <div>
                <label>Expiry</label>
                <input
                  onChange={(e) => handleInduptChange(e)}
                  id="expiryDate"
                  value={data.expiryDate}
                  placeholder="MM/YY"
                  type="number"
                ></input>
              </div>
              <div>
                <label>CVV</label>
                <input
                  onChange={(e) => handleInduptChange(e)}
                  id="enterCvv"
                  value={data.enterCvv}
                  placeholder="Enter CVV"
                  type="number"
                ></input>
              </div>
            </div>
            <label>Name on Card</label>
            <input
              onChange={(e) => handleInduptChange(e)}
              id="nameOnCard"
              value={data.nameOnCard}
              placeholder="Name as on card"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
