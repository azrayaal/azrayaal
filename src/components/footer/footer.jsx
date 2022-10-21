import React from 'react';
import './footer.css';

export default function Futer() {
  return (
    <div className=" text-#e0e0e0 footer fixed-bottom">
      <div className="container-fluid futerlogo">
        <span className="logo">
          <a href="https://www.instagram.com/azrayazid.rar/" rel="nofollow" target="_blank">
            <i className="bx bxl-instagram fs-3 " style={{ color: '#e0e0e0' }}></i>
          </a>
          <a href="https://github.com/azrayaal" rel="nofollow" target="_blank">
            <i className="bx bxl-github px-2 fs-3" style={{ color: '#e0e0e0' }}></i>
          </a>
          <a href="https://www.facebook.com/azra.yazid" rel="nofollow" target="_blank">
            <i className="bx bxl-facebook-circle fs-3" style={{ color: '#e0e0e0' }}></i>
          </a>
        </span>
        <div className="copyright">© 2022 made by azrayaal</div>
      </div>
    </div>
  );
}
