import { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

export const ServiceStationForm = () => {
  const url = "http://localhost:8080/ServiceBooking";
  const [data, setData] = useState({
    customerName: "",
    customerEmail: "",
    customMobileNo: "",
    StaticRangeState: "",
    StaticRangecity: "",
    zipCode: "",
    bikeName: "",
    purchasedForm: "",
    storeForService: "",
    invoiceNo: "",
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
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customMobileNo: data.customMobileNo,
      StaticRangeState: data.StaticRangeState,
      StaticRangecity: data.StaticRangecity,
      zipCode: data.zipCode,
      bikeName: data.bikeName,
      purchasedForm: data.purchasedForm,
      storeForService: data.storeForService,
      invoiceNo: parseInt(data.invoiceNo),
      tnc: data.tnc,
    }).then((res) => {
      console.log(res.data);
    });
  };

  const Input = styled.button`
    height: 50px;
  `;
  return (
    <div style={{ border: "1px red solid", width: "75%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
          padding: "5px",
        }}
      >
        <h4 style={{ color: "#ff5000" }}>BOOK A SERVICE</h4>
        <a
          style={{
            textDecoration: "none",
            marginLeft: "50%",
          }}
          href="#packages"
        >
          <p
            style={{
              border: "1px solid #ff5000",
              color: "white",
              padding: "5px",
              backgroundColor: "#ff5000",
            }}
          >
            View Packages
          </p>
        </a>
      </div>
      <form
        onSubmit={(e) => submit(e)}
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          color: "red",
        }}
      >
        <input
          onChange={(e) => handleInduptChange(e)}
          id="customerName"
          value={data.customerName}
          placeholder="CUSTOMER NAME*"
          type="text"
        ></input>
        <br />
        <input
          onChange={(e) => handleInduptChange(e)}
          id="customerEmail"
          value={data.customerEmail}
          placeholder="CUSTOMER EMAIL*"
          type="text"
        ></input>
        <br />
        <input
          onChange={(e) => handleInduptChange(e)}
          id="customMobileNo"
          value={data.customMobileNo}
          placeholder="CUSTOMER MOBILE NO*"
          type="number"
        ></input>
        <br />
        <select onChange={(e) => handleInduptChange(e)} id="StaticRangeState">
          <option>SELECT STATE</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Telangana">Telangana</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
        </select>
        <br />
        <select onChange={(e) => handleInduptChange(e)} id="StaticRangecity">
          <option>SELECT CITY</option>
          <option value="Delhi(NCR)">Delhi(NCR)</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Surat">Surat</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Kanpur">Kanpur</option>
        </select>
        <br />
        <input
          onChange={(e) => handleInduptChange(e)}
          id="zipCode"
          value={data.zipCode}
          placeholder="ZIP CODE"
          type="number"
        ></input>
        <br />
        <select onChange={(e) => handleInduptChange(e)} id="bikeName">
          <option>BIKE NAME*</option>
          <option value="AXXIS 27.5 D">AXXIS 27.5 D</option>
          <option value="ADVENTRON 27.5 ELECTRIC BIKE">
            ADVENTRON 27.5 ELECTRIC BIKE
          </option>
          <option value="ALFA 20">ALFA 20</option>
          <option value="AVATAR 27.5 D">AVATAR 27.5 D</option>
          <option value="AXXIS 24 D">AXXIS 24 D</option>
          <option value="AXXIS 26 D">AXXIS 26 D</option>
          <option value="AXXIS 29 D">AXXIS 29 D</option>
          <option value="BAD ATTITUDE 10 29 D">BAD ATTITUDE 10 29 D</option>
          <option value="BLACK WIDOW 20">BLACK WIDOW 20</option>
          <option value="BREEZE 24">BREEZE 24</option>
        </select>
        <br />
        <select onChange={(e) => handleInduptChange(e)} id="purchasedForm">
          <option>PURCHASED FROM*</option>
          <option value="ONLINE">ONLINE</option>
          <option value="OFFLINE">OFFLINE</option>
        </select>
        <br />
        <select onChange={(e) => handleInduptChange(e)} id="storeForService">
          <option>SELECT STORE FOR SERVICE</option>
          <option value="CYCLE WORLD - MHOW, 353441">
            CYCLE WORLD - MHOW, 353441
          </option>
          <option value="(ONLY TREK BIKES)-AUROVILLE, 605101">
            (ONLY TREK BIKES)-AUROVILLE, 605101
          </option>
          <option value="3 ACES ENTERPRISES - NEW DELHI, 110024">
            3 ACES ENTERPRISES - NEW DELHI, 110024
          </option>
          <option value="3DIAMOND SUPERMARKET - CHENNAI, 600052">
            3DIAMOND SUPERMARKET - CHENNAI, 600052
          </option>
          <option value="A B ENTERPRISES - KOLKATA, 700091">
            A B ENTERPRISES - KOLKATA, 700091
          </option>
          <option value="A&A HEALTH STUDIO - BIKANER, 334401">
            A&A HEALTH STUDIO - BIKANER, 334401
          </option>
          <option value="A1 CYCLE STORES - BEED, 431122">
            A1 CYCLE STORES - BEED, 431122
          </option>
          <option value="ACE ENGINEERS - JAMMU, 180007">
            ACE ENGINEERS - JAMMU, 180007
          </option>
          <option value="ACE KUDALE CAR PVT LTD - PUNE, 412307">
            ACE KUDALE CAR PVT LTD - PUNE, 412307
          </option>
          <option value="AP CYCLES - UNA, 174303">
            AP CYCLES - UNA, 174303
          </option>
        </select>
        <br />
        <input
          onChange={(e) => handleInduptChange(e)}
          id="invoiceNo"
          value={data.invoiceNo}
          placeholder="INVOICE NUMBER"
          type="number"
        ></input>
        <br />
        <br />
        <input
          id="tnc"
          type="checkbox"
          onChange={(e) => handleInduptChange(e)}
        />
        <span>I accept Terms and Conditions</span>
        <br />
        <br />
        <button type="submit">Book Service</button>
      </form>
      <div id="packages">
        <h1>Service Packages</h1>
        <div>
          <div>
            <h1>STANDARD SERVICE</h1>
            <p>Gearless Bikes</p>
          </div>
          <div>
            <h3>Standard Service For Gearless Bikes ₹1099/-</h3>
            <ul>
              <li>Hubs Checkup</li>
              <li>Alignment of Headset</li>
              <li>Bottom Bracket Checkup</li>
              <li>Check and adjust brakes</li>
              <li>Check and Lube Chain</li>
              <li>Hubs Checkup</li>
              <li>Check and Lube Cables</li>
              <li>Lubrication of Drivetrain</li>
              <li>Wipe clean the bicycle</li>
              <li>Check tire's & inflate to correct pressure</li>
              <li>Checking and Tightening all screws and bolts</li>
              <li>Test Ride by Service Engineer</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h1>PREMIUM SERVICE</h1>
            <p>Gearless Bikes</p>
          </div>
          <div>
            <h3>Premium Service For Gearless Bikes ₹1299/-</h3>
            <ul>
              <li>Hubs Checkup</li>
              <li>Alignment of Headset</li>
              <li>Bottom Bracket Checkup</li>
              <li>Check and adjust brakes</li>
              <li>Check and Lube Chain</li>
              <li>Hubs Checkup</li>
              <li>Check and Lube Cables</li>
              <li>Fixing Puncture</li>
              <li>Lubrication of Drivetrain</li>
              <li>Wipe clean the bicycle</li>
              <li>Wheel Truing ( Not wheel bend )</li>
              <li>Check tire's & inflate to correct pressure</li>
              <li>Dismantle of Hubs, Center Bracket and Headset</li>
              <li>Test Ride by Service Engineer</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h1>STANDARD SERVICE</h1>
            <p>Geared Bikes.</p>
          </div>
          <div>
            <h3>Standard Service For Geared Bikes ₹1299/-</h3>
            <ul>
              <li>Hubs Checkup</li>
              <li>Alignment of Headset</li>
              <li>Bottom Bracket Checkup</li>
              <li>Check and adjust brakes</li>
              <li>Check and Lube Chain</li>
              <li>Hubs Checkup</li>
              <li>Check and Lube Cables</li>
              <li>Fixing Puncture</li>
              <li>Lubrication of Drivetrain</li>
              <li>Wipe clean the bicycle</li>
              <li>Wheel Truing ( Not wheel bend )</li>
              <li>Check tire's & inflate to correct pressure</li>
              <li>Checking and Tightening all screws and bolts</li>
              <li>Test Ride by Service Engineer</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h1>PREMIUM SERVICE</h1>
            <p>Geared Bikes.</p>
          </div>
          <div>
            <h3>Premium Service For Geared Bikes ₹1499/-</h3>
            <ul>
              <li>Gear Tune up</li>
              <li>Hubs Checkup</li>
              <li>Alignment of Headset</li>
              <li>Bottom Bracket Checkup</li>
              <li>Check and adjust brakes</li>
              <li>Check and Lube Chain</li>
              <li>Hubs Checkup</li>
              <li>Check and Lube Cables</li>
              <li>Fixing Puncture</li>
              <li>Lubrication of Drivetrain</li>
              <li>Wipe clean the bicycle</li>
              <li>Wheel Truing ( Not wheel bend )</li>
              <li>Check tire's & inflate to correct pressure</li>
              <li>Dismantle of Hubs, Center Bracket and Headset</li>
              <li>Checking and Tightening all screws and bolts</li>
              <li>Test Ride by Service Engineer</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h1>ADDITIONAL</h1>
          </div>
          <div>
            <ul>
              <li>Puncture: ₹49/-</li>
              <li>Wheel truing: ₹149/-</li>
              <li>Suspension: ₹199/-</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
