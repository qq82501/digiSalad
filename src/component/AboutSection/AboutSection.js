import { useState } from "react";
import styles from "./AboutSection.module.css";
import AwardSection from "../AwardSection/AwardSection";

function AboutSection() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  const showVideoHandler = function () {
    setIsVideoPlayed(true);
  };

  return (
    <div id="aboutSection" className={styles.AboutSection__container}>
      <h3 className={styles.sectiontitle}>About degisalad</h3>
      <div className={styles.video__box}>
        {!isVideoPlayed && (
          <>
            <img
              className={styles.thumbnailImage}
              src={require("../../images/About/video-thumbnail.png")}
              alt="video thumbnail"
            />
            <button className={styles.btn__play} onClick={showVideoHandler}>
              <img
                className={styles.icon__play}
                src={require("../../images/About/playIcon.png")}
                alt="play"
              />
            </button>
          </>
        )}
        {isVideoPlayed && (
          <iframe
            className="video"
            src="https://www.youtube.com/embed/IeIRJ9jZ5Ro?autoplay=1&fs=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <p className={styles.passage}>
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
        ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
        Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
        Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
        Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
        facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
        Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus,
        ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <button id="btn__aboutViewMore" className={styles.btn__viewMore}>
        View more
      </button>
      <div id="awardbox" className={styles.awardbox}>
        <AwardSection />
      </div>
    </div>
  );
}
export default AboutSection;
