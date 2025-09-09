import React, { useState, useRef } from "react";

export default function Contact_Us() {
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phone: "",
  //   country: "",
  //   business: "",
  //   message: "",
  // });

  // Handle input change
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://excel.cloud.microsoft/open/onedrive/?docId=7B106AF4E4B5109%21s1ce3710aed6b4a858d4cced206a91680&driveId=07B106AF4E4B5109", {
        method: "POST",
        body: new FormData(formRef.current),
      });
      const data = await response.json();
      console.log(data);
      alert(data.msg || "Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Handle form submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const phoneNumber = "917428776906";

  //   const text = `New Contact Form Submission:
  //   Name: ${formData.firstname} ${formData.lastname}
  //   Email: ${formData.email}
  //   Phone: ${formData.phone}
  //   Country: ${formData.country}
  //   Business Nature: ${formData.business}
  //   Message: ${formData.message}`;

  //   // Encode and open WhatsApp
  //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  //   window.open(url, "_blank");
  // };

  return (
    <>
      <section
        id="contact_us"
        className="contact-section"
        style={{ background: "#f0f0f0" }}
      >
        {/* <img className="contact-bg" src="/images/about_us_img.webp" /> */}

        <div
          className="contact-main-div position-relative overflow-hidden"
          style={{ padding: "60px 20px" }}
        >
          <div className="contactus-wrapper" id="contact-us">
            <img className="contactus-patern-1" src="/images/background.png" />
            <img className="contactus-patern-2" src="/images/background.png" />
          </div>

          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="row">
              <div className="col-md-6">
                <p className="subheading">
                  Looking to organize an event? Get in touch with us.
                </p>

                <form
                  className="contact-form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  style={{ fontFamily: "Poppins" }}
                >
                  <div className="row">
                    <div className="form-group col-12 col-md-6 mb-4">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-control custom-input"
                        placeholder="First Name"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-12 col-md-6 mb-4">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control custom-input"
                        placeholder="Last Name"
                        // value={formData.lastname}
                        // onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-12 col-md-6 mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control custom-input"
                        placeholder="Email Address"
                        // value={formData.email}
                        // onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-12 col-md-6 mb-4">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control custom-input"
                        placeholder="Phone Number"
                        // value={formData.phone}
                        // onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-12 col-md-6 mb-4">
                      <select
                        name="country"
                        className="form-select custom-input"
                        // value={formData.country}
                        // onChange={handleChange}
                        required
                      >
                        <option value="">Country</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>

                    <div className="form-group col-12 col-md-6 mb-4">
                      <select
                        name="business"
                        className="form-select custom-input"
                        // value={formData.business}
                        // onChange={handleChange}
                        required
                      >
                        <option value="">Business Nature</option>
                        <option value="Consultancy">Consultancy</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="IT/ICT">IT / ICT</option>
                      </select>
                    </div>

                    <div className="form-group col-12 mb-4">
                      <textarea
                        className="form-control custom-input"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        // value={formData.message}
                        // onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="form-group col-12 text-center">
                      <button type="submit" className="send-btn">
                        SEND
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custome CSS */}
      <style jsx>{`
        .contact-section .contact-bg {
          height: 200px;
          opacity: 0.7;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .contact-main-div .contactus-wrapper .contactus-patern-1 {
          position: absolute;
          width: 60%;
          right: -3%;
          opacity: 0.2;
          transform: rotate(146deg);
          top: -3%;
          z-index: 1;
        }
        .contact-main-div .contactus-wrapper .contactus-patern-2 {
          position: absolute;
          width: 50%;
          left: -3%;
          opacity: 0.2;
          transform: rotate(191deg);
          top: 5%;
          z-index: 1;
        }
        .custom-input {
          border: none;
          outline: none;
          padding: 11px;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        .contact-form .custom-input:focus {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        /* Background pattern */
        .contact-section::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 100%;
          background: url("/assets/imgs/line-pattern.png") no-repeat center
            right;
          background-size: cover;
          opacity: 0.3;
          pointer-events: none;
        }
        .subheading {
          font-family: "Poppins";
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .send-btn {
          width: 100%;
          background: #d4a017;
          color: #fff;
          border: none;
          padding: 12px 40px;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1.1rem;
          transition: 0.3s ease;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        .send-btn:hover {
          background: #b98b14;
        }
      `}</style>
    </>
  );
}
