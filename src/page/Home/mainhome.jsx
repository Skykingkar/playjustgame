import React from 'react';
import Header from '../Header/Header'
import Home1 from '../Home/Home1';
import Home2 from '../Home/Home2';
import Home3 from '../Home/Home3';
import Home4 from '../Home/Home4';
import Home5 from '../Home/Home5';
import Newcategory from '../Category/Newcategory'
import Footer from "../Footer/Footer"
function MainHome() {
  return (
    <>
    <Header/>
    <Newcategory/>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Footer/>
    </>
  );
}

export default MainHome;
