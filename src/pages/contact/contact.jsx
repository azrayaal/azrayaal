import React from 'react';
import Futer from '../../components/footer/footer';
import './contact.css';

export default function Contact() {
  return (
    <>
      <div className="App">
        <div className="containerContact">
          <span>
            <div className="text-white fs-3">want to turn your idea into a site? lets work together</div>
            <br />
            <a href="mailto:azrayazidalkautsar@gmail.com" className="fs-4 emailaz">
              <i class="bx bxs-envelope"></i>
              <span className="emaiil">azrayazidalkautsar@gmail.com</span>
            </a>
          </span>
        </div>
        <Futer />
      </div>
    </>
  );
}
