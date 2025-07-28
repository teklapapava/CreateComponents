import styles from "./About.module.css";

function About(){
    return(
        <aside className={styles.sidebar}>
        <h2>About EduHub</h2>
        <p>
          EduHub is an online education platform empowering learners globally
          with real-world skills.
        </p>
      </aside>
    );
}

export default About;