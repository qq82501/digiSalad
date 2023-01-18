import styles from "./ShowCaseCard.module.css";

function ShowCaseCard(props) {
  const { caseItem } = props;
  return (
    <div className={styles.showCaseCard__container}>
      <div className={styles.image__box}>
        <img
          className={styles.caseImage}
          src={require(`../../images/Expirence/${caseItem.image}`)}
          alt="showcase"
        />
        <button className={styles.btn__viewProject}>View project</button>
      </div>
      <div className={styles.text__box}>
        <p className={styles.subTitle}>Highlight showcase</p>
        <h6 className={styles.title}>{caseItem.title}</h6>
        <p className={styles.description}>{caseItem.description}</p>
      </div>
    </div>
  );
}
export default ShowCaseCard;
