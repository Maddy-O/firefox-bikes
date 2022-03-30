import { useState } from "react";
import Axios from "axios";

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

  return (
    <>
      <h1>Service Station</h1>
      <form onSubmit={(e) => submit(e)}>
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
    </>
  );
};
