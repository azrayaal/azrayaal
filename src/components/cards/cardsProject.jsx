import React from 'react';
import './cardsProject.css';
import img from './b208f8e64522caf81bf17c5ecb6ec526.jpg';
import topup from './topup.jpg';
import gatotNgocok from './gatotNgocok.jpg';
import wordsQuote from './motWords.jpg';
import { Link } from 'react-router-dom';

export default function CardsProject() {
  return (
    <div className="container-fluid ">
      <div class="row g-3">
        <div class="col-md-3 col-6 ">
          <a href="https://topup-games.herokuapp.com/" target="_blank">
            <div class="card" style={{}}>
              <img src={topup} class="card-img-top" alt="..." />
              <div class="profile-name ">Top-up games</div>
              <div class="profile-username"></div>
              <div class="profile-icons borderlogo px-1 ">
                <a href="#">
                  <box-icon type="logo" className="logoBahasa" color="#3db8b8" name="react"></box-icon>
                </a>
                <a href="#">
                  <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                </a>
                {/* <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a> */}
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-6 ">
          <a href="https://quotesweb.herokuapp.com/" target="_blank">
            <div class="card" style={{}}>
              <img src={wordsQuote} class="card-img-top" alt="..." />
              <div class="profile-name">Motivation Quotes</div>
              <div class="profile-icons borderlogo px-1 ">
                <a href="#">
                  <box-icon type="logo" className="logoBahasa" color="#3db8b8" name="react"></box-icon>
                </a>
                <a href="#">
                  <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                </a>
                {/* <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a> */}
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-6 ">
          <a href="https://gatot-ngocok.herokuapp.com/" target="_blank">
            <div class="card" style={{}}>
              <img src={gatotNgocok} class="card-img-top" alt="..." />
              <div class="profile-name">Search Engine</div>
              <div class="profile-icons borderlogo px-1 ">
                <a href="#">
                  <box-icon type="logo" className="logoBahasa" color="#3db8b8" name="react"></box-icon>
                </a>
                <a href="#">
                  <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                </a>
                {/* <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a> */}
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-6 ">
          <div class="card" style={{}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="profile-name">JOHN DOE</div>
            <div class="profile-username">@johndoesurname</div>
            <div class="profile-icons borderlogo px-1 ">
              <a href="#">
                <box-icon type="logo" className="logoBahasa" color="#3db8b8" name="react"></box-icon>
              </a>
              <a href="#">
                <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
              </a>
              {/* <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a> */}
            </div>
          </div>
        </div>
      </div>
      <Link class="tombolSkills" to="/contact">
        <span className="textskills ">contact</span>
        <i class="bx bx-right-arrow-alt "></i>
      </Link>
    </div>
  );
}
