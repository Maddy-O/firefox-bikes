import { ServiceStationForm } from "../BikeService/ServiceStationForm";
import { HomeServiceForm } from "../BikeService/HomeServiceForm";
import { useState } from "react";
import styled from "styled-components";


export const BikeService = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <>
      <img src="bikes-banner_7.jpg"></img>
      <div style={{ marginTop: "25px" }}>
        <button
          onClick={() => {
            setIsToggled(!isToggled);
          }}
          style={{
            backgroundColor: "black",
            color: "white",
            height: "50px",
            width: "200px",
            border: "0px",
            margin: "15px",
            fontWeight: "bolder",
          }}
        >
          SERVICE STATION
        </button>
        <button
          onClick={() => {
            setIsToggled(!isToggled);
          }}
          style={{
            backgroundColor: "#ff5000",
            color: "white",
            height: "50px",
            width: "200px",
            border: "0px",
            margin: "15px",
            fontWeight: "bolder",
          }}
        >
          HOME SERVICE
        </button>
        {isToggled ? <ServiceStationForm /> : <HomeServiceForm />}
        {/* <ServicePackages /> */}
      </div>
    </>
  );
};
//-----------------------Conditional rendring-----------------/
// import React, { Component } from "react";
// import { HomeServiceForm } from "../BikeService/HomeServiceForm";
// import { ServiceStationForm } from "../BikeService/ServiceStationForm";

// class BikeService extends Component {
// //   const [isToggled,setIsToggled] = React.useState(false);
//   constructor(props) {
//     super(props);
//     this.state = {
//       isserviceSattion: false,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <button>SERVICE STATION</button>
//         <button>HOME SERVICE</button>
//         {this.state.isserviceSattion ? (
//           <HomeServiceForm />
//         ) : (
//           <ServiceStationForm />
//         )}
//       </div>
//     );
//   }
// }

// export { BikeService };
