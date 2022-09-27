import React from 'react';
import Futer from '../../components/footer/footer';
import './contact.css';

export default function Contact() {
  return (
    <>
      <div className="App">
        <div className="containerContact">
          <span>
            <h1 className="text-white">want to turn your idea into a site?</h1>
            <br />
            <a href="mailto:azrayazidalkautsar@gmail.com" className="fs-3 emailaz">
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
