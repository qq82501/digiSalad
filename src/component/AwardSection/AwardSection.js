import styles from "./AwardSection.module.css";

function AwardSection() {
  const awards = [
    {
      awardNo: "a001",
      image: "award_1.png",
    },
    {
      awardNo: "a002",
      image: "award_2.png",
    },
    {
      awardNo: "a003",
      image: "award_3.png",
    },
    {
      awardNo: "a004",
      image: "award_4.png",
    },
  ];

  const awardsContent = awards.map((award) => (
    <img
      className={styles.awardImage}
      key={award.awardNo}
      src={require(`../../images/Award/${award.image}`)}
      alt="award"
    />
  ));
  return (
    <div id="awardSection" className={styles.AwardSection__container}>
      <div className={styles.textbox}>
        <h3 className={styles.sectionTitle}>Awards</h3>
        <p className={styles.passage}>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc.
        </p>
      </div>
      <div className={styles.awardImg__box}>{awardsContent}</div>
    </div>
  );
}

export default AwardSection;
