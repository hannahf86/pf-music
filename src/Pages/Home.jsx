// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import background from "../Assets/background.webp";

const Home = () => {
  const styles = {
    background: "bg-background h-screen pt-12",
    nameContainer: "px-6 mt-32",
    name: "font-bold text-black font-serif text-8xl",
    subName: "font-sans text-7xl pt-4 text-right pr-4",
  };

  return (
    <div className={styles.background}>
      <div className={styles.nameContainer}>
        <h2 className={styles.name}>PAUL FEEHAN</h2>
        <h3 className={styles.subName}>Music</h3>
      </div>
    </div>
  );
};

export default Home;
