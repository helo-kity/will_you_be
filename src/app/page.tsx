'use client'

import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 40 + 16;
  const [index, setIndex] = useState(0);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  }

  const getNoButtonText = () => {
    const phrases = [
      "No :(",
      "What if I asked really nicely?",
      "Are you sure?",
      "No :("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getNoGifs = () => {
    const gifs = [
      "/sad.webp",
      "/sad3.webp",
      "/sad4.webp",
      "/last_page.webp"
    ]

    return gifs[Math.min(noCount, gifs.length - 1)];
  }


  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const isLast = index === 4;

  return (
    <div className={`${styles.backgroundImage} ${styles.body_main}`}>
      <Carousel
       activeIndex={index}
       onSelect={handleSelect}
       interval={null}        // disables auto-sliding
       controls={false}        // show next/prev arrows
       indicators={false}      // show navigation dots
       wrap={false}
       >
         <Carousel.Item>
         <div
            className={`${styles.card} ${styles.card_1}`}
          >
            <h1>Hi Lina :)</h1>
            <img src="/shy_hi.gif" /> 
          </div>

      </Carousel.Item>

      <Carousel.Item>
       <div
          className={`${styles.card} ${styles.card_2}`}
        >
            <h1>You're looking pretty today (tho you look pretty everyday)</h1>
            <img src="/shrek_rizz.gif" />
            <p>rizz rizz</p>
          </div>
      </Carousel.Item>

      <Carousel.Item>
       <div
          className={`${styles.card} ${styles.card_3}`}
        >
            <h1>I just wanted to let you know that I really like you a lot</h1>
            <img src="/shy.gif" />
          </div>
      </Carousel.Item>

      <Carousel.Item>
      <div
            className={`${styles.card} ${styles.card_4}`}
          >
            <h1>And I guess I made this cause I wanted to ask...</h1>
            <img src="/cute_rolling.gif" />
          </div>
      </Carousel.Item>

      <Carousel.Item>
      <div
            className={`${styles.card} ${styles.card_5}`}
          >
            {
              yesPressed ? (
                <>
                  <img src="yay.gif" />
                  <h1>WOOOOOO!!! ;))</h1>
                </>
              ) : (
                <>
                  {
                    noCount > 3 ? (
                      <>
                        <h1>FOREVER ALONE :(</h1>
                        <img src="/last.gif" />
                      </>
                    ) : (
                      <>
                        <h1>Will you be my girlfriend?</h1>
                        <img src={noCount > 0 ? getNoGifs() : "/will_you.gif"} />
                      </>
                    )
                  }
                </>
              )
            }
            {
              noCount > 3 ? (
                <></>
              ) : 
              (
                <>
                 { !yesPressed &&
                  <div>
                    <button
                      className={styles.button_89}
                      style={{ fontSize: yesButtonSize }}
                      onClick={handleYesClick}
                    >
                      Yes
                    </button>
                    <button
                      className={styles.button_89}
                      style={{ fontSize: 16 }}
                      onClick={handleNoClick}
                    >
                      {noCount === 0 ? "No" : getNoButtonText()}
                    </button>
                  </div>
                }
                </>
              )
            }
          </div>
      </Carousel.Item>
      </Carousel>

      {
        !isLast && (
              <button
              className="carousel-control-next"
              onClick={() => setIndex(index + 1)}
              style={{ background: 'none', border: 'none' }}
            >
              <span className="carousel-control-next-icon" />
            </button>
        )
      }

    </div>
  );
}
