import { gsap, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import CardsProject from '../../components/cards/cardsProject';
import './project.css';

export default function Project() {
  const prjekKartu = () => {
    const element = document.getElementById(`project`);
    element.scrollIntoView();
  };

  const textProjectRef = useRef(null);
  const arrowRef = useRef(null);
  const detailTextRef = useRef(null);
  const projectRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = projectRef.current;
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
    const el = textProjectRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: 100,
        y: -100,
        ease: Power3.easeInOut,
        duration: 1,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
      }
    );
  }, []);
  useEffect(() => {
    const el = detailTextRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -200,
        y: 200,
        ease: Power3.easeInOut,
        duration: 1,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
      }
    );
  }, []);
  useEffect(() => {
    const el = arrowRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 200,
        ease: Power3.easeInOut,
        duration: 1,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <>
      <div className="App">
        <section class="about-us pt-5" id="about-us">
          <div class="container-fluid">
            {/* //////////////// */}
            <div class="row align-items-center">
              <div class="dashboardProjects">
                <span>
                  {/* <p class="glitch" ref={textProjectRef}> */}
                  <p class="TitlePage" ref={textProjectRef}>
                    projects
                  </p>
                  <p class="fs-5" ref={detailTextRef}>
                    something
                    <span style={{ color: '#33bff4' }}> that </span>I build
                  </p>
                  <a class="buttonkebawah" onClick={prjekKartu}>
                    <i class="bx bxs-down-arrow-alt fs-1" ref={arrowRef} />
                  </a>
                </span>
              </div>
            </div>
            {/* CARDS PROJECT */}
            <div id="project" className="row align-items-center pb-5 mb-3" ref={projectRef}>
              <div className="dashboardProject2">
                <CardsProject />

                {/* <CardprojectCoba /> */}
              </div>
            </div>
            {/* //////////////// */}
          </div>
        </section>
      </div>
    </>
  );
}
