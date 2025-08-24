import React, { useState } from "react";
import './home.css';
import TimelineCarousel from "./TimelineCrousel";

const businessDomains = [
  {
    title: "EXHIBITIONS",
    subtitle: "Sparking Connections",
    description:
      "We offer clients meticulous planning, dynamic marketing, and seamless organization of exhibitions, creating a vibrant platform to showcase their projects, products, and services.",
    videoPosition: "right",
    bg: "gray-bg",
  },
  {
    title: "CONFERENCES",
    subtitle: "Igniting Collaboration",
    description:
      "We specialize in orchestrating unforgettable conferences, congresses, and both, national and international gatherings, featuring world-renowned speakers who inspire and engage.",
    videoPosition: "left",
    bg: "white-bg",
  },
  {
    title: "TRADE MISSION",
    subtitle: "Unlocking Opportunities",
    description:
      "We coordinate dynamic international visits that bridge the gap between government leaders and business visionaries, unlocking a world of global opportunities.",
    videoPosition: "right",
    bg: "black-bg",
  },
  {
    title: "Event Management",
    subtitle: "Orchestrating Unforgettable Experiences",
    description:
      "We specialize in crafting everything from niche trade events to spectacular consumer shows and grand international gatherings, seamlessly spanning diverse sectors.",
    videoPosition: "left",
    bg: "white-bg",
  },
];

const videoSrc = "https://assets-us-01.kc-usercontent.com/cd358952-bd24-0080-a902-0fd831c563a1/b7979f36-dd53-4d76-9118-b727ac229215/aim2025landingbannervideo.mp4";


export default function () {
  return (
    <>
 
    <TimelineCarousel/>
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
                        style={{ height: '200px', objectFit: 'cover' }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="d-block"
                      >
                        <source src={videoSrc} type="video/mp4" />
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
                        style={{ height: '200px', objectFit: 'cover' }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="d-block"
                      >
                        <source src={videoSrc} type="video/mp4" />
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
            <h2 className="about-heading">The Strategic Difference</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="about-content">
              <p>
                From dunes and desert palms to high-rises and a buzzing hub of
                business, the United Arab Emirates continues to grow radically,
                driven by a vision of sustained success and in pursuit of
                challenging growth. Founded in this very land 25 years ago,
                Strategic Exhibitions and Conferences under Strategic Holding,
                continue with the same philosophy at its heart, committed in its
                drive to create new opportunity, by bringing together the best
                the world has to offer to one common ground. Our specialty sees
                us organising large-scale event that support a plethora of
                industries, with clearly laid out objectives. Innovation is a
                staple at Strategic, with the next event exceeding the outcome
                of the previous. The pursuit for knowledge is an ever-lasting
                thirst, which we are after. We are never focused on one-off
                objectives, each event creating a lasting impression in terms of
                its knowledge dispersal, new connections created, geographical
                boundaries covered, and economic value addition. Our reputation
                precedes our work, with a record list of strategic alliances
                with renowned international organizations and esteemed local
                institutions, being renowned as a trusted partner in the
                industry. Each and every event we organise is curated with all
                of the above values and outcomes in mind, embodying the highest
                standards of quality and creativity. Our global footprint is our
                strength, with offices across the Kingdom of Saudi Arabia,
                Egypt, China, India, Latin America and beyond, allowing us to
                deliver an on-ground, localised service delivery, by bringing
                together communities and empowering not only industries, but
                individuals worldwide.
              </p>
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
