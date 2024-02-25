import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './App.module.css'
import Dialog from './Dialog'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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

  return (

    <div className={classes.mainContent}>
      <CarouselProvider
        naturalSlideWidth={480}
        naturalSlideHeight={480}
        totalSlides={6}
        visibleSlides={3}
        isIntrinsicHeight={true}
      >
        <Slider>
          <Slide index={0}>{makeCard()}</Slide>
          <Slide index={1}>{makeCard()}</Slide>
          <Slide index={2}>{makeCard()}</Slide>
          <Slide index={3}>{makeCard()}</Slide>
          <Slide index={4}>{makeCard()}</Slide>
          <Slide index={5}>{makeCard()}</Slide>
        </Slider>
      </CarouselProvider>
      <Dialog handleClose={() => setVisible(false)} visible={visible} />
    </div>

  );
}

export default App;
