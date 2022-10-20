import React, { useEffect, useRef, useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { gsap, Power3 } from 'gsap';
// import ClipLoader from 'react-spinners/ClipLoader';

export default function Dasboard() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState('#ffffff');

  const hiTextRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  });

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
            <div class="dashboardHome">
              <span className="pb-5">
                <p class="glitch text " ref={hiTextRef}>
                  HI
                </p>
                <span className="typewritter fs-4 ">
                  <Typewriter words={['I am Azra Yazid', 'A Fullstack Web Developer']} loop={false} cursor cursorStyle="_" typeSpeed={90} deleteSpeed={50} delaySpeed={2000} />
                </span>
                <br />
                <Link to="/about">
                  <i className="fs-1 bx bx-right-arrow-circle tombolHome" ref={arrowRef}></i>
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
