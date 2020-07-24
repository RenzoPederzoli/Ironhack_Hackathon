import React from 'react';
import "../Styles/Home.css"
import stanley from '../images/Image 1.png'

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1> Hi there, <br/> I'm Stanley. </h1>
      <div className="home-img">
        <img src={stanley} alt='stanley'></img>
      </div>
    </div>
  );
};

export default Home;