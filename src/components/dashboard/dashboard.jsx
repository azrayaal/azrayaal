import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

export default function Dasboard() {
  return (
    <>
      <div className="dashboard">
        <section class="about-us pt-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="dashboard">
                <div class="container">
                  <p class="glitch">HI</p>
                </div>
                <span className="typewritter fs-4 ">
                  <Typewriter words={['I am Azra Yazid', 'A Fullstack Web Developer']} loop={false} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
                </span>
              </div>
              <Link class=" " to="/about">
                <i className="fs-1 bx bx-right-arrow-circle tombolHome"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
