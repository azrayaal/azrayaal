import React from 'react';
import html from './html.png';
import css from './css3.png';
import js from './javascript.png';
import bootstrap from './bootstrap.png';
import tailwind from './tailwind2.png';
import mongo from './mongodb.png';
import express from './expressgelapan.png';
import react from './react.png';
import node from './node-js.png';
import mysql from './mysql.png';
import wordpress from './wordpress_PNG74.png';
import nextjs from './nextgelapan.png';
import redux from './redux.png';
import './cardsBahasa.css';
import AOS from 'aos';
import { useEffect } from 'react';

const kartubahasa = [
  {
    // href: 'https://leisureblogwp.azrayaal.space/',
    src: html,
  },
  {
    // href: 'https://leisureblogwp.azrayaal.space/',
    src: css,
  },
  {
    href: 'https://www.javascript.com/',
    src: js,
  },
  {
    href: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/',
    src: bootstrap,
  },
  {
    href: 'https://tailwindui.com/',
    src: tailwind,
  },
  {
    href: 'https://www.mongodb.com/atlas/database',
    src: mongo,
  },
  {
    href: 'https://expressjs.com/',
    src: express,
  },
  {
    href: 'https://reactjs.org/',
    src: react,
  },
  {
    href: 'https://nextjs.org/',
    src: nextjs,
  },
  {
    href: 'https://nodejs.org/en/',
    src: node,
  },
  {
    href: 'https://www.mysql.com/',
    src: mysql,
  },
  {
    href: 'https://wordpress.org/',
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
