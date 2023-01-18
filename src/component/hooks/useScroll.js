import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";

function useScroll() {
  const ctxModal = useContext(ModalContext);

  function scrollTo(href, e) {
    if (!href) return;
    e.preventDefault();
    ctxModal.closeModalHandler();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  }

  return scrollTo;
}

export default useScroll;
