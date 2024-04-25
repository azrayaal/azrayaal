import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './skills.css';
import CardsTools from '../../components/cardsTools/cardsTools';
import CardsBahasa from '../../components/cardsBahasa/cardsBahasa';
import AOS from 'aos';

export default function Skills() {
  const skill = () => {
    const element = document.getElementById(`skill`);
    element.scrollIntoView();
  };
  const skill2 = () => {
    const element = document.getElementById(`skill2`);
    element.scrollIntoView();
  };

  const dashboardSkill1Ref = useRef(null);
  const dashboardSkill2Ref = useRef(null);
  const textSkillsRef = useRef(null);
  const arrowRef = useRef(null);
  const detailsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-quad',
      delay: 100,
    });
  }, []);

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
                  {/* <p class="glitch" ref={textSkillsRef}> */}
                  <p class="TitlePage" ref={textSkillsRef}>
                    skills
                    {/* TitlePage */}
                  </p>
                  <p class="fs-5" ref={detailsRef}>
                    techs
                    <span style={{ color: '#33bff4' }}> & </span>
                    stacks
                  </p>
                  <a class="buttonmainskill" onClick={skill}>
                    <i class="bx bxs-down-arrow-alt fs-1" ref={arrowRef} />
                  </a>
                </span>
              </div>
            </div>
            {/* //////////////// */}
            <div>
              <div id="skill" className="row align-items-center fadeInSkills" ref={dashboardSkill1Ref}>
                <div class="dashboardSkills2 ">
                  <span>
                    <div id="aboutskill1" className="fs-4">
                      {/* I have learned programming websites since 2020, and continue to use some library or framework for building website, currently I am using */}

                      I have been learning website programming since 2020 and continue to use various libraries or frameworks for building websites. Currently, I am using
                      <a href="https://reactjs.org/" target="_blank" style={{ textDecoration: 'none', color: '#e8e8e8' }}>
                        {' '}
                        <span className="logoditext">
                          ReactJS <i class="bx bxl-react" style={{ color: '#33bff4', verticalAlign: 'middle' }} />
                        </span>
                      </a>
                      {/* for build websites, and below are some languages, frameworks or libraries that I use: */}
                      for Front End, and 
                      <a href="https://nodejs.org/en" target="_blank" style={{ textDecoration: 'none', color: '#e8e8e8' }}>
                        {' '}
                        <span className="logoditext">
                          NodeJS <i class="bx bxl-nodejs" style={{ color: '#35bd02', verticalAlign: 'middle' }} />
                        </span>
                      </a>
                      for Back End. Below are some of the languages, frameworks, or libraries that I use:
                    </div>
                    <div className="logobahasa">
                      <CardsBahasa />
                    </div>
                    {/* <div data-aos="flip-down"> */}
                    <a class="buttonkebawahskills" onClick={skill2}>
                      <i class="bx bxs-down-arrow-alt fs-1" />
                    </a>
                    {/* </div> */}
                  </span>
                </div>
              </div>
            </div>
            {/* //////////////// */}
            <div className="row align-items-center fadeInSkills" ref={dashboardSkill2Ref}>
              <div class="dashboardSkill3  " id="skill2">
                <span>
                  <div className="fs-4">I use these tools for building an interactive websites:</div>
                  <CardsTools />
                  <div data-aos="fade-right">
                    <Link class="tombolSkills " to="/project">
                      <span className="textskill">projects</span>
                      <i class="bx bx-right-arrow-alt "></i>
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
