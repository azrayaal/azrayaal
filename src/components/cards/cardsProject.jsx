import React, { useState } from 'react';
import './cardsProject.css';
// import expressicon from './expressjs_logo_icon_169186 (1).png';

import { Link } from 'react-router-dom';

import AOS from 'aos';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ModalsItem from '../modals/modalsItem';
import data from './dataProject';
export default function CardsProject() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [tempData, setTemptData] = useState([]);

  const getData = (name, href, src, year, logo, desc, name2, src2, logo2, desc2, href2, tombolshow, nameThumbnail, logoThumbnail) => {
    let tempData = [name, href, src, year, logo, desc, name2, src2, logo2, desc2, href2, tombolshow, nameThumbnail, logoThumbnail];
    console.log('data sementara', tempData);
    setTemptData((item) => [...tempData]);
    return setShow(true);
  };

  const renderHTML = (rawHTML) => React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <div className="containerProjek ">
      <div class="row g-3" data-aos="fade-up">
        {data.projects.map((item, index) => (
          <div class="col-md-4 col-12 " key={index} href={item.href} src={item.src}>
            <Card className="kartuProjek" style={{ width: '18rem' }}>
              {!item.thumbnailsrc ? <img className="p-2" variant="top" src={item.src} style={{ borderRadius: '15px' }} /> : <img className="p-2" variant="top" src={item.thumbnailsrc} style={{ borderRadius: '15px' }} />}
              {/* <img className="p-2" variant="top" src={item.src} style={{ borderRadius: '15px' }} /> */}
              <div className="judulproject">
                {/* <h5 className="float-start text-start d-flex ps-2">{renderHTML(`${item.name}`)}</h5> */}

                {!item.nameThumbnail ? <h5 className="float-start text-start d-flex ps-2"> {item.name}</h5> : <h5 className="float-start text-start d-flex ps-2"> {item.nameThumbnail}</h5>}
                <button
                  class="float-end d-flex buttonView"
                  onClick={() => getData(item.name, item.href, item.year, item.logo, item.src, item.desc, item.name2, item.src2, item.logo2, item.desc2, item.href2, item.tombolshow, item.nameThumbnail, item.logoThumbnail)}
                >
                  <span>view</span>
                </button>
              </div>
              <div className="p-2 ">
                <Card.Text className="float-start d-flex ">{item.year}</Card.Text>
                <div className="float-end d-flex profile-icons">
                  {/* <div class="px-1 ">{item.logo}</div> */}
                  {!item.logoThumbnail ? <div class="px-1 ">{item.logo}</div> : <div class="px-1 ">{item.logoThumbnail}</div>}
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
      <ModalsItem
        renderHTML={renderHTML}
        show={show}
        href={tempData[1]}
        handleClose={handleClose}
        name={tempData[0]}
        src={tempData[4]}
        desc={tempData[5]}
        logo={tempData[3]}
        href2={tempData[10]}
        name2={tempData[6]}
        src2={tempData[7]}
        desc2={tempData[9]}
        logo2={tempData[8]}
        tombolshow={tempData[11]}
        // nameThumbnail={tempData[12]}
        // logoThumbnail={tempData[13]}
      />
    </div>
  );
}
