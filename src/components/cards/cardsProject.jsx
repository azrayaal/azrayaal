import React from 'react';
import './cardsProject.css';
import typingtest from './testTyping.png';
import filmReview from './filmReview.png';
import gatotngaca from './gatotNgaca.png';
import quotes from './MotivationQuote.png';
import Topup from './TopUpGames.png';
import adminggstore from './serverstoregg.png';
import leisureblog from './leisureblog.png';
import leisurestore from './leisurestorewp.png';
import expressicon from './expressjs_logo_icon_169186 (1).png';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import { useEffect } from 'react';

const projects = [
  {
    name: 'Typing Test',
    href: 'https://testtyping.azrayaal.space/',
    src: typingtest,
    year: '2022',
    logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
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
    logo: [<box-icon name="wordpress" type="logo" color="#ffffff"></box-icon>],
  },
  {
    name: 'Leisure Store',
    href: 'https://leisurestorewp.azrayaal.space/',
    src: leisurestore,
    year: '2022',
    logo: [<box-icon name="wordpress" type="logo" color="#ffffff"></box-icon>],
  },
];

export default function CardsProject() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="containerProjek">
      <div class="row g-3" data-aos="fade-up">
        {projects.map((item) => (
          <div class="col-md-4 col-12 " key={item.name} href={item.href} src={item.src}>
            <Card className="kartuProjek" style={{ width: '18rem' }}>
              <img className="p-2" variant="top" src={item.src} style={{ borderRadius: '15px' }} />
              <div className="judulproject">
                <h5 className="float-start d-flex p-2">{item.name}</h5>
                <a href={item.href} target="_blank" class="float-end d-flex buttonView">
                  view
                </a>
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
