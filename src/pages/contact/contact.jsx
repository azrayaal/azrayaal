import { gsap, Power3 } from 'gsap';
import React, { useEffect, useRef } from 'react';
import './contact.css';

export default function Contact() {
  const textLeftRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const el = textLeftRef.current;
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
    const el = emailRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        duration: 2,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <>
      <div className="App">
        <div className="containerContact">
          <span className="dashboardContact" style={{ color: '#e0e0e0' }}>
            <div>
              <span className=" fs-3" ref={textLeftRef}>
                want to turn your idea into a site? lets work together
                {/* </span> */}
                {/* <span className=" fs-3" ref={textRightRef}> */}
              </span>
              <hr />
            </div>
            <a href="mailto:azra@azrayaal.space" className="fs-4 emailaz" ref={emailRef}>
              <i class="bx bxs-envelope"></i>
              <span className="emaiil">azra@azrayaal.space</span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
