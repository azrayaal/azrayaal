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

export default function CardsBahasa() {
  return (
    <div className="container pt-4">
      <div class="logoBahasa">
        <a href="">
          <img src={html} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={css} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={js} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={bootstrap} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={tailwind} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={mongo} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={express} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={react} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={node} class="card-img-top mx-2 my-2" alt="..." />
        </a>
        <a href="">
          <img src={mysql} class="card-img-top mx-2 my-2" alt="..." />
        </a>
      </div>
    </div>
  );
}
