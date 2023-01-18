import { useRef, useState } from "react";
import styles from "./ShowCase.module.css";
import ShowCaseCard from "./ShowCaseCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function ShowCase() {
  const refShowcaseMain = useRef();
  const [currentCase, setCurrentCase] = useState(1);
  const cases = [
    {
      caseNo: "c001",
      title: "1LP CLUB MOBILE APP",
      description:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
      image: "case1.png",
    },
    {
      caseNo: "c002",
      title: "2LP CLUB MOBILE APP",
      description:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
      image: "case2.jpg",
    },
    {
      caseNo: "c003",
      title: "3LP CLUB MOBILE APP",
      description:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
      image: "case3.jpg",
    },
    {
      caseNo: "c004",
      title: "4LP CLUB MOBILE APP",
      description:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.",
      image: "case4.jpg",
    },
  ];

  const goToNextHandler = function () {
    if (currentCase < 4) {
      setCurrentCase((prevState) => prevState + 1);
    }
    if (currentCase === 4) {
      setCurrentCase(1);
    }
  };
  const backToPreviousHandler = function () {
    if (currentCase > 1) {
      setCurrentCase((prevState) => prevState - 1);
    }
    if (currentCase === 1) {
      setCurrentCase(4);
    }
  };

  const casesContents = cases.map((caseItem) => (
    <ShowCaseCard key={caseItem.caseNo} caseItem={caseItem} />
  ));

  return (
    <div
      id="showcaseSection"
      className={`${styles.showCase__container} hidden`}
    >
      <div
        className={styles.showCase__background}
        style={{
          backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.75)
          ),url(${require(`../../images/Expirence/${
            cases[currentCase - 1].image
          }`)})`,
        }}
      >
        <div className={styles.showCase__blur}>
          <main
            className={styles.showCase__main}
            ref={refShowcaseMain}
            style={{
              transform: `translateX(-${(currentCase - 1) * 100}%)
          `,
            }}
          >
            {casesContents}
          </main>
        </div>
        <div className={styles.showCase__controller}>
          <button className={styles.btn__arrow} onClick={backToPreviousHandler}>
            <ChevronLeftIcon className={styles.arrow__icon} />
          </button>
          <button className={styles.btn__arrow} onClick={goToNextHandler}>
            <ChevronRightIcon className={styles.arrow__icon} />
          </button>
          <div className={styles.currentCase__box}>
            <div className={styles.currentCase__body}>
              <span className={styles.current}>
                {currentCase.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>
              <div className={styles.saperateLine}></div>
              <span className={styles.total}>
                {cases.length.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
