import { useState } from "react";
import Axios from "axios";

export const HomeServiceForm = () => {
  const url = "http://localhost:8080/homeservice ";
  const [data, setData] = useState({
    customerName: "",
    customerEmail: "",
    customMobileNo: "",
    customerAddress: "",
    zipCode: "",
    StaticRangeState: "",
    StaticRangecity: "",
    bikeName: "",
    dateOfService: "",
    timeSlot: "",
    selectPackage: "",
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
      customerAddress: data.customerAddress,
      zipCode: data.zipCode,
      StaticRangeState: data.StaticRangeState,
      StaticRangecity: data.StaticRangecity,
      bikeName: data.bikeName,
      dateOfService: data.dateOfService,
      timeSlot: data.timeSlot,
      selectPackage: data.selectPackage,
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div style={{ border: "1px red solid", width: "75%", margin: "auto" }}>
      <h1>Home Service</h1>
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
        {/* <br /> */}
        <input
          onChange={(e) => handleInduptChange(e)}
          id="customerEmail"
          value={data.customerEmail}
          placeholder="CUSTOMER EMAIL*"
          type="text"
        ></input>
        {/* <br /> */}
        <input
          onChange={(e) => handleInduptChange(e)}
          id="customMobileNo"
          value={data.customMobileNo}
          placeholder="CUSTOMER MOBILE NO*"
          type="number"
        ></input>
        {/* <br /> */}
        <textarea
          onChange={(e) => handleInduptChange(e)}
          id="customerAddress"
          value={data.customerAddress}
          placeholder="ENTER YOUR ADDRESS*"
        ></textarea>
        {/* <br /> */}
        <select onChange={(e) => handleInduptChange(e)} id="zipCode">
          <option>SELECT ZIPCODE</option>
          <option value="110001">110001</option>
          <option value="110002">110002</option>
          <option value="110003">110003</option>
          <option value="110004">110004</option>
          <option value="110005">110005</option>
          <option value="110006">110006</option>
          <option value="110007">110007</option>
          <option value="110008">110008</option>
          <option value="110009">110009</option>
          <option value="110010">110010</option>
        </select>
        {/* <br /> */}
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
        {/* <br /> */}
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
        {/* <br /> */}
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
        {/* <p>Only applicable on Firefox Bikes</p> */}
        {/* <br /> */}
        <input
          onChange={(e) => handleInduptChange(e)}
          type="date"
          id="dateOfService"
          value={data.dateOfService}
          placeholder="DATE OF SERVICE*"
        ></input>
        {/* <br /> */}
        <select onChange={(e) => handleInduptChange(e)} id="timeSlot">
          <option>SELECT TIME SLOT*</option>
          <option value="9.30AM-11.30AM">9.30AM-11.30AM</option>
          <option value="12.30PM-2.30PM">12.30PM-2.30PM</option>
          <option value="3.30PM-5.30PM">3.30PM-5.30PM</option>
        </select>
        {/* <br /> */}
        <select onChange={(e) => handleInduptChange(e)} id="selectPackage">
          <option>SELECT PACKAGE</option>
          <option value="standardGearless">
            STANDARD SERVICE FOR GEARLESS BIKES (INR 1099)
          </option>
          <option value="premiumGearless">
            PREMIUM SERVICE FOR GEARLESS BIKES (INR 1299)
          </option>
          <option value="standardGeared">
            STANDARD SERVICE FOR GEARED BIKES (INR 1299)
          </option>
          <option value="premiumGeared">
            PREMIUM SERVICE FOR GEARED BIKES (INR 1499)
          </option>
        </select>
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
