import styles from "./ExpirenceSection.module.css";
import Quote from "./Quote";
import ShowCase from "./ShowCase";

function ExpirenceSection() {
  return (
    <div className={styles.expirenceSection__container}>
      <div id="quoteBox" className={styles.quote__box}>
        <Quote />
      </div>
      <div className={styles.expirence__box}>
        <h3 className={styles.heading}>Our brand experience</h3>
        <p className={styles.passage}>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
        <img
          className={styles.clientImage}
          src={require("../../images/Expirence/DigiSalad-Client-List-20210512 1.png")}
          alt="client list"
        />
      </div>
      <ShowCase />
    </div>
  );
}
export default ExpirenceSection;
