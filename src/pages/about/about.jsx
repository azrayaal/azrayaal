import React, { useEffect, useRef } from 'react';
import Futer from '../../components/footer/footer';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './about.css';

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
                  <a onClick={aboutnih}>
                    <i class="bx bx-chevrons-down  fs-1" ref={dashboardButton} />
                  </a>
                  {/* <a href="#aboutnih">
                    <i class="bx bx-chevrons-down  fs-1" ref={dashboardButton} />
                  </a> */}
                </span>
              </div>
            </div>
            {/* //////////////// */}
            {/* <div className={fadeIntxt ? 'row align-items-center fadeInAbout visible' : 'row align-items-center fadeInAbout'}> */}
            <div className="row align-items-center fadeInAbout" ref={fadeinAboutRef}>
              <div class="dashboardAbout ">
                <span>
                  <div id="aboutnih" className="fs-4">
                    I am enjoy building web apps using{' '}
                    <a href="https://www.javascript.com/" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                      <span className="logoditext">
                        React <i class="bx bxs-file-js" style={{ color: '#fcdc00' }} />
                      </span>
                    </a>
                    and
                    <a href="https://reactjs.org/" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                      <span className="logoditext">
                        ReactJS <i class="bx bxl-react" style={{ color: '#83deef', verticalAlign: 'middle' }} />
                      </span>
                    </a>
                    . I also have a good taste in UI/UX Design
                  </div>
                  {/* <div class="text-center">
                    <button type="button" class="fill mt-3 mb-4">
                      download CV
                    </button>
                  </div> */}
                  <button className="btnCV mt-3 mb-4 ">download CV</button>
                  <br />
                  <Link class="tombolSkills " to="/skills">
                    <span className="textskill fs-5">
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
