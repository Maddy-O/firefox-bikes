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
    <div style={{ width: "85%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
          padding: "5px",
          width: "100%",
          marginBottom: "15px",
        }}
      >
        <div style={{ width: "50%" }}>
          <p style={{ color: "#ff5000", fontSize: "25px", textAlign: "left" }}>
            BOOK A SERVICE
          </p>
        </div>
        <div
          style={{
            width: "50%",
            justifyContent: "right",
          }}
        >
          <a
            style={{
              textDecoration: "none",
            }}
            href="#packages"
          >
            <p
              style={{
                border: "1px solid #ff5000",
                width: "100px",
                color: "white",
                padding: "5px",
                backgroundColor: "#ff5000",
                textAlign: "center",
                marginLeft: "75%",
              }}
            >
              View Packages
            </p>
          </a>
        </div>
      </div>
      {/*------------------- form --------------------*/}
      <form onSubmit={(e) => submit(e)}>
        <div className="stationServiceForm">
          <input
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="customerName"
            value={data.customerName}
            placeholder="CUSTOMER NAME*"
            type="text"
          />
          <input
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="customerEmail"
            value={data.customerEmail}
            placeholder="CUSTOMER EMAIL*"
            type="text"
          />
          <input
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="customMobileNo"
            value={data.customMobileNo}
            placeholder="CUSTOMER MOBILE NO*"
            type="number"
          />
          <textarea
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="customerAddress"
            value={data.customerAddress}
            placeholder="ENTER YOUR ADDRESS*"
          />
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="zipCode"
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
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="StaticRangeState"
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
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="StaticRangecity"
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
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="bikeName"
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
          <input
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            type="date"
            id="dateOfService"
            value={data.dateOfService}
            placeholder="DATE OF SERVICE*"
          />
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="timeSlot"
          >
            <option>SELECT TIME SLOT*</option>
            <option value="9.30AM-11.30AM">9.30AM-11.30AM</option>
            <option value="12.30PM-2.30PM">12.30PM-2.30PM</option>
            <option value="3.30PM-5.30PM">3.30PM-5.30PM</option>
          </select>
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="selectPackage"
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
        </div>
        <div style={{ display: "flex" }}>
          <input
            id="tnc"
            type="checkbox"
            onChange={(e) => handleInduptChange(e)}
          />
          <div
            style={{
              display: "flex",
              fontWeight: "bold",
              fontSize: "15px",
              marginLeft: "5px",
            }}
          >
            <div style={{}}>I accept</div>
            <div style={{ marginLeft: "5px", color: "#ff5000" }}>
              {" "}
              Terms and Conditions
            </div>
          </div>
        </div>
        <button className="submitButton" type="submit">
          Book Service
        </button>
      </form>
      {/*------------------ form End -----------------*/}

      <div className="packages" id="packages">
        <p style={{ color: "#ff5000", fontSize: "25px", textAlign: "left" }}>
          Service Packages
        </p>
        <div className="packagesBlock">
          <div
            style={{
              width: "18%",
              textAlign: "center",
              alignItem: "center",
              paddingTop: "30px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "#ff5000",
              color: "white",
            }}
          >
            <h1>STANDARD</h1>
            <h1>SERVICE</h1>
            <p>Gearless Bikes</p>
          </div>
          <div
            style={{
              width: "82%",
              display: "flex",
              backgroundColor: "whitesmoke",
            }}
          >
            <div
              style={{
                width: "20%",
                paddingTop: "50px",
                textAlign: "center",
              }}
            >
              <h3>Standard Service For Gearless Bikes ₹1099/-</h3>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
              }}
            >
              <ul>
                <li>Hubs Checkup</li>
                <li>Alignment of Headset</li>
                <li>Bottom Bracket Checkup</li>
                <li>Check and adjust brakes</li>
                <li>Check and Lube Chain</li>
              </ul>
              <ul>
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
        </div>

        <div className="packagesBlock">
          <div
            style={{
              width: "18%",
              textAlign: "center",
              alignItem: "center",
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "#ff5000",
              color: "white",
              position: "relatives",
            }}
          >
            <h1>PREMIUM</h1>
            <h1>SERVICE</h1>
            <p>Gearless Bikes</p>
          </div>
          <div
            style={{
              width: "82%",
              display: "flex",
              backgroundColor: "whitesmoke",
            }}
          >
            <div
              style={{
                width: "20%",
                paddingTop: "25px",
                paddingBottom: "25px",
                textAlign: "center",
              }}
            >
              <h3>Premium Service For Gearless Bikes ₹1299/-</h3>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
                marginLeft: "0px",
              }}
            >
              <ul>
                <li>Hubs Checkup</li>
                <li>Alignment of Headset</li>
                <li>Bottom Bracket Checkup</li>
                <li>Check and adjust brakes</li>
                <li>Check and Lube Chain</li>
                <li>Hubs Checkup</li>
                <li>Check and Lube Cables</li>
              </ul>
              <ul>
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
        </div>

        <div className="packagesBlock">
          <div
            style={{
              width: "18%",
              textAlign: "center",
              alignItem: "center",
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "#ff5000",
              color: "white",
              position: "relatives",
            }}
          >
            <h1>STANDARD</h1>
            <h1>SERVICE</h1>
            <p>Geared Bikes.</p>
          </div>
          <div
            style={{
              width: "82%",
              display: "flex",
              backgroundColor: "whitesmoke",
            }}
          >
            <div
              style={{
                width: "20%",
                paddingTop: "25px",
                paddingBottom: "25px",
                textAlign: "center",
              }}
            >
              <h3>Standard Service For Geared Bikes ₹1299/-</h3>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
                marginLeft: "0px",
              }}
            >
              <ul>
                <li>Hubs Checkup</li>
                <li>Alignment of Headset</li>
                <li>Bottom Bracket Checkup</li>
                <li>Check and adjust brakes</li>
                <li>Check and Lube Chain</li>
                <li>Hubs Checkup</li>
              </ul>
              <ul>
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
        </div>

        <div className="packagesBlock">
          <div
            style={{
              width: "18%",
              textAlign: "center",
              alignItem: "center",
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "#ff5000",
              color: "white",
              position: "relatives",
            }}
          >
            <h1>PREMIUM</h1>
            <h1>SERVICE</h1>
            <p>Geared Bikes.</p>
          </div>
          <div
            style={{
              width: "82%",
              display: "flex",
              backgroundColor: "whitesmoke",
            }}
          >
            <div
              style={{
                width: "20%",
                paddingTop: "25px",
                paddingBottom: "25px",
                textAlign: "center",
              }}
            >
              <h3>Premium Service For Geared Bikes ₹1499/-</h3>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
                marginLeft: "0px",
              }}
            >
              <ul>
                <li>Gear Tune up</li>
                <li>Hubs Checkup</li>
                <li>Alignment of Headset</li>
                <li>Bottom Bracket Checkup</li>
                <li>Check and adjust brakes</li>
                <li>Check and Lube Chain</li>
                <li>Hubs Checkup</li>
                <li>Check and Lube Cables</li>
              </ul>
              <ul>
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
        </div>

        <div className="packagesBlock">
          <div
            style={{
              width: "18%",
              textAlign: "center",
              alignItem: "center",
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "black",
              color: "white",
              position: "relatives",
            }}
          >
            <h1>ADDITIONAL</h1>
          </div>
          <div
            style={{
              width: "80%",
              display: "flex",
              textAlign: "left",
              padding: "0px",
              marginLeft: "0px",
              backgroundColor: "whitesmoke",
            }}
          >
            <ul>
              <li>Puncture: ₹49/-</li>
              <li>Wheel truing: ₹149/-</li>
              <li>Suspension: ₹199/-</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li>
            Finishline products are used and recommended for Firefox Bike
            Service
          </li>
          <li>
            In case of puncture, we recommend the user to get the tube replaced
            instead of getting the puncture repaired.
          </li>
          <li>
            Labour charges apply on selected part replacement (Bottom Bracket,
            Derailleurs, Hangers, Fork, Headset etc.).
          </li>
        </ul>
      </div>
      <div>
        <p style={{ color: "#ff5000", fontSize: "25px", textAlign: "left" }}>
          TERMS AND CONDITIONS
        </p>
        <ol>
          <li style={{ fontWeight: "bolder" }}>
            Free service is not available at Home.
          </li>
          <li style={{ fontWeight: "bolder" }}>
            Due to lockdown and curfews in certain areas, the bookings slots may
            be rescheduled.
          </li>
          <li>
            Service can be cancelled with full refund atleast 24 hours before
            the service start time. Within 24 hours of the service time no
            refund will be processed.
          </li>

          <li>
            Service can be rescheduled 24 hours before the service starting
            time. Rescheduling within 24 hours can be done paying 200 INR
            additionally.
          </li>

          <li>
            Services can only be rescheduled once. If the service is not availed
            the second time, it will automatically be cancelled without refund.
          </li>
          <li>
            Once the service is booked, you do not have to pay any amount to the
            Firefox Technician.
          </li>
          <li>
            In case of service upgrade or parts replacement, the technician will
            send and invoice and payment link to you.
          </li>
          <li>
            Please read the package details carefully before choosing a service
            package.
          </li>
          <li>Service is non transferrable.</li>
          <li>Replacement of bike part(s) will be additionally charged.</li>
          <li>
            Home service can be booked for anyday apart from Monday and public
            holidays.
          </li>
          <li>Home Service is only applicable on Firefox Bikes.</li>
          <li>Service address cannot be changed once it is booked.</li>
          <li>
            Service time is based on the Package you choose, however, most
            services will take approximately 45-120 minutes.
          </li>
          <li>
            For servicing your bike we would need space like car park, balcony
            or lobby. We request the customers to provide a space without pets
            and kids intervention to avoid accidents.
          </li>
        </ol>
      </div>
    </div>
  );
};
