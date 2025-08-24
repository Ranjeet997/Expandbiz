import React from "react";

const events = [
  {
    year: "2000",
    title: "IPS",
    logo: "https://assets-us-01.kc-usercontent.com/cd358952-bd24-0080-a902-0fd831c563a1/58db52f7-35bf-4f0d-91bb-c3462225a017/ips-color%20%281%29.png",
  },
  {
    year: "2004",
    title: "Dubai WoodShow",
    logo: "https://assets-us-01.kc-usercontent.com/cd358952-bd24-0080-a902-0fd831c563a1/e450fdab-8cdc-476d-9370-68d8d91a0e0f/dubaiwoodshow.png",
  },
  {
    year: "2011",
    title: "AIM Congress",
    logo: "https://assets-us-01.kc-usercontent.com/cd358952-bd24-0080-a902-0fd831c563a1/ca225685-fa3e-43c5-ab3f-69c37e6f755d/Aim-black-logo.png",
  },
  {
    year: "2011",
    title: "Cairo WoodShow",
    logo: "https://assets-us-01.kc-usercontent.com/cd358952-bd24-0080-a902-0fd831c563a1/deb8d597-4005-4af8-b4d2-b001eb7653c5/woodshow%20cairo.png",
  },
  {
    year: "2023",
    title: "WIF",
    logo: "https://assets-us-01.kc-usercontent.com/cd358952-bd24-0080-a902-0fd831c563a1/69e2a275-fadf-4f37-a57c-7bf71fa4fcd8/wif.webp",
  },
];

const chunkEvents = (array, size) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

const TimelineCarousel = () => {
  const chunks = chunkEvents(events, 3);

  return (
      <>
    <div className="container timeline-wrapper my-5">
      <h2 className="text-center mb-4">
        <span style={{ color: "#D4A736" }}>Our </span>Journey
      </h2>

      <div
        id="timelineCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {chunks.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="timeline position-relative">
                {/* Horizontal Line */}
                <div className="timeline-line"></div>

                <div className="row justify-content-between text-center">
                  {group.map((event, idx) => (
                    <div key={idx} className="col timeline-event">
                      {/* Year */}
                      <p className="year-text">{event.year}</p>

                      {/* Dot */}
                      <div className="timeline-dot"></div>

                      {/* Vertical line */}
                      <div className="timeline-connector"></div>

                      {/* Logo + Title */}
                      <div className="timeline-content">
                        <img
                          src={event.logo}
                          alt={event.title}
                          className="img-fluid mb-2"
                          style={{ maxHeight: "70px" }}
                        />
                        <p className="event-title">{event.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Controls */}
        <button
          className="carousel-control-prev custom-control"
          type="button"
          data-bs-target="#timelineCarousel"
          data-bs-slide="prev"
        >
          <span className="custom-arrow">&larr;</span>
        </button>
        <button
          className="carousel-control-next custom-control"
          type="button"
          data-bs-target="#timelineCarousel"
          data-bs-slide="next"
        >
          <span className="custom-arrow">&rarr;</span>
        </button>
      </div>
    </div>

    {/* Custome CSS */}
    <style jsx>{`
        .timeline {
            position: relative;
            padding: 20px 0;
          }
          
          .timeline-line {
            position: absolute;
            top: 55px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #9c988e;
            z-index: 1;
          }
          
          .timeline-event {
            position: relative;
            text-align: center;
          }
          
          .year-text {
            font-weight: bold;
            margin-bottom: 5px;
            color: #777;
          }
          
          .timeline-dot {
            width: 14px;
            height: 14px;
            background-color: #d4a736;
            border-radius: 50%;
            margin: 0 auto;
            z-index: 2;
            position: relative;
          }
          
          .timeline-connector {
            width: 2px;
            height: 80px;
            background-color: #d4a736;
            margin: 0 auto;
          }
          
          .timeline-content {
            margin-top: 10px;
          }
          
          .event-title {
            font-size: 14px;
            margin-top: 5px;
          }
          
          /* Custom Carousel Arrows */
          .custom-control {
            top: 25%;
            width: 70px;
            height: 35px;
            border: 2px solid #d4a736;
            border-radius: 30px;
          }
          
          .custom-arrow {
            font-size: 22px;
            color: #d4a736;
            font-weight: bold;
          }
          
      `}</style>
    </>
  );
};

export default TimelineCarousel;
