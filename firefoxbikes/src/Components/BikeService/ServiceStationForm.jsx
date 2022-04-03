import { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import "./HomServiceForm.css";

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
          <input
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="zipCode"
            value={data.zipCode}
            placeholder="ZIP CODE"
            type="number"
          ></input>
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
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="purchasedForm"
          >
            <option>PURCHASED FROM*</option>
            <option value="ONLINE">ONLINE</option>
            <option value="OFFLINE">OFFLINE</option>
          </select>
          <select
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="storeForService"
          >
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
          <input
            className="inputDetail"
            onChange={(e) => handleInduptChange(e)}
            id="invoiceNo"
            value={data.invoiceNo}
            placeholder="INVOICE NUMBER"
            type="number"
          />
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
            <h1>FIRST FREE</h1>
            <h1>SERVICE</h1>
            <p>A basic service plan to ensure all safety checks & tuning.</p>
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
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Applicable on new Bikes Within 90 Days of Purchase
              </p>
              <p style={{ marginTop: "0px" }}>*If Required*</p>
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  textAlign: "left",
                  padding: "0px",
                }}
              >
                <ul
                  style={{
                    textAlign: "left",
                    marginLeft: "0px",
                  }}
                >
                  <li>Gear cable lubrication & Tune up*</li>
                  <li>Brake cable lubrication & Tune up*</li>
                  <li>Tightening of all nuts & bolts*</li>
                  <li>Wire caping*</li>
                </ul>
                <ul>
                  <li>Dry-cleaning</li>
                  <li>Air pressure in Tires</li>
                  <li>Seat post lubrication*</li>
                  <li>Chain degreasing & lubrication*</li>
                </ul>
              </div>
              <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                <p>
                  Free service can only be availed at the same store from where
                  the bike was purchased. Free service booking at any other
                  store will result into booking cancellation.
                </p>
                <p>
                  For customers who have bought their bikes online, you can
                  avail the first free service at your nearest authorised
                  Firefox store.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* next */}
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
            <h1>BRONZE</h1>
            <p>
              Suitable for Kids Bikes and Gearless Bikes Recommended every 3
              months.
            </p>
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
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Annual Package
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹800/-
              </p>
              <p style={{ marginTop: "0px" }}>(3 Service a Year)</p>
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Single Service
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹350/-
              </p>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
              }}
            >
              <ul
                style={{
                  textAlign: "left",
                  marginLeft: "0px",
                }}
              >
                <li>Gear cable lubrication & Tune up*</li>
                <li>Brake cable lubrication & Tune up*</li>
                <li>Tightening of all nuts & bolts*</li>
                <li>Wire caping*</li>
              </ul>
              <ul>
                <li>Dry-cleaning</li>
                <li>Air pressure in Tires</li>
                <li>Seat post lubrication*</li>
                <li>Chain degreasing & lubrication*</li>
              </ul>
            </div>
          </div>
        </div>
        {/* nexxxxxxxxxxxxxt */}
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
            <h1>SILVER</h1>
            <p>
              Suitable for basic maintenance of Geared Bikes Recommended every 3
              months.
            </p>
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
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Annual Package
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹1500/-
              </p>
              <p style={{ marginTop: "0px" }}>(3 Service a Year)</p>
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Single Service
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹600/-
              </p>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
              }}
            >
              <ul
                style={{
                  textAlign: "left",
                  marginLeft: "0px",
                }}
              >
                <li>Gear cable lubrication & Tune up*</li>
                <li>Brake cable lubrication & Tune up*</li>
                <li>Tightening of all nuts & bolts*</li>
                <li>Wire caping*</li>
                <li>Dry-cleaning</li>
                <li>Air pressure in Tires</li>
              </ul>
              <ul>
                <li>Seat post lubrication*</li>
                <li>Pedal greasing</li>
                <li>All QR Greasing</li>
                <li>Chain degreasing & lubrication*</li>
                <li>Degreasing & lubricating drivetrain</li>
                <li>FD & RD adjustment / gear tuning</li>
              </ul>
            </div>
          </div>
        </div>
        {/* nexxxxxxxxxxxxxt */}
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
            <h1>GOLD</h1>
            <p>
              A comprehensive package suitable for Geared Bikes Recommended
              every 3 months.
            </p>
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
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Annual Package
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹2700/-
              </p>
              <p style={{ marginTop: "0px" }}>(3 Service a Year)</p>
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Single Service
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹1100/-
              </p>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
              }}
            >
              <ul
                style={{
                  textAlign: "left",
                  marginLeft: "0px",
                }}
              >
                <li>Gear cable lubrication & Tune up*</li>
                <li>Brake cable lubrication & Tune up*</li>
                <li>Tightening of all nuts & bolts*</li>
                <li>Wire caping*</li>
                <li>Dry-cleaning</li>
                <li>Air pressure in Tires</li>
                <li>Headset adjustment & greasing</li>
              </ul>
              <ul>
                <li>Seat post lubrication*</li>
                <li>Pedal greasing</li>
                <li>All QR Greasing</li>
                <li>Chain degreasing & lubrication*</li>
                <li>Degreasing & lubricating drivetrain</li>
                <li>FD & RD adjustment / gear tuning</li>
                <li>Cassette removing & cleaning</li>
                <li>Brake pads / disc cleaning</li>
              </ul>
            </div>
          </div>
        </div>
        {/* nexxxxxxxxxxxxxt */}
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
            <h1>PLATINUM</h1>
            <p>
              Suitable for heavily used Performance Bikes Recommended every 6
              months.
            </p>
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
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Annual Package
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹4500/-
              </p>
              <p style={{ marginTop: "0px" }}>(3 Service a Year)</p>
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Single Service
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "0px",
                  color: "#ff5000",
                }}
              >
                ₹1800/-
              </p>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
              }}
            >
              <ul
                style={{
                  textAlign: "left",
                  marginLeft: "0px",
                }}
              >
                <li>Gear cable lubrication & Tune up*</li>
                <li>Brake cable lubrication & Tune up*</li>
                <li>Tightening of all nuts & bolts*</li>
                <li>Wire caping*</li>
                <li>Dry-cleaning</li>
                <li>Air pressure in Tires</li>
                <li>Seat post lubrication*</li>
                <li>Chain degreasing & lubrication*</li>
                <li>Degreasing & lubricating drivetrain</li>
                <li>Bike polish</li>
              </ul>
              <ul>
                <li>All QR Greasing</li>
                <li>Wheel alignment</li>
                <li>Pedal greasing</li>
                <li>Bottom bracket checkup</li>
                <li>FD & RD adjustment / gear tuning</li>
                <li>Headset adjustment & greasing</li>
                <li>Cassette removing & cleaning</li>
                <li>Brake pads / disc cleaning</li>
                <li>Wheel hub greasing front & rear</li>
              </ul>
            </div>
          </div>
        </div>
        {/* nexxxxxxxxxxxxxt */}
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
              width: "82%",
              display: "flex",
              backgroundColor: "whitesmoke",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                padding: "0px",
              }}
            >
              <ul
                style={{
                  textAlign: "left",
                  marginLeft: "0px",
                }}
              >
                <li>Puncture: ₹100/-</li>
                <li>Bike instruction labour charges: ₹100/-</li>
                <li>Part Replacement Labour Charges: ₹100/-</li>
              </ul>
              <ul>
                <li>Hydraulic Brake Bleeding (Front or rear): ₹800/-</li>
                <li>
                  Front Suspension cleaning, Greasing & Lubrication: ₹500/-
                </li>
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
              In case of puncture, we recommend the user to get the tube
              replaced instead of getting the puncture repaired.
            </li>
            <li>
              Labour charges apply on selected part replacement (Bottom Bracket,
              Derailleurs, Hangers, Fork, Headset etc.).
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p style={{ color: "#ff5000", fontSize: "25px", textAlign: "left" }}>
          TERMS AND CONDITIONS
        </p>
        <ol>
          <li style={{ fontWeight: "bolder" }}>
            Free service is only applicable for those customers who are availing
            their first free service.
          </li>
          <li style={{ fontWeight: "bolder" }}>
            Free Service is applicable within 3 months of Bike Purchase.
          </li>
          <li style={{ fontWeight: "bolder" }}>
            Due to lockdown and curfew, store timings may get affected. Please
            check with the store before making a visit.
          </li>
          <li>
            Service once booked cannot be cancelled whether you avail it or not.
          </li>
          <li>
            For customers who have bought their bikes online, you can avail the
            first free service at your nearest authorised Firefox store.
          </li>
          <li>
            It is mandatory to carry the original invoice or Free Service card
            with you when you get the bike to our stores for servicing.
          </li>
          <li>
            Once the service is booked, you do not have to pay any amount at
            Firefox store for the things covered under the service.
          </li>
          <li>
            Please read the package details carefully before choosing a service
            package.
          </li>
          <li>
            All services under a package can only be availed at one store.
          </li>
          <li>Service is non transferrable.</li>
          <li>Replacement of bike part(s) will be additionally charged.</li>
          <li>Annual packages are valid for 1 year from Date of Booking.</li>
          <li>
            {" "}
            Single Service is valid for 1 month from the Date of Booking. If not
            availed within 1 month, the booking will be cancelled without
            refund.
          </li>
        </ol>
      </div>
    </div>
  );
};
