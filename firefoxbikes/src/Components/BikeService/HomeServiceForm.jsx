import { useState } from "react";
import Axios from "axios";
import "./HomServiceForm.css";

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
    <div
      style={{
        boxSizing: "border-box",
        color: "rgb(51, 51, 51)",
        direction: "ltr",
        display: "block",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "13px",
        fontWeight: "500",
        lineHeight: "18.5714px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "0px",
        outlineColor: "rgb(51, 51, 51)",
        outlineStyle: "none",
        outlineWidth: "0px",
        paddingBottom: "0px",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "0px",
        textAlign: "left",
        textSizeAdjust: "100%",
        unicodeBidi: "isolate",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4
          style={{
            boxSizing: "border-box",
            color: "rgb(255, 80, 0)",
            display: "inline-block",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "25px",
            fontWeight: "500",
            lineHeight: "33.75px",
            marginBlockEnd: "20px",
            marginBlockStart: "20px",
            marginBottom: "20px",
            marginTop: "20px",
            outlineColor: "rgb(255, 80, 0)",
            outlineStyle: "none",
            textAlign: "left",
            textSizeAdjust: "100%",
            textTransform: "uppercase",
          }}
        >
          BOOK A SERVICE
        </h4>
        <a
          style={{
            marginLeft: "auto",
            alignItems: "flex-start",
            textDecoration: "none",
            backgroundColor: "rgb(255, 80, 0)",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            display: "block",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            fontWeight: "500",
            height: "32.1875px",
            lineHeight: "32.2px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textAlign: "center",
            textRendering: "auto",
            textSizeAdjust: "100%",
            width: "136.812px",
            writingMode: "horizontal-tb",
          }}
          href="#packages"
        >
          View Packages
        </a>
      </div>
      <form
        className="homeServiceForm"
        onSubmit={(e) => submit(e)}
        style={{
          boxSizing: "border-box",
          color: "rgb(51, 51, 51)",
          display: "inline",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "13px",
          fontWeight: "500",
          height: "auto",
          linHeight: "18.5714px",
          outlineColor: "rgb(51, 51, 51)",
          outlineStyle: "none",
          textAlign: "left",
          textSizeAdjust: "100%",
        }}
      >
        <div>
          <input
            onChange={(e) => handleInduptChange(e)}
            id="customerName"
            value={data.customerName}
            placeholder="CUSTOMER NAME*"
            type="text"
            style={{
              appearance: "auto",
              boxShadow: "none",
              boxSizing: "border-box",
              color: "rgb(0, 0, 0)",
              cursor: "text",
              display: "inline-block",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontStretch: "100%",
              fontWeight: "500",
              height: "38px",
              letterSpacing: "normal",
              lineHeight: "18.5714px",
              listStyleImage: "none",
              listStylePosition: "outside",
              listStyleType: "none",
              outlineColor: "rgb(0, 0, 0)",
              outlineStyle: "none",
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px",
              textAlign: "start",
              textIndent: "0px",
              textRendering: "auto",
              textShadow: "none",
              textSizeAdjust: "100%",
              textTransform: "uppercase",
              verticalAlign: "middle",
              width: "360px",
              writingMode: "horizontal-tb",
            }}
          ></input>
          {/* <br /> */}
          <input
            onChange={(e) => handleInduptChange(e)}
            id="customerEmail"
            value={data.customerEmail}
            placeholder="CUSTOMER EMAIL*"
            type="text"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          ></input>
          {/* <br /> */}
          <input
            onChange={(e) => handleInduptChange(e)}
            id="customMobileNo"
            value={data.customMobileNo}
            placeholder="CUSTOMER MOBILE NO*"
            type="number"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          ></input>
          {/* <br /> */}
          <textarea
            onChange={(e) => handleInduptChange(e)}
            id="customerAddress"
            value={data.customerAddress}
            placeholder="ENTER YOUR ADDRESS*"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          ></textarea>
          {/* <br /> */}
          <select
            onChange={(e) => handleInduptChange(e)}
            id="zipCode"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          >
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
          <select
            onChange={(e) => handleInduptChange(e)}
            id="StaticRangeState"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          >
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
          <select
            onChange={(e) => handleInduptChange(e)}
            id="StaticRangecity"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          >
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
          <select
            onChange={(e) => handleInduptChange(e)}
            id="bikeName"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          >
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
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          ></input>
          {/* <br /> */}
          <select
            onChange={(e) => handleInduptChange(e)}
            id="timeSlot"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          >
            <option>SELECT TIME SLOT*</option>
            <option value="9.30AM-11.30AM">9.30AM-11.30AM</option>
            <option value="12.30PM-2.30PM">12.30PM-2.30PM</option>
            <option value="3.30PM-5.30PM">3.30PM-5.30PM</option>
          </select>
          {/* <br /> */}
          <select
            onChange={(e) => handleInduptChange(e)}
            id="selectPackage"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "block",
              float: "left",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              height: "58px",
              lineHeight: "18.5714px",
              minHeight: "1px",
              outlineColor: "rgb(51, 51, 51)",
              outlineStyle: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
              position: "relative",
              textAlign: "left",
              textSizeAdjust: "100%",
              width: "390px",
            }}
          >
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
          {/* <br /> */}
          {/* <br /> */}
        </div>
        <div>
          <input
            id="tnc"
            type="checkbox"
            onChange={(e) => handleInduptChange(e)}
          />
          <span>I accept Terms and Conditions</span>
          {/* <br /> */}
          {/* <br /> */}
          <button type="submit">Book Service</button>
        </div>
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
