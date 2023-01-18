import styles from "./ServiceCard.module.css";

function ServiceCard(props) {
  const { service } = props;
  return (
    <div className={`${styles.serviceCard__container} serviceCard__container `}>
      <div className={styles.serviceIcon__box}>
        <img
          className={styles.iconImg}
          src={require(`../../images/Ingredient/${service.image}`)}
          alt="service icon"
        />
      </div>
      <h6 className={styles.service__title}>{service.title}</h6>
      <p className={styles.service__description}>{service.content}</p>
      <button className={styles.btn__viewMore}>View more</button>
    </div>
  );
}
export default ServiceCard;
