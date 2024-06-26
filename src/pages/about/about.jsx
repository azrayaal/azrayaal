import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./about.css";
import AOS from "aos";

export default function About() {
  const aboutnih = () => {
    const element = document.getElementById(`aboutnih`);
    element.scrollIntoView();
  };
  const fadeinAboutRef = useRef(null);
  const dashboardRef = useRef(null);
  const dashboardTextRef = useRef(null);
  const dashboardButton = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-quad",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    const el = fadeinAboutRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "top 100px",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    const el = dashboardRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -200,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    );
  }, []);

  useEffect(() => {
    const el = dashboardButton.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 200,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    );
  }, []);

  useEffect(() => {
    const el = dashboardTextRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -200,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
      }
    );
  }, []);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CVAZRAYAAL.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CVAZRAYAAL.pdf";
        // alink.fileName = 'CVAZRAYAAL.pdf';
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="App">
        {/* <Navbaar /> */}
        {/* <div className="dashboarBio"> */}
        <section class="about-us pt-5" id="about-us">
          <div class="container">
            {/* //////////////// */}
            <div class="row align-items-center">
              {/* <div class="dashboarBio">
                <span>
                  <p class="glitch" ref={dashboardRef}>
                    about{' '}
                  </p>
                  <p class="fs-5" ref={dashboardTextRef}>
                    bio
                    <span style={{ color: '#33bff4' }}> & </span>
                    resume
                  </p>
                <br />
                  <a onClick={aboutnih}>
                    <i class="bx bxs-down-arrow-alt  fs-1" ref={dashboardButton} />
                  </a>
                </span>
              </div> */}
              {/* <div class="dashboardHome"> */}
              <div class="dashboardProjects">
                <span className="pb-5">
                  <p class="TitlePage" ref={dashboardRef}>
                    about{" "}
                  </p>
                  <p class="fs-5" ref={dashboardTextRef}>
                    bio
                    <span style={{ color: "#33bff4" }}> & </span>
                    resume
                  </p>
                  <a onClick={aboutnih}>
                    <i
                      class="bx bxs-down-arrow-alt fs-1 tombolHome"
                      ref={dashboardButton}
                    />
                  </a>
                </span>
              </div>
            </div>

            {/* //////////////// */}
            {/* <div className={fadeIntxt ? 'row align-items-center fadeInAbout visible' : 'row align-items-center fadeInAbout'}> */}
            <div
              className="row align-items-center fadeInAbout"
              ref={fadeinAboutRef}
            >
             
              <div class="dashboardAbout ">
                <span>
                  <div id="aboutnih" className="fs-4">
                    I enjoy building applications using
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "#e8e8e8" }}
                    >
                      <span className="logoditext">
                        ReactJS{" "}
                        <i
                          class="bx bxl-react"
                          style={{ color: "#33bff4", verticalAlign: "middle" }}
                        />
                      </span>
                    </a>
                    for the Frond End and
                    <a href="https://nodejs.org/en" target="_blank" style={{ textDecoration: 'none', color: '#e8e8e8' }}>
                        {' '}
                        <span className="logoditext">
                          NodeJS <i class="bx bxl-nodejs" style={{ color: '#35bd02', verticalAlign: 'middle' }} />
                        </span>
                      </a>
                          for the Back End
                  </div>
                  <button className="btnCV mt-3 mb-4 " onClick={onButtonClick}>
                    <span>
                      download CV
                      {/* <i class="bx bxs-cloud-download" style={{ fontSize: '20px' }}></i> */}
                    </span>
                  </button>
                  <br />
                  <div data-aos="fade-right">
                    <Link class="tombolSkills " to="/skills">
                      <span className="textskill fs-5">
                        skills
                        <i class="bx bx-right-arrow-alt "></i>
                      </span>
                    </Link>
                  </div>
                </span>
              </div>
            </div>
            {/* //////////////// */}
          </div>
        </section>
      </div>
    </>
  );
}
