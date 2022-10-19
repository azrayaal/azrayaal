import React, { useState, useEffect, useRef } from 'react';
import Futer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './skills.css';
import CardsTools from '../../components/cardsTools/cardsTools';
import CardsBahasa from '../../components/cardsBahasa/cardsBahasa';

export default function Skills() {
  const dashboardSkill1Ref = useRef(null);
  const dashboardSkill2Ref = useRef(null);
  const textSkillsRef = useRef(null);
  const arrowRef = useRef(null);
  const detailsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = dashboardSkill1Ref.current;
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
    const el = dashboardSkill2Ref.current;
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
    const el = textSkillsRef.current;
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
  useEffect(() => {
    const el = arrowRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -400,
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
  useEffect(() => {
    const el = detailsRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -200,
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
        <section class="skillpage pt-5" id="about-us">
          <div class="container">
            {/* //////////////// */}
            <div class="row align-items-center">
              <div class="dashboardSkills">
                <span>
                  <p class="glitch" ref={textSkillsRef}>
                    skills
                  </p>
                  <p class="fs-5" ref={detailsRef}>
                    techs
                    <span style={{ color: '#13fbe2' }}> & </span>
                    stacks
                  </p>
                  <a class="buttonmainskill" href="#skill">
                    <i class="bx bx-chevrons-down fs-1" ref={arrowRef} />
                  </a>
                </span>
              </div>
            </div>
            {/* //////////////// */}
            <div>
              <div id="skill" className="row align-items-center" ref={dashboardSkill1Ref}>
                <div class="dashboardSkills2 ">
                  <span>
                    <div id="aboutskill1" className="fs-4">
                      I have learned programming websites since 2020, and continue to use some library or framework for building website, currently I am using
                      <a href="https://reactjs.org/" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="logoditext">
                          {' '}
                          React <i class="bx bxl-react" style={{ color: '#83deef', verticalAlign: 'middle' }} />{' '}
                        </span>
                      </a>
                      for build websites, and below are some languages, frameworks or libraries that I use:
                    </div>
                    <CardsBahasa />
                    <a class="buttonkebawahskills" href="#skill2">
                      <i class="bx bx-chevrons-down fs-1" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* //////////////// */}
            <div className="row align-items-center" ref={dashboardSkill2Ref}>
              <div class="dashboardSkill3 " id="skill2">
                <span>
                  <div className="fs-4">I often use some of these tools for building an interactive websites:</div>
                  <CardsTools />
                  <Link class="tombolSkills " to="/project">
                    <span className="textskill">projects</span>
                    <i class="bx bx-right-arrow-alt "></i>
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
