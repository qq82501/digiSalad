import { useContext } from "react";
import useScroll from "../hooks/useScroll";
import styles from "./NavigationBar.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ModalContext } from "../../context/modal-context";
import MenuIcon from "../UI/MenuIcon";
import DigiSaladLogo from "../UI/DigiSaladLogo";

function NavigationBar(props) {
  const ctxModal = useContext(ModalContext);
  const scrollTo = useScroll();

  return (
    <nav
      className={styles.NavigationBar__Container}
      data-modal={ctxModal.isModalOpen}
    >
      <a
        href="#heroSection"
        className={styles.logo__box}
        onClick={scrollTo.bind(null, "#heroSection")}
      >
        {props.isHeroSectionPassed && !ctxModal.isModalOpen && (
          <DigiSaladLogo color={"#26C6D0"} />
        )}
      </a>
      <div className={styles.buttonBox}>
        {!ctxModal.isModalOpen && (
          <button className={styles.btnCTA}>Start your project</button>
        )}
        <button
          className={styles.btnMenu}
          id="btn__menu"
          onClick={ctxModal.toggleModalHandler}
          data-modal={ctxModal.isModalOpen}
        >
          {ctxModal.isModalOpen ? (
            <XMarkIcon className={styles.icon__closeMenu} />
          ) : (
            <MenuIcon
              className={styles.icon__openMenu}
              color={props.isHeroSectionPassed ? "#414042" : "white"}
            />
          )}
        </button>
      </div>
    </nav>
  );
}
export default NavigationBar;
