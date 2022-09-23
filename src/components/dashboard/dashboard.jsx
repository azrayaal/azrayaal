import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

export default function Dasboard() {
  return (
    <>
      <div className="dashboard">
        <section class="about-us pt-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="dashboard">
                <h2 class="">Hi</h2>
                <p class="">I am</p>
              </div>
              <Link class="tombolHome " to="/about">
                Button Kesamping
                <i class="bx bx-right-arrow-alt "></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
