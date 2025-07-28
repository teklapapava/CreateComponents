import styles from "./Instructors.module.css"

function Instructors() {
  return (
    <section className={styles.instructors}>
    <h2>Top Instructors</h2>
    <div className={styles.instructor}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
        alt="Instructor 1"
      />
      <h4>Jane Mentor</h4>
      <p>Frontend Expert</p>
    </div>
    <div className={styles.instructor}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
        alt="Instructor 2"
      />
      <h4>Tom Teach</h4>
      <p>Data Scientist</p>
    </div>
  </section>
    );
}

export default Instructors;