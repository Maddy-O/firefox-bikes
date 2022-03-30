import { ServiceStationForm } from "../BikeService/ServiceStationForm";
import { HomeServiceForm } from "../BikeService/HomeServiceForm";
import { useState } from "react";
import ServicePackages from "./ServicePackages";

export const BikeService = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        SERVICE STATION
      </button>
      <button
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        HOME SERVICE
      </button>
      <h1>BOOK A SERVICE</h1>
      <button>View Packages</button>
      {isToggled ? <ServiceStationForm /> : <HomeServiceForm />}
      <ServicePackages />
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
