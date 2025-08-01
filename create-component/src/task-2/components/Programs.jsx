import styles from "./Programs.module.css";

function Programs(){
    return(
        <section className={styles.programs}>
        <h2>Our Programs</h2>
        <div className={styles.program}>
          <h3>HIIT Burn</h3>
          <p>High-intensity workouts to torch fat fast.</p>
        </div>
        <div className={styles.program}>
          <h3>Strength Training</h3>
          <p>Build lean muscle with progressive workouts.</p>
        </div>
        <div className={styles.program}>
          <h3>Yoga & Flexibility</h3>
          <p>Improve flexibility and reduce stress.</p>
        </div>
      </section>
    );
}

export default Programs;