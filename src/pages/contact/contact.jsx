import React from 'react';
import Futer from '../../components/footer/footer';
import Navbaar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import './contact.css';

export default function Contact() {
  return (
    <>
      <div className="App">
        <Navbaar />
        <div className="containerContact">
          <span>
            <h1 className="text-white">want to turn your idea into a cool sites?</h1>
            <br />
            <a href="" className="fs-3 emailaz">
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
