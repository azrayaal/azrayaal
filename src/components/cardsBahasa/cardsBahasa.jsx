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
import wordpress from './wordpress_PNG74.png';
import './cardsBahasa.css';
import AOS from 'aos';
import { useEffect } from 'react';

const kartubahasa = [
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: html,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: css,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: js,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: bootstrap,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: tailwind,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: mongo,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: express,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: react,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: node,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: mysql,
  },
  {
    href: 'https://leisureblogwp.azrayaal.space/',
    src: wordpress,
  },
];

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
        {kartubahasa.map((item) => (
          <a href={item.href} key={item.src} src={item.src}>
            <img src={item.src} className="card-img-top mx-2 my-2" alt="..." />
          </a>
        ))}
      </div>
    </div>
  );
}
