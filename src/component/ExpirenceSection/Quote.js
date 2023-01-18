import styles from "./Quote.module.css";

function Quote() {
  return (
    <div className={styles.quote__container}>
      <div className={styles.profile}>
        <img
          className={styles.founderImage}
          src={require("../../images/Expirence/founder.png")}
          alt="founder"
        />
        <h6 className={styles.founderName}>Tony NG</h6>
        <p className={styles.founderTitle}>Founder & Creative Director</p>
      </div>
      <div className={styles.quoteContent__box}>
        <img
          className={styles.img__quoteMark}
          src={require("../../images/Expirence/quote_mark.png")}
          alt="quote mark"
        />
        <p className={styles.quoteText}>
          A great digital work isn’t about designing beautiful pages purely. It
          is about context - how do we deliver the
          <span> right experience to the right person at the right time</span>.
          The most important thing is that your work can engage customers at
          anytime, anywhere and let users experience an entire amazing digital
          journey.
        </p>
      </div>
    </div>
  );
}

export default Quote;
