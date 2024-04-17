import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          incidunt enim? Odio temporibus delectus explicabo autem esse aliquid
          ab tempora.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brand} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
