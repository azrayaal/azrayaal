import React, { useEffect, useRef } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { gsap, Power3 } from 'gsap';

export default function Dasboard() {
  const hiTextRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const el = arrowRef.current;
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

  useEffect(() => {
    const el = hiTextRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 1,
        y: -50,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      }
    );
  }, []);

  return (
    <>
      <div className="dashboard">
        <section class="about-us pt-5">
          <div class="container">
            <div class="dashboardProjects">
            {/* <div class="dashboardHome"> */}
              <span className="pb-5">
                <p class="TitlePage" >
                Azra Yazid
                </p>
                <p class="fs-5">Full stack   <span style={{ color: '#33bff4' }}> developer</span></p>
                    
              
                {/* <p class="glitch text " ref={hiTextRef}>
                  AZRA
                </p> */}
                {/* <span className="typewritter fs-4 ">
                  <Typewriter words={['I am Azra Yazid', 'A Fullstack Web Developer']} loop={false} cursor cursorStyle="_" typeSpeed={90} deleteSpeed={50} delaySpeed={2000} />
                </span> */}
            
                <br /> 
                <br />
                {/* <p className='pt-4 text-xl'>Azra Yazid</p> */}
                <Link to="/about">
                  <i className="fs-1 bx bx-right-arrow-alt tombolHome" ref={arrowRef}></i>
                </Link>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
