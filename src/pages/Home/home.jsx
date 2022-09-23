import React from 'react';
import Navbaar from '../../components/navbar/navbar';
import Dasboard from '../../components/dashboard/dashboard';
import Futer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';

export default function Home() {
  return (
    <div className="App">
      <Navbaar />
      <Loader />
      {/* <header className="App-header"></header> */}
      <Dasboard />
      <Futer />
    </div>
  );
}
