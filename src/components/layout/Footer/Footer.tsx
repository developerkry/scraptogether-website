import Container from "../../ui/Container/Container";

import styles from "./Footer.module.css";

import wordmark from "../../../assets/logo/ScrapTogetherWordMark.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <img src={wordmark} alt="ScrapTogether" />
            {/* <h3>ScrapTogether</h3> */}

            <p>Find your crew. Build together.</p>
          </div>

          <div className={styles.links}>
            <a href="#">Discord</a>

            <a href="#">GitHub</a>

            <a href="#">Support</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 ScrapTogether</p>
        </div>
      </Container>
    </footer>
  );
}
