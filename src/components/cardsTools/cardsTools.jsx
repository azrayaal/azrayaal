import React from 'react';
import './cardTools.css';
import git from './git.png';
import postman from './postman.png';
import vscode from './visual-studio-code.png';
import github from './github (1).png';

export default function CardsTools() {
  return (
    <>
      <div className="container pb-5 pt-4">
        <div class="logoTools">
          <a href="">
            <img src={vscode} class="card-img-top mx-2 my-2" alt="..." />
          </a>
          <a href="">
            <img src={git} class="card-img-top mx-2 my-2" alt="..." />
          </a>
          <a href="">
            <img src={github} class="card-img-top mx-2 my-2" alt="..." />
          </a>
          <a href="">
            <img src={postman} class="card-img-top mx-2 my-2" alt="..." />
          </a>
        </div>
      </div>
    </>
  );
}
