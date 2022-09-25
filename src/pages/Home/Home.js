import React from "react";
import { Carousel } from "antd";
import Listcourses from "./ListCourses/Listcourses";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
// import slider from '../../assets/img/slider.png'
export default function Home(props) {
  return (
    <div >
      <Carousel >
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <img src="./img/slider.png" className="w-full block" style={contentStyle} />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Listcourses />
    </div>
  );
}
