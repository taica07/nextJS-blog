import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> mihaidev </div>
      <div className={styles.text}>
        Creative thouths agency @ All rights reserved
      </div>
    </div>
  );
};

export default Footer;
