import React, { useEffect, useRef } from 'react';
import Futer from '../../components/footer/footer';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './about.css';

export default function About() {
  const fadeinAboutRef = useRef(null);
  const dashboardRef = useRef(null);
  const dashboardTextRef = useRef(null);
  const dashboardButton = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

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
          start: 'top center',
          end: 'top 100px',
          scrub: true,
          toggleActions: 'play reverse play reverse',
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

  return (
    <>
      <div className="App">
        {/* <Navbaar /> */}
        {/* <div className="dashboarBio"> */}
        <section class="about-us pt-5" id="about-us">
          <div class="container">
            {/* //////////////// */}
            <div class="row align-items-center">
              <div class="dashboarBio">
                <span>
                  <p class="glitch" ref={dashboardRef}>
                    about{' '}
                  </p>
                  <p class="fs-5" ref={dashboardTextRef}>
                    bio
                    <span style={{ color: '#13fbe2' }}> & </span>
                    resume
                  </p>
                  <a href="#aboutnih">
                    <i class="bx bx-chevrons-down  fs-1" ref={dashboardButton} />
                  </a>
                </span>
              </div>
            </div>
            {/* //////////////// */}
            {/* <div className={fadeIntxt ? 'row align-items-center fadeInAbout visible' : 'row align-items-center fadeInAbout'}> */}
            <div className="row align-items-center fadeInAbout" ref={fadeinAboutRef}>
              <div class="dashboardAbout ">
                <span>
                  <h2 id="aboutnih">I am currently working as aFull Stack Developerat public appraiser company in Jakarta. I enjoy building and enhance the web apps using Laravel and Vue JS . I also have a good taste inUI/UX Design</h2>
                  <button className="btn btn-success mt-3 mb-4">download CV</button>
                  <br />
                  <Link class="tombolSkills " to="/skills">
                    <span className="textskill">
                      skills
                      <i class="bx bx-right-arrow-alt "></i>
                    </span>
                  </Link>
                </span>
              </div>
            </div>
            {/* //////////////// */}
          </div>
        </section>
        <Futer />
      </div>
    </>
  );
}
