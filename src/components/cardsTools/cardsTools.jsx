import React, { useEffect } from 'react';
import './cardTools.css';
import git from './githubterang.png';
import postman from './postman.png';
import vscode from './visual-studio-code.png';
import github from './github (1).png';
import AOS from 'aos';

const kartutools = [
  {
    href: 'https://git-scm.com/',
    src: git,
  },
  {
    href: 'https://www.postman.com/',
    src: postman,
  },
  {
    href: 'https://code.visualstudio.com/',
    src: vscode,
  },
  {
    href: 'https://github.com/',
    src: github,
  },
];

export default function CardsTools() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-quad',
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="container pb-5 pt-4">
        <div class="logoTools" data-aos="fade-up">
          {kartutools.map((item) => (
            <a key={item.src} href={item.href} src={item.src}>
              <img src={item.src} class="card-img-top mx-2 my-2" alt="..." />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
