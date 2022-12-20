import React, { useState } from 'react';
import './cardsProject.css';
import filmReview from './filmReview.png';
import gatotngaca from './gatotNgaca.png';
import leisureblog from './leisureblog.png';
import leisurevent from './leisureEvent.png';
import leisurestore from './leisurestorewp.png';
import quotes from './MotivationQuote.png';
import adminggstore from './serverstoregg.png';
import typingtest from './testTyping.png';
import Topup from './TopUpGames.png';
// import expressicon from './expressjs_logo_icon_169186 (1).png';

import { Modal, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import AOS from 'aos';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ModalsItem from '../modals/modalsItem';

const projects = [
  {
    name: 'Typing Test',
    href: 'https://testtyping.azrayaal.space/',
    src: typingtest,
    year: '2022',
    logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
  },
  {
    name: 'Web Event',
    href: 'https://eventleisure.azrayaal.space/',
    src: leisurevent,
    year: '2022',
    logo: 'ON PROGRESS',
  },
  {
    name: 'Film Review',
    href: 'https://reviewfilm.azrayaal.space/',
    src: filmReview,
    year: '2022',
    logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
  },
  {
    name: 'Search Engine',
    href: 'https://gatotngaca.azrayaal.space/',
    src: gatotngaca,
    year: '2022',
    logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
  },
  {
    name: 'Random Quotes',
    href: 'https://quote.azrayaal.space/',
    src: quotes,
    year: '2022',
    logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
  },
  {
    name: 'Topup Game',
    href: 'https://topupgame.azrayaal.space/',
    src: Topup,
    year: '2022',
    logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
  },
  {
    name: 'Admin Topup GG',
    href: 'http://serverstoregg.azrayaal.space/',
    src: adminggstore,
    year: '2022',
    logo: [<box-icon name="nodejs" type="logo" color="#80cd2e"></box-icon>, <box-icon name="mongodb" type="logo" color="#149752"></box-icon>, 'ex'],
  },
  {
    name: 'Company Profile',
    href: 'https://leisureblogwp.azrayaal.space/',
    src: leisureblog,
    year: '2022',
    logo: [<box-icon name="wordpress" type="logo" color="#e8e8e8"></box-icon>],
  },
  {
    name: 'Leisure Store',
    href: 'https://leisurestorewp.azrayaal.space/',
    src: leisurestore,
    year: '2022',
    logo: [<box-icon name="wordpress" type="logo" color="#e8e8e8"></box-icon>],
  },
];

export default function CardsProject() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="containerProjek">
      <div class="row g-3" data-aos="fade-up">
        {projects.map((item) => (
          <div class="col-md-4 col-12 " key={item.name} href={item.href} src={item.src}>
            <Card className="kartuProjek" style={{ width: '18rem' }}>
              <img className="p-2" variant="top" src={item.src} style={{ borderRadius: '15px' }} />
              <div className="judulproject">
                <h5 className="float-start d-flex p-2">{item.name}</h5>
                {/* <a href={item.href} target="_blank" class="float-end d-flex buttonView">
                  <span>view</span>
                </a> */}
                <ModalsItem handleClose={handleClose} handleShow={handleShow} show={show} />
              </div>
              <div className="p-2 ">
                <Card.Text className="float-start d-flex ">{item.year}</Card.Text>
                <div className="float-end d-flex profile-icons">
                  <div class="px-1 ">{item.logo}</div>
                </div>
              </div>
            </Card>
          </div>
        ))}

        <Link className="tombolcontact pb-5" to="/contact">
          <span className="textskills ">contact</span>
          <i class="bx bx-right-arrow-alt "></i>
        </Link>
      </div>
    </div>
  );
}
