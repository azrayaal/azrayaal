import React from 'react';
import Futer from '../../components/footer/footer';
import Navbaar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import './contact.css';

export default function Contact() {
  return (
    <>
      <div className="App">
        <Navbaar />
        <div class="scrollbar" id="style-6">
          <div class="force-overflow"></div>
        </div>
        {/* <div className="dashboarBio"> */}
        <section class="about-us pt-5" id="about-us">
          <div class="container">
            {/* //////////////// */}
            <div class="row align-items-center">
              <div class="dashboarBio">
                <h2 class="">Contact</h2>
                <p class="">Bio</p>
              </div>
              <a class="buttonkebawah " href="#aboutnih">
                <i class="bx bx-chevrons-down" />
              </a>
            </div>
            {/* //////////////// */}
            <div class="row align-items-center">
              <div class="dashboardAbout">
                <h2 id="aboutnih ">I am currently working as aFull Stack Developerat public appraiser company in Jakarta. I enjoy building and enhance the web apps using Laravel and Vue JS . I also have a good taste inUI/UX Design</h2>
                <button className="btn btn-success mt-3">download CV</button>
              </div>
              <Link class="tombolSkills" to="/skills">
                Skills
                <i class="bx bx-right-arrow-alt "></i>
              </Link>
              <Link class="buttonhidden " to="#">
                <i class="bx bx-chevrons-down" />
              </Link>
            </div>
            {/* //////////////// */}
          </div>
        </section>
        <Futer />
      </div>
    </>
  );
}
