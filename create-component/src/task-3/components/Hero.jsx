import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
    <h2>Learn Anything, Anytime</h2>
    <p>Access hundreds of expert-led courses for all skill levels.</p>
    <button>Browse Courses</button>
  </section>
    );
}

export default Hero;