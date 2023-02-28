import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <div>
      <div className={styles.footer_main}>
        <div className={styles.footer_bottom}>
          <div className={styles.container}>
            <div className={styles.footer_bottom_content}>
              <p className={styles.copyright}>© 2023 Hanoi. Made <i className="fa fa-heart"></i> by Duyen D.T</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
