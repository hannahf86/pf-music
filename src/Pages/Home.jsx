// REACT ROUTER DOM
import { Link } from "react-router-dom";

const Home = () => {
  const styles = {
    background: "bg-background h-screen ",
    nameContainer: "px-6 pt-24",
    name: "font-bold text-black font-serif text-8xl",
    subName: "font-sans text-black text-8xl pt-4 text-right pr-8",
    taglineContainer: "pt-32",
    tagline: "font-serif text-black text-xl pl-6 leading-9",
    link: "font-serif text-lg text-black underline decoration-dashed px-6 pt-12 text-right hover:text-button",
  };

  return (
    <div className={styles.background}>
      <div className={styles.nameContainer}>
        <h2 className={styles.name}>PAUL FEEHAN</h2>
        <h3 className={styles.subName}>Music</h3>
      </div>

      <div className={styles.taglineContainer}>
        <p className={styles.tagline}>
          Top piano teacher in the UK <br />
          Award winning pianist
          <br />
          Accomplished composer <br />
          Experienced ensemble director
        </p>
        <Link to="../services">
          <p className={styles.link}>Find out more</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
