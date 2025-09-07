import React from "react";
import Nav from "./Nav";
import { hero_content } from "../all_data_obj/data_obj";

export default function Hero() {
  return (
    <>
      <div className="background_img position-relative w-100">
        {/* ====== HERO BANNER ====== */}
        <Nav />
        <div id="home" className="home-banner-wrapper">
          {/* Background images */}
          {/* <img
            className="banner-bg-1"
            src="/images/background.png"
            alt="Strategic"
          />
          <img
            className="banner-bg-2"
            src="/images/background.png"
            alt="Strategic"
          /> */}
          <div className="container">
          <div
            className="row text-white d-flex align-items-center text-center"
            style={{ height: "100%" }}
          >
            <div className="col-12 col-md-6">
              <h2 className="banner-heading">{hero_content[0].Heading}</h2>
              {/* <h2 className="banner-subheading mt-3 text-uppercase">
                  <span style={{width: "10vw"}}>{hero_content[0].sub_head_1}</span>
                  <span style={{width: "10vw"}}>{hero_content[0].sub_head_2}</span>
                  <span style={{width: "10vw"}}>{hero_content[0].sub_head_3}</span>
                </h2> */}
              {/* <div className="bg-dark py-3"> */}
              <div className="container text-center">
                <div className="d-flex justify-content-center align-items-center text-uppercase fs-6 fw-bold" style={{fontFamily: 'Poppins', color: 'rgb(248 212 104)'}}>
                  {/* First Item */}
                  <span className="px-3">B2B Events</span>

                  <span
                    className="border-start border-white mx-2"
                    style={{ height: "35px" }}
                  ></span>

                  <span className="px-3">
                    Customised <br /> Experiences
                  </span>
                  <span
                    className="border-start border-white mx-2"
                    style={{ height: "35px" }}
                  ></span>

                  <span className="px-3">
                    Strategic <br /> Partnerships
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img
                src="/images/globe_png.png"
                alt=""
                style={{ width: "100%", opacity: "0.5"}}
              />
            </div>
          </div></div>

          {/* Marquee Text */}
          <div className="marquee-container border-top border-bottom border-light">
            <div className="marquee">
              <h2 className="fs-2 fw-semibold" style={{fontFamily:'Roboto'}}>{hero_content[0].bottom_slider}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Custome CSS */}
      <style jsx>{`
        .nav-link {
          color: white !important;
          margin: 0 10px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .nav-link:hover {
          color: #ffcc00 !important;
        }
        .lang-switch {
          color: #ffcc00 !important;
          font-weight: bold;
        }

        /* BANNER */

        .background_img {
          background: url("/images/background_img.png") no-repeat center;
          background-size: cover;
          overflow: hidden;
          height: 100vh;
        }
        // .home-banner-wrapper .banner-bg-1 {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 50%;
        //   opacity: 0.2;
        //   transform: rotate(193deg);
        // }
        // .home-banner-wrapper .banner-bg-2 {
        //   position: absolute;
        //   top: -20px;
        //   right: -40px;
        //   width: 57%;
        //   opacity: 0.2;
        //   transform: rotate(-30deg);
        // }
        .banner-heading {
          font-family: "Poppins";
          font-size: 3.4rem;
          font-weight: 300;
          z-index: 2;
          position: relative;
        }
        .banner-subheading {
          font-family: "Poppins";
          font-size: 1.2rem;
          color: #ffcc00;
          margin-top: 10px;
          z-index: 2;
          position: relative;
        }
        .line-break {
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin: 40px 0;
        }

        /* MARQUEE */
        .marquee-container {
          position: absolute;
          bottom: 0px;
          width: 100%;
          overflow: hidden;
          color: #ffcc00;
          padding: 15px 0;
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        /* Enable hover dropdown in Bootstrap navbar */
        .navbar .dropdown:hover .dropdown-menu {
          display: block;
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
