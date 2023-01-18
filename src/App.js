import { useEffect, useState } from "react";
import styles from "./App.module.css";
import HeroSection from "./component/HeroSection/HeroSection";
import AboutSection from "./component/AboutSection/AboutSection";
import IngredientSection from "./component/IngredientSection/IngredientSection";
import ExpirenceSection from "./component/ExpirenceSection/ExpirenceSection";
import Modal from "./component/UI/Modal";
import SideMenu from "./component/SideMenu/SideMenu";
import NavigationBar from "./component/HeroSection/NavigationBar";

function App() {
  const [isHeroSectionPassed, setIsHeroSectionPassed] = useState(false);

  useEffect(() => {
    const navEl = document.querySelector(`.${styles.navigation__box}`);
    const heroSectionEl = document.querySelector("#heroSection");
    const awardBoxEl = document.querySelector("#awardbox");
    const quoteBoxEl = document.querySelector("#quoteBox");
    const serviceDetailBoxEl = document.querySelector("#serviceDetail__box");
    const showcaseSection = document.querySelector("#showcaseSection");

    // IntersectionObserver for moving content into viewport //
    const stickNavHandler = function ([entry]) {
      if (!entry.isIntersecting) {
        navEl.classList.add("sticky");
        setIsHeroSectionPassed(true);
      }
      if (entry.isIntersecting) {
        navEl.classList.remove("sticky");
        setIsHeroSectionPassed(false);
      }
    };

    const showSectionHandler = function ([entry], observer) {
      if (entry.isIntersecting && entry.target.id === "awardbox") {
        if (window.innerHeight <= 330) return;
        awardBoxEl.style.transform = "translate(-100%, 50%)";
        sectionMoveInObserver.unobserve(entry.target);
      }
      if (entry.isIntersecting && entry.target.id === "quoteBox") {
        quoteBoxEl.style.transform = "translate(100%, -50%)";
        sectionMoveInObserver.unobserve(entry.target);
      }
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        sectionMoveInObserver.unobserve(entry.target);
      }
    };

    const headerObserver = new IntersectionObserver(stickNavHandler, {
      root: null,
      threshold: 0.2,
      rootMargin: "0px",
    });
    headerObserver.observe(heroSectionEl);

    const sectionMoveInObserver = new IntersectionObserver(showSectionHandler, {
      root: null,
      threshold: 0,
      rootMargin: "10px",
    });

    sectionMoveInObserver.observe(awardBoxEl);
    sectionMoveInObserver.observe(quoteBoxEl);
    sectionMoveInObserver.observe(serviceDetailBoxEl);
    sectionMoveInObserver.observe(showcaseSection);

    // serviceCardEls.forEach((card) => {
    //   sectionMoveInObserver.observe(card);
    // });
  }, []);

  return (
    <>
      <div className={styles.navigation__box}>
        <NavigationBar isHeroSectionPassed={isHeroSectionPassed} />
      </div>
      <HeroSection />
      <main className={styles.homepage__main_box}>
        <AboutSection />
        <IngredientSection />
        <ExpirenceSection />
      </main>
      <Modal overlap={<SideMenu />} />
    </>
  );
}

export default App;
