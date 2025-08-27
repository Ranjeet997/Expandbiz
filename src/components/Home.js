import React, { useState } from "react";
import "./home.css";
import TimelineCarousel from "./TimelineCrousel";
import { businessDomains, the_Strategic_obj } from "../all_data_obj/data_obj";

export default function () {
  return (
    <>
      <TimelineCarousel />
      <div className="core-business-wrapper pb-5">
        <div className="pattern-header">
          <img
            className="core-pattern"
            src="/assets/imgs/patern-white.png"
            alt="pattern"
          />
          <div className="container">
            <h2 className="heading-wrap">
              <span className="heading">CORE </span>
              <span className="sub-heading">Business Domains</span>
            </h2>
            <div className="dots-white-bg d-flex gap-2 mt-3">
              <div className="dot dot-3"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-4"></div>
            </div>
          </div>
        </div>

        {businessDomains.map((domain, index) => (
          <div className="section my-4" key={index}>
            <div className={`container ${domain.bg}`}>
              <div className="row align-items-center">
                {/* Video or Image First (Alternating layout) */}
                {domain.videoPosition === "left" && (
                  <div className="col-md-6 p-0">
                    <div className="core-video">
                      <video
                        width="100%"
                        style={{ height: "200px", objectFit: "cover" }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="d-block"
                      >
                        <source src={domain.videoSrc} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                )}

                <div className="col-md-6">
                  <div className="core-content text-white">
                    <h2 className="domain-title">{domain.title}</h2>
                    <p className="domain-subtitle">{domain.subtitle}</p>
                    <p className="domain-description">{domain.description}</p>
                  </div>
                </div>

                {/* Video on Right Side */}
                {domain.videoPosition === "right" && (
                  <div className="col-md-6 p-0">
                    <div className="core-video">
                      <video
                        width="100%"
                        style={{ height: "200px", objectFit: "cover" }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="d-block"
                      >
                        <source src={domain.videoSrc} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="strategic-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="about-heading">{the_Strategic_obj[0].heading}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about-content">
                <p>{the_Strategic_obj[0].content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custome CSS */}
      <style jsx>{`
        /* Background pattern on right side */
        .strategic-section::after {
          content: "";
          position: absolute;
          top: 0;
          right: -10%;
          width: 50%;
          height: 100%;
          background: url("/images/background.png") no-repeat center right;
          background-size: contain;
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}
