import React, { useEffect, useState } from 'react';
import './footer.css';

export default function Futer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const newDate = () => {
      const d = new Date();
      let currentYear = d.getUTCFullYear();
      setYear(currentYear);
    };

    newDate(); // Call the function when the component mounts

    // Cleanup function to avoid memory leaks
    return () => {
      setYear(''); // Reset year when the component unmounts
    };
  }, []);

  return (
    <div className=" text-#e0e0e0 footer fixed-bottom">
      <div className="container-fluid futerlogo">
        <span className="logo">
          <a href="https://www.instagram.com/azrayaal/" rel="nofollow" target="_blank">
            <i className="bx bxl-instagram px-1 fs-3 " style={{ color: '#e0e0e0' }}></i>
          </a>
          <a href="https://github.com/azrayaal" rel="nofollow" target="_blank">
            <i className="bx bxl-github px-1 fs-3" style={{ color: '#e0e0e0' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/azra-yazid/" rel="nofollow" target="_blank">
            <i className="bx bxl-linkedin-square px-1 fs-3" style={{ color: '#e0e0e0' }}></i>
          </a>
          <a href="https://www.facebook.com/azra.yazid" rel="nofollow" target="_blank">
            <i className="bx bxl-facebook-circle px-1 fs-3" style={{ color: '#e0e0e0' }}></i>
          </a>
        </span>
        <div className="copyright">© {year} made by azrayaal</div>
      </div>
    </div>
  );
}
