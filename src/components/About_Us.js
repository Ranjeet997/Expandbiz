import React from "react";
import { about_us } from "../all_data_obj/data_obj";

export default function About_Us() {
  return (
    <>
      {/* About Us */}
      <div className="aboutus container my-5" id="aboutus">
        <div className="feature1 h-100 p-4 border rounded shadow-sm">
          <h2>{about_us[0].heading}</h2>
          <p>{about_us[0].content}</p>
        </div>
      </div>
    </>
  );
}
