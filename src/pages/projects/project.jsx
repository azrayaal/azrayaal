import React, { useState } from 'react';
import Futer from '../../components/footer/footer';
import Navbaar from '../../components/navbar/navbar';
import './project.css';
import CardsProject from '../../components/cards/cardsProject';

export default function Project() {
  const [fadeIntxt, setFadeInText] = useState(false);

  const changeBackgroundNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 400) {
      setFadeInText(true);
    } else {
      setFadeInText(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundNavbar);

  return (
    <>
      <div className="App">
        <Navbaar />
        {/* <div className="dashboarBio"> */}
        <section class="about-us pt-5" id="about-us">
          <div class="container">
            {/* //////////////// */}
            <div class="row align-items-center">
              <div class="dashboardProjects">
                <span>
                  <p class="glitch">projects </p>
                  <p class="fs-5">
                    websites
                    <span style={{ color: '#13fbe2' }}> that </span>I build
                  </p>
                  <a class="buttonkebawah" href="#project">
                    <i class="bx bx-chevrons-down fs-1" />
                  </a>
                </span>
              </div>
            </div>
            {/* CARDS PROJECT */}
            <div id="project" className={fadeIntxt ? 'row align-items-center fadeInAbout visible' : 'row align-items-center fadeInAbout'}>
              <div className="dashboardProject2">
                <CardsProject />
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
