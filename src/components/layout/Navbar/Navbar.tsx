import { NavLink } from "react-router-dom";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

import wordmark from "../../../assets/logo/ScrapTogetherWordMark.png";
import logo from "../../../assets/logo/ScrapTogether.png";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <img src={logo} alt="ScrapTogether" />
            <img src={wordmark} alt="ScrapTogether" />
          </div>

          <div className={styles.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/find-players"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Find Players
            </NavLink>

            <NavLink
              to="/party-browser"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Crews
            </NavLink>

            <NavLink
              to="/community"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Community
            </NavLink>
          </div>

          <div className={styles.actions}>
            <Button>Join Discord</Button>

            <Button variant="secondary">Login</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
