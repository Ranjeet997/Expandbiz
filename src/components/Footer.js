import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-section position-relative text-white">
        {/* Background Images */}
        <img
          src="/images/background.png"
          alt="bg-left"
          className="footer-bg-1"
        />
        <img
          src="/images/background.png"
          alt="bg-right"
          className="footer-bg-2"
        />

        <section
          className="position-relative py-5"
        >
          <div className="container">
            <div className="row align-items-start">
              {/* Left Logo */}
              <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
                <img
                  src="/images/logo.jpg"
                  alt="Strategic Logo"
                  className="footer-logo img-fluid"
                />
              </div>

              {/* Middle Links */}
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="row">
                  <div className="col-6 text-center">
                    <p className="fw-bold text-uppercase">Quick Links</p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a
                          href="/?section=our-journey"
                          className="footer-link text-white text-decoration-none"
                        >
                          Our Journey
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="/?section=portfolio"
                          className="footer-link text-white text-decoration-none"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="/press"
                          className="footer-link text-white text-decoration-none"
                        >
                          Press
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="/?section=contact-us"
                          className="footer-link text-white text-decoration-none"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 text-center">
                    <p className="fw-bold text-uppercase">Events</p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a
                          href="/events?country=dubai"
                          className="footer-link text-white text-decoration-none"
                        >
                          Dubai
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="/events?country=saudi"
                          className="footer-link text-white text-decoration-none"
                        >
                          Saudi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Contact */}
              <div className="col-12 col-md-4 text-center text-md-start">
                <div className="mb-3">
                  <a
                    href="tel:+97143282000"
                    className="d-block text-white text-decoration-underline mb-3"
                  >
                    +971 4 328 2000
                  </a>
                  <a
                    href="mailto:info@strategic.ae"
                    className="d-block text-white text-decoration-underline"
                  >
                    info@strategic.ae
                  </a>
                </div>
                {/* Social Media */}
                <div className="social-media mt-3">
                  <a
                    href="https://www.linkedin.com/company/strategic-marketing-&-exhibitions"
                    target="_blank"
                    rel="noreferrer"
                    className="me-3 text-white fs-5"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/pages/category/Marketing-Agency/Strategic-Holding-111767823674647/"
                    target="_blank"
                    rel="noreferrer"
                    className="me-3 text-white fs-5"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/strategicholdi1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white fs-5"
                  >
                    <i class="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* Extra Styling */}
      <style jsx>{`
        .footer-section {
          background-color: #001b38;
          overflow: hidden;
        }
        .footer-logo {
          max-width: 250px;
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
      `}</style>
    </>
  );
};

export default Footer;
