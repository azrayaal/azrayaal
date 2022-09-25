import React from 'react';
import './cardsProject.css';
import img from './b208f8e64522caf81bf17c5ecb6ec526.jpg';
import { Link } from 'react-router-dom';

export default function CardsProject() {
  return (
    <div className="container ">
      <div class="row g-3">
        <div class="col-md-3 col-6 ">
          <div class="card" style={{}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="profile-name">JOHN DOE</div>
            <div class="profile-username">@johndoesurname</div>
            <div class="profile-icons">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-6 ">
          <div class="card" style={{}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="profile-name">JOHN DOE</div>
            <div class="profile-username">@johndoesurname</div>
            <div class="profile-icons">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-6 ">
          <div class="card" style={{}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="profile-name">JOHN DOE</div>
            <div class="profile-username">@johndoesurname</div>
            <div class="profile-icons">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-6 ">
          <div class="card" style={{}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="profile-name">JOHN DOE</div>
            <div class="profile-username">@johndoesurname</div>
            <div class="profile-icons">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
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
