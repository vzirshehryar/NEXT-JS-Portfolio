import Styles from "./page.module.css";

export default function Home() {
  return (
    <main className={Styles.main} id="main">
      <h1>Hi! Wazir Shehryar Here</h1>
      <p>
        <strong>Full Stack Web & Android App Development :</strong>
        <br />
        Empowering Businesses, Innovative Solutions and Seamless Experiences.
      </p>
      <img
        src="/images/4333097.jpg"
        className={Styles.image}
        alt="Web Development"
      />
      <img src="/images/hero-devices.svg" alt="Web Development" width="90%" />
    </main>
  );
}
