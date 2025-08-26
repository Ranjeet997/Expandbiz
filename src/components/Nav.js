import React from "react";

export default function Nav() {
  return (
    <>
      {/* ====== NAVBAR ====== */}
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand text-center" href="/">
            <img
              src="/images/EXPANDBIZ_logo.png"
              alt="Strategic"
              height="45"
            />
            <p className="logo_text text-light m-0" style={{fontSize:"10px"}}>EXPANDBIZ</p>
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
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
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
                      href="https://www.exito-e.com/flagship-events/"
                    >
                      Flagship Events
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://www.exito-e.com/customized-events/"
                    >
                      Customized Events
                    </a>
                  </li>
                  <li>
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
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  ABOUT US
                </a>
              </li>

              {/* <!-- SERVICES Dropdown --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Consulting
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Digital Solutions
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Marketing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
