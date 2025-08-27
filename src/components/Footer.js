import React from "react";
import { footer } from "../all_data_obj/data_obj";

const Footer = () => {
  const data = footer[0]; // shortcut

  return (
    <footer className="footer-section position-relative text-white">
      {/* Background Images */}
      <img src="/images/background.png" alt="bg-left" className="footer-bg-1" />
      <img src="/images/background.png" alt="bg-right" className="footer-bg-2" />

      <section className="position-relative py-5">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Logo */}
            <div className="col-12 col-md-4 mb-4 mb-md-0 text-center d-flex align-items-center">
              <img
                src="/images/EXPANDBIZ_logo.png"
                alt="Strategic Logo"
                className="footer-logo img-fluid"
              />
              <p className="px-3 logo_text m-0">EXPANDBIZ</p>
            </div>

            {/* Middle Links */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="row">
                {/* Quick Links */}
                <div className="col-6 text-center">
                  <p className="fw-bold text-uppercase">{data.heading_1}</p>
                  <ul className="list-unstyled">
                    {data.content_1.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <a
                          href={item.link}
                          className="footer-link text-white text-decoration-none"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Events */}
                <div className="col-6 text-center">
                  <p className="fw-bold text-uppercase">{data.heading_2}</p>
                  <ul className="list-unstyled">
                    {data.content_2.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <a
                          href={item.link}
                          className="footer-link text-white text-decoration-none"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Contact */}
            <div className="col-12 col-md-4 text-center text-md-start">
              <div className="mb-3">
                <a
                  href={`tel:${data.contact.phone}`}
                  className="d-block text-white text-decoration-underline mb-3"
                >
                  {data.contact.phone}
                </a>
                <a
                  href={`mailto:${data.contact.email}`}
                  className="d-block text-white text-decoration-underline"
                >
                  {data.contact.email}
                </a>
              </div>

              {/* Social Media */}
              <div className="social-media mt-3">
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="me-3 text-white fs-5"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href={data.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="me-3 text-white fs-5"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href={data.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-5"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Styling */}
      <style jsx>{`
        .footer-section {
          background-color: #001b38;
          overflow: hidden;
        }
        .footer-logo {
          max-width: 50px;
        }
        .footer-link:hover {
          color: #f0c24b; /* gold hover effect */
        }
        .footer-section .footer-bg-1 {
          position: absolute;
          left: -18%;
          top: 18%;
          width: 50%;
          opacity: 0.5;
          transform: rotate(188deg);
          z-index: 1;
        }
        .footer-section .footer-bg-2 {
          position: absolute;
          right: -18%;
          top: -10%;
          width: 50%;
          opacity: 0.5;
          transform: rotate(209deg);
          z-index: 1;
        }
        .logo_text {
          font-size: 28px;
          font-family: "droid-serif", serif;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
