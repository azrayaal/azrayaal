import React from 'react';
import './footer.css';

export default function Futer() {
  return (
    <div className=" text-white footer fixed-bottom">
      <div className="container-fluid">
        <span className="logo">
          <a href="instagram.com" rel="nofollow" target="_blank">
            <i className="bx bxl-instagram fs-3 " style={{ color: '#fffbfb' }}></i>
          </a>
          <a href="github.com" rel="nofollow" target="_blank">
            <i className="bx bxl-github px-2 fs-3" style={{ color: '#fffbfb' }}></i>
          </a>
          <a href="facebook.com" rel="nofollow" target="_blank">
            <i className="bx bxl-facebook-circle fs-3" style={{ color: '#fffbfb' }}></i>
          </a>
        </span>
        <div className="copyright">© 2022 made by azrayaal</div>
      </div>
    </div>
  );
}
