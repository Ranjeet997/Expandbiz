import React from "react";
import Nav from "./Nav";
import { hero_content } from "../all_data_obj/data_obj";

export default function Hero() {
  return (
    <>
      <div className="background_img position-relative w-100">
        {/* ====== HERO BANNER ====== */}
        <Nav />
        <div
          className="home-banner-wrapper text-white d-flex align-items-center"
          style={{ height: "75vh" }}
        >
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
            <div className="row">
              <div className="col-12 col-md-6 text-center">
                <h2 className="banner-heading">{hero_content[0].Heading}</h2>
                <h2 className="banner-subheading mt-3 text-uppercase">
                  {hero_content[0].sub_head}
                </h2>
              </div>
            </div>
          </div>

          {/* Marquee Text */}
          <div className="marquee-container border-top border-bottom border-light">
            <div className="marquee">
              <h2>{hero_content[0].bottom_slider}</h2>
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
          font-size: 2.8rem;
          font-weight: 500;
          z-index: 2;
          position: relative;
        }
        .banner-subheading {
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
        .marquee h2 {
          font-size: 2rem;
          font-weight: 700;
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
