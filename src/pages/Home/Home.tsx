import { Link } from "react-router-dom";

import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";
import Section from "../../components/ui/Section/Section";

import wordmark from "../../assets/logo/ScrapTogetherWordMark.png";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <img
              src={wordmark}
              alt="ScrapTogether"
              className={styles.wordmark}
            />

            <h1>
              Find your crew.
              <br />
              Build together.
            </h1>

            <p>
              ScrapTogether helps you find players, create parties, and connect
              with the Scrap Mechanic community.
            </p>

            <div className={styles.actions}>
              <Link to="/find-players">
                <Button>Find Players</Button>
              </Link>

              <Button variant="secondary">Join Discord</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className={styles.features}>
        <Container>
          <div className={styles.featureGrid}>
            <Card>
              <h3>Matchmaking</h3>

              <p>Get paired with other active Mechanics based on your preferences with our Matchmaking system.</p>
            </Card>

            <Card>
              <h3>Create Crews</h3>

              <p>Start a group and find Mechanics ready to build or survive!</p>
            </Card>

            <Card>
              <h3>The Future Looks Promising</h3>

              <p>
                The future of ScrapTogether is bright! We are constantly working on new features and improvements to make your experience even better.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Why ScrapTogether?</h2>

            <p>Scrap Mechanic is better when you build together.</p>
          </div>

          <div className={styles.featureGrid}>
            <Card>
              <h3>Find Mechanics</h3>

              <p>Meet players who want to create, experiment, and build.</p>
            </Card>

            <Card>
              <h3>Build Groups</h3>

              <p>Create parties and find your crew before jumping in.</p>
            </Card>

            <Card>
              <h3>Community First</h3>

              <p>A central place for players, creators, and builders.</p>
            </Card>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>How ScrapTogether Works</h2>

            <p>Finding your crew should be simple.</p>
          </div>

          <div className={styles.steps}>
            <Card>
              <span>01</span>

              <h3>Find Mechanics</h3>

              <p>
                Discover Mechanics who share your interests and want to play.
              </p>
            </Card>

            <Card>
              <span>02</span>

              <h3>Create a Crew</h3>

              <p>Build a group, invite others, and plan your next session.</p>
            </Card>

            <Card>
              <span>03</span>

              <h3>Start Building</h3>

              <p>Jump into Scrap Mechanic and create something together.</p>
            </Card>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={styles.discord}>
            <h2>Ready to join the crew?</h2>

            <p>
              Connect with Mechanics, share creations, and find people to build
              with.
            </p>

            <Button>Join Discord</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
