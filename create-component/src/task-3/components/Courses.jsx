import styles from "./Courses.module.css";

function Courses() {
  return (
    <section className={styles.courses}>
      <h2>Popular Courses</h2>
      <div className={styles.course}>
        <h3>Web Development Bootcamp</h3>
        <p>HTML, CSS, JavaScript, and React from scratch.</p>
      </div>
      <div className={styles.course}>
        <h3>Python for Data Science</h3>
        <p>Learn NumPy, Pandas, and build data projects.</p>
      </div>
      <div className={styles.course}>
        <h3>UI/UX Design Mastery</h3>
        <p>Design thinking, wireframes, Figma & prototypes.</p>
      </div>
    </section>
  );
}

export default Courses;
