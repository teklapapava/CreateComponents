import styles from "./features.module.css";

function Features() {
  return (
    <section className={styles.features}>
      <h2>Why Choose Us?</h2>
      <div className={styles.feature}>
        <h3>Community Driven</h3>
        <p>
          Get support, share tips, and build together with thousands of
          developers.
        </p>
      </div>
      <div className={styles.feature}>
        <h3>Learning Resources</h3>
        <p>
          Access curated tutorials, challenges, and projects to boost your
          skills.
        </p>
      </div>
      <div className={styles.feature}>
        <h3>Job Board</h3>
        <p>Explore developer jobs and freelance gigs tailored to your stack.</p>
      </div>
    </section>
  );
}

export default Features;
