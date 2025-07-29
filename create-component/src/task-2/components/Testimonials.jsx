import styles from "./Testimonials.module.css"

function Testimonials(){
    return(
        <section className={styles.testimonials}>
        <h2>Client Results</h2>
        <div className={styles.testimonial}>
          <p>"I lost 20 pounds and feel amazing!"</p>
          <p>- Emily Fit</p>
        </div>
        <div className={styles.testimonial}>
          <p>"The trainers really know how to motivate!"</p>
          <p>- Jason Lift</p>
        </div>
      </section>
    );
}

export default Testimonials;