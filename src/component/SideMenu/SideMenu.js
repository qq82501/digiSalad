import styles from "./SideMenu.module.css";
import SideMenuCard from "./SideMenuCard";
import useScroll from "../hooks/useScroll";

function SideMenu() {
  const scrollTo = useScroll();
  const menuItems = [
    [
      {
        title: "ABOUT US",
        subHeading: "EMPOWERING BRANDS",
        iconImage: "about__icon.png",
        backgroundImage: "about__BG.png",
        themeColor: "#26C6D0",
        linkTo: "#aboutSection",
      },
      {
        title: "work",
        subHeading: "CASE STUDIES",
        iconImage: "works__icon.png",
        backgroundImage: "works__BG.png",
        themeColor: "#EE6C8A",
      },
    ],
    [
      {
        title: "careers",
        subHeading: "BE COOL WITH US",
        iconImage: "careers__icon.png",
        backgroundImage: "careers__BG.png",
        themeColor: "#E6A94E",
      },
      {
        title: "insights",
        subHeading: "OUR STRATEGIES",
        iconImage: "insights__icon.png",
        backgroundImage: "insights__BG.png",
        themeColor: "#26D0A8",
      },
    ],
    [
      {
        title: "service",
        subHeading: "AREAS OF EXPERTISE",
        iconImage: "services__icon.png",
        backgroundImage: "services__BG.png",
        themeColor: "#585880",
        linkTo: "#ingredientSection",
      },
      {
        title: "contact",
        subHeading: "START YOUR JOURNEY WITH US",
      },
    ],
  ];

  const menuContents = menuItems.map((col, i) => {
    return (
      <div className={styles.col} key={i}>
        {col.map((item) => (
          <div key={item.title} className={styles.singleMenu__box}>
            <SideMenuCard menuItem={item} />
          </div>
        ))}
      </div>
    );
  });
  return (
    <div className={styles.sideMenu__Container}>
      <div className={styles.menuContents__box}>{menuContents}</div>
      <header className={styles.header}>
        <a
          className={styles.link__logo}
          href="#heroSection"
          onClick={scrollTo.bind(null, "#")}
        >
          <img src={require("../../images/DigiSalad.png")} alt="logo" />
        </a>
      </header>
    </div>
  );
}
export default SideMenu;
