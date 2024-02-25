import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './App.module.css'
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Dialog from './Dialog'
import "primereact/resources/themes/lara-light-indigo/theme.css";
function App() {
  const products: any = [1, 2, 3, 4, 5, 6, 7];
  const [visible, setVisible] = useState(false);
  const handleCardClick = (e: any) => {
    console.log("clicked");
    setVisible(true);
  }
  let makeCard = () => {
    return (
      <div className={classes.card} onClick={handleCardClick}>
        <img src="images/whale_1.jpeg" />
        <div className={classes.content}>
          <div className={classes.background}></div>
          <span className={classes.cardTitle}>Whale A</span>
        </div>
      </div>)
  };
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  return (

    <div className={classes.mainContent}>
      
      <Carousel value={products} numVisible={3} numScroll={1} className="custom-carousel" circular responsiveOptions={responsiveOptions}
        autoplayInterval={7000} itemTemplate={makeCard} />
        <Dialog handleClose={()=>setVisible(false)} visible={visible}/>
    </div>

  );
}

export default App;
