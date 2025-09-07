import React from "react";

export default function Nav() {
  return (
    <>
      {/* ====== NAVBAR ====== */}
      <nav className="navbar navbar-expand-lg py-3 bg-transparent"  style={{fontFamily: "Poppins"}}>
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/EXPANDBIZ_logo.png"
              alt="Strategic"
              height="35"
            />
            <p className="mx-2 logo_text text-light m-0" style={{fontSize:'18px'}}>EXPANDBIZ</p>
          </a>

          {/* Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  HOME
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li> */}
              {/* <!-- EVENTS Dropdown --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="eventsDropdown"
                  role="button"
                >
                  EVENTS
                </a>
                <ul class="dropdown-menu" aria-labelledby="eventsDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >
                      India
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >
                     Middle East
                    </a>
                  </li>
                  {/* <li>
                    <a
                      class="dropdown-item"
                      href="https://www.exito-e.com/lead-generation/"
                    >
                      Lead Generation
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://www.exito-e.com/tele-services/"
                    >
                      Tele-Services
                    </a>
                  </li> */}
                </ul>
              </li>

              {/* <!-- SERVICES Dropdown --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#services"
                  id="servicesDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <a class="dropdown-item" href="#busines_domain_0">
                    Conferences
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#busines_domain_1">
                     Customized Events
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#busines_domain_2">
                     Event Execution & On-Site Support
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#busines_domain_3">
                    Marketing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#busines_domain_4">
                    Lead Generation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact_us">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
