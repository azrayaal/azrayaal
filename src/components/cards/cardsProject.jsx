import React from 'react';
import './cardsProject.css';
import typingtest from './testTyping.png';
import filmReview from './filmReview.png';
import gatotngaca from './gatotNgaca.png';
import quotes from './MotivationQuote.png';
import Topup from './TopUpGames.png';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

export default function CardsProject() {
  return (
    <div className="">
      <div class="row ">
        <div class="col-md-4 col-12 ">
          <Card className="kartuProjek" style={{ width: '18rem' }}>
            <img className="p-2" variant="top" src={typingtest} style={{ borderRadius: '15px' }} />
            <div className="judulproject">
              <h5 className="float-start d-flex p-2">Typing test Speed</h5>
              <a href="https://typingtesttyping.azrayaal.space/" target="_blank" class="float-end d-flex buttonView">
                view
              </a>
            </div>
            <div className="p-2 ">
              <Card.Text className="float-start d-flex ">2022</Card.Text>
              {/* <div class="profile-username"></div> */}
              {/* <div class="profile-icons borderlogo px-1 "> */}
              <div className="float-end d-flex profile-icons">
                <div class="px-1 ">
                  <a href="#">
                    <box-icon type="logo" className="" color="#3db8b8" name="react"></box-icon>
                  </a>
                  <a href="#">
                    <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-md-4 col-12 ">
          <Card className="kartuProjek" style={{ width: '18rem' }}>
            <img className="p-2" variant="top" src={filmReview} style={{ borderRadius: '15px' }} />
            <div className="judulproject">
              <h5 className="float-start d-flex p-2">Film Review</h5>
              <a href="https://reviewfilm.azrayaal.space/" target="_blank" class="float-end d-flex buttonView">
                view
              </a>
            </div>
            <div className="p-2 ">
              <Card.Text className="float-start d-flex ">2022</Card.Text>
              {/* <div class="profile-username"></div> */}
              {/* <div class="profile-icons borderlogo px-1 "> */}
              <div className="float-end d-flex profile-icons">
                <div class="px-1 ">
                  <a href="#">
                    <box-icon type="logo" className="" color="#3db8b8" name="react"></box-icon>
                  </a>
                  <a href="#">
                    <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-md-4 col-12 ">
          <Card className="kartuProjek" style={{ width: '18rem' }}>
            <img className="p-2" variant="top" src={gatotngaca} style={{ borderRadius: '15px' }} />
            <div className="judulproject">
              <h5 className="float-start d-flex p-2">Search Engine</h5>
              <a href="https://gatotngaca.azrayaal.space/" target="_blank" class="float-end d-flex buttonView">
                view
              </a>
            </div>
            <div className="p-2 ">
              <Card.Text className="float-start d-flex ">2022</Card.Text>
              {/* <div class="profile-username"></div> */}
              {/* <div class="profile-icons borderlogo px-1 "> */}
              <div className="float-end d-flex profile-icons">
                <div class="px-1 ">
                  <a href="#">
                    <box-icon type="logo" className="" color="#3db8b8" name="react"></box-icon>
                  </a>
                  <a href="#">
                    <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-md-4 col-12 ">
          <Card className="kartuProjek" style={{ width: '18rem' }}>
            <img className="p-2" variant="top" src={quotes} style={{ borderRadius: '15px' }} />
            <div className="judulproject">
              <h5 className="float-start d-flex p-2">Motivation Quotes</h5>
              <a href="https://quote.azrayaal.space/" target="_blank" class="float-end d-flex buttonView">
                view
              </a>
            </div>
            <div className="p-2 ">
              <Card.Text className="float-start d-flex ">2022</Card.Text>
              {/* <div class="profile-username"></div> */}
              {/* <div class="profile-icons borderlogo px-1 "> */}
              <div className="float-end d-flex profile-icons">
                <div class="px-1 ">
                  <a href="#">
                    <box-icon type="logo" className="" color="#3db8b8" name="react"></box-icon>
                  </a>
                  <a href="#">
                    <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-md-4 col-12 ">
          <Card className="kartuProjek" style={{ width: '18rem' }}>
            <img className="p-2" variant="top" src={Topup} style={{ borderRadius: '15px' }} />
            <div className="judulproject">
              <h5 className="float-start d-flex p-2">Top up Voucher</h5>
              <a href="https://topupgame.azrayaal.space/" target="_blank" class="float-end d-flex buttonView">
                view
              </a>
            </div>
            <div className="p-2 ">
              <Card.Text className="float-start d-flex ">2022</Card.Text>
              {/* <div class="profile-username"></div> */}
              {/* <div class="profile-icons borderlogo px-1 "> */}
              <div className="float-end d-flex profile-icons">
                <div class="px-1 ">
                  <a href="#">
                    <box-icon type="logo" className="" color="#3db8b8" name="react"></box-icon>
                  </a>
                  <a href="#">
                    <box-icon name="bootstrap" type="logo" color="#52377C"></box-icon>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Link className="tombolcontact" href="/contact">
        <span className="textskills ">contact</span>
        <i class="bx bx-right-arrow-alt "></i>
      </Link>
    </div>
  );
}
