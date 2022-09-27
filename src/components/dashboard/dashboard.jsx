import React, { useEffect } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { gsap, timeline, Power3 } from 'gsap';

export default function Dasboard() {
  var tl = gsap.timeline({ repeatDelay: 1 });

  useEffect(() => {
    tl.to('.text', {
      opacity: 1,
      y: 20,
      ease: Power3.easeInOut,
      duration: 0.8,
    });

    gsap.fromTo(
      '.tombolHome',
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
  });

  return (
    <>
      <div className="dashboard">
        <section class="about-us pt-5">
          <div class="container">
            <div class="dashboardHome">
              <span className="pb-5">
                <p class="glitch text ">HI</p>
                <span className="typewritter fs-4 ">
                  <Typewriter words={['I am Azra Yazid', 'A Fullstack Web Developer']} loop={false} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
                </span>
                <br />
                <Link to="/about">
                  <i className="fs-1 bx bx-right-arrow-circle tombolHome"></i>
                  {/* <i class="bx bxs-right-arrow-circle fs-1"></i> */}
                </Link>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
