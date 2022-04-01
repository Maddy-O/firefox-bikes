import React from "react";
import CardPayment from "./CardPayment";
import UpiPayment from "./UpiPayment";

const PaymentPage = () => {
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
          <div>
            <a href="CardPayment">
              <h3>Cards (Credit/Debit)</h3>
              <p>Visa, Mastercard, Diners Club, Rupay, Amex</p>
            </a>
          </div>
          <div>
            <h3>EMI</h3>
            <p>Credit Card, Debit Card</p>
          </div>
          <div>
            <h3>Wallet</h3>
            <p>Amazon Pay, Paytm, PhonePe & more</p>
          </div>
          <div>
            <h3>Net Banking</h3>
            <p>All India Banks</p>
          </div>
          <div>
            <a href="UpiPayment">
              <h3>UPI</h3>
              <p>Gpay, PhonePe, BHIM, Paytm</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
