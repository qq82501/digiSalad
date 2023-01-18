import { useContext } from "react";
import styles from "./HeroSection.module.css";
import VideoBackground from "../UI/VideoBackground";
import { ModalContext } from "../../context/modal-context";
import useScroll from "../hooks/useScroll";

function HeroSection() {
  const ctxModal = useContext(ModalContext);
  const scrollTo = useScroll();
  return (
    <div className={styles.heroSection__container} id="heroSection">
      <VideoBackground
        src="https://www.youtube.com/embed/8_4JRK4QkqU?controls=0&autoplay=1&&playsinline=0&mute=1&loop=1&playlist=8_4JRK4QkqU&enablejsapi=1"
        videoId={"8_4JRK4QkqU"}
      />
      <div className={styles.heroSection__body}>
        <div
          className={styles.heroSection__textBox}
          style={!ctxModal.isModalOpen ? { opacity: "1" } : { opacity: "0" }}
        >
          <div className={styles.asideText}>
            <div className={styles.line}></div>
            <p>Digital Agency</p>
          </div>
          <div className={styles.main_textBox}>
            <img
              src={require("../../images/DigiSalad.png")}
              alt="DigiSalad Logo"
            />
            <p>
              We create <br />
              amazing <br />
              <span className={styles.lastSentence}>digital experiences</span>
            </p>
          </div>
          <div className={styles.CTA__box}>
            <a
              href="#ingredientSection"
              className={styles.link__cta}
              onClick={scrollTo.bind(null, "#ingredientSection")}
            >
              <img
                className={styles.image__CTA}
                src={require("../../images/dish.png")}
                alt="call to action"
              />
            </a>
            <p>Taste us now!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
