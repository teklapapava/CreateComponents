import styles from "./Hero.module.css";

function HeroSection(){
    return(
        <section className={styles.hero}>
        <h2>Welcome to DevConnect</h2>
        <p>The place where developers share, learn, and grow together.</p>
        <button>Join Now</button>
      </section>
    );
}

export default HeroSection;