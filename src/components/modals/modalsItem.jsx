import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './modal.css';

export default function ModalsItem(props) {
  const { handleClose, show, name, src, logo, renderHTML, desc, href, name2, src2, logo2, desc2, href2, tombolshow } = props;
  const [show2, setShow2] = useState(false);
  const handleShow = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  return (
    <>
      <Modal size="xl" show={show} onHide={handleClose} keyboard="false" className="my-modal">
        <div class="container-fluids">
          <figure>
            <img class="media" src={src}></img>
            {/* <div class="media" style={{ backgroundImage: `url(${src})` }}></div> */}
            <figcaption>
              <div class="bodymodal">
                <h3>{name}</h3>
                <p style={{ textAlign: 'justify' }}>{renderHTML(`${desc}`)}</p>
                <div className="footermodal">{logo}</div>
              </div>
            </figcaption>
            <a href={href} target="_blank">
              <button className="buttonmodal">
                <span>View</span>
              </button>
            </a>
            {tombolshow === true ? (
              <button className="buttonmodal2" tombolshow={tombolshow} onClick={handleShow}>
                <span>Seee</span>
              </button>
            ) : (
              ''
            )}
          </figure>
        </div>
      </Modal>
      {/* MODAL2 */}
      <Modal size="xl" show={show2} onHide={handleClose} keyboard="false" className="my-modal">
        <div class="container-fluids">
          <figure>
            <img class="media" src={src2}></img>
            {/* <div class="media" style={{ backgroundImage: `url(${src})` }}></div> */}
            <figcaption>
              <div class="bodymodal">
                <h3>{name2}</h3>
                <p>{renderHTML(`${desc2}`)}</p>
              </div>
              <div className="figurecaptionfooter">{logo2}</div>
            </figcaption>
            <div className="flex">
              <button href={href2} className="buttonmodal">
                <a href={href2}>
                  <span>View</span>
                </a>
              </button>
              <button className="buttonmodal2" onClick={handleClose2}>
                <span>back</span>
              </button>
            </div>
          </figure>
        </div>
      </Modal>
    </>
  );
}
