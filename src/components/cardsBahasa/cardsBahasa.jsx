import React from 'react';
import html from './html.png';
import css from './css3.png';
import js from './javascript.png';
import bootstrap from './bootstrap.png';
import tailwind from './tailwind-css.png';
import mongo from './mongodb.png';
import express from './express.png';
import react from './react.png';
import node from './node-js.png';
import mysql from './mysql.png';
import './cardsBahasa.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function CardsBahasa() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-quad',
      delay: 100,
    });
  }, []);
  return (
    <div className="container pt-4">
      <div class="logoBahasa" data-aos="fade-up">
        <a href="">
          <img src={html} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={css} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={js} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={bootstrap} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={tailwind} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={mongo} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={express} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={react} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={node} className="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={mysql} className="card-img-top mx-2 my-2" alt="..." />
        </a>
      </div>
    </div>
  );
}
