import { ServiceStationForm } from "../BikeService/ServiceStationForm";
import { HomeServiceForm } from "../BikeService/HomeServiceForm";
import { useState } from "react";
import styled from "styled-components";

export const BikeService = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <>
      <img src="bikes-banner_7.jpg"></img>
      <div
        style={{
          boxSizing: "border-box",
          color: "rgb(51, 51, 51)",
          display: "block",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "13px",
          fontWeight: "500",
          height: "2569.94px",
          lineHeight: "18.5714px",
          marginBottom: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          marginTop: "0px",
          minHeight: "400px",
          outlineColor: "rgb(51, 51, 51)",
          outlineStyle: "none",
          outlineWidth: "0px",
          paddingBottom: "20px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "20px",
          textAlign: "left",
          textSizeAdjust: "100%",
          width: "1903px",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            color: "rgb(51, 51, 51)",
            display: "block",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            fontWeight: "500",
            height: "2529.94px",
            lineHeight: "18.5714px",
            marginBottom: "0px",
            marginLeft: "366.5px",
            marginRight: "366.5px",
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
            width: "1170px",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 51, 51)",
              display: "flex",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              lineHeight: "18.5714px",
              marginLeft: "-15px",
              marginRight: "-15px",
              outlineColor: "rgb(51, 51, 51)",
              textAlign: "center",
              justifyContent: "center",
              textSizeAdjust: "100%",
              width: "1170px",
            }}
          >
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
                display: "list-item",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "18.5714px",
                outlineColor: "rgb(51, 51, 51)",
                textSizeAdjust: "100%",
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
                display: "list-item",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "18.5714px",
                outlineColor: "rgb(51, 51, 51)",
                textSizeAdjust: "100%",
              }}
            >
              HOME SERVICE
            </button>
            {/* <ServicePackages /> */}
          </div>
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
            {isToggled ? <ServiceStationForm /> : <HomeServiceForm />}
          </div>
        </div>
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
