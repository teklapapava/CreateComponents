import styles from "./Trainers.module.css"

function Trainers(){
    return(
        <section className={styles.trainers}>
        <h2>Meet the Trainers</h2>
        <div className={styles.trainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
            alt="Trainer 1"
          />
          <h4>Jessica Power</h4>
          <p>Certified Personal Trainer</p>
        </div>
        <div className={styles.trainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
            alt="Trainer 2"
          />
          <h4>Mark Iron</h4>
          <p>Strength Coach & Nutritionist</p>
        </div>
      </section>
    );
}

export default Trainers;