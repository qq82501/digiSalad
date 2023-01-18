import styles from "./SideMenuCard.module.css";
import useScroll from "../hooks/useScroll";

function SideMenuCard(props) {
  const { menuItem } = props;
  const scrollTo = useScroll();

  return (
    <a
      onClick={scrollTo.bind(null, menuItem.linkTo)}
      href={menuItem.linkTo && `${menuItem.linkTo}`}
      className={styles.sideMenuCard__container}
      style={
        menuItem.backgroundImage
          ? {
              backgroundImage: `url(${require(`../../images/SideMenu/${menuItem.backgroundImage}`)}),linear-gradient(${
                menuItem.themeColor
              }, ${menuItem.themeColor})`,
            }
          : { backgroundColor: "#fff" }
      }
    >
      {menuItem.iconImage && (
        <div className={styles.icon__box}>
          <img
            src={require(`../../images/SideMenu/${menuItem.iconImage}`)}
            alt="icon"
          />
        </div>
      )}
      <div className={styles.text__box}>
        <p className={styles.subHeading}>{menuItem.subHeading}</p>
        <h2 className={styles.title}>{menuItem.title}</h2>
      </div>
    </a>
  );
}
export default SideMenuCard;
