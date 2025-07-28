import styles from "./Reviews.module.css";

function Reviews() {
  return (
    <section className={styles.testimonials}>
    <h2>What Students Say</h2>
    <div className={styles.testimonial}>
      <p>"This platform changed my career!"</p>
      <p>- Linda Code</p>
    </div>
    <div className={styles.testimonial}>
      <p>"The instructors are top-notch!"</p>
      <p>- Ravi Learns</p>
    </div>
  </section>
    );
}

export default Reviews;