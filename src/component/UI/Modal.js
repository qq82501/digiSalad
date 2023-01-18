import { useContext } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "../../context/modal-context";
import { CSSTransition } from "react-transition-group";

function Modal(props) {
  const ctxModal = useContext(ModalContext);
  return (
    <CSSTransition
      in={ctxModal.isModalOpen}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: styles.showModal__active,
        enterDone: styles.showModal__done,
        exitActive: styles.closeModal__active,
        exitDone: styles.closeModal__done,
      }}
    >
      <Backdrop>
        <Overlap>{props.overlap}</Overlap>
      </Backdrop>
    </CSSTransition>
  );
}
export default Modal;

function Overlap(props) {
  return <div className={styles.overlap__container}>{props.children}</div>;
}
function Backdrop(props) {
  return (
    <div id="modalBackdrop" className={styles.backdrop__container}>
      {props.children}
    </div>
  );
}
