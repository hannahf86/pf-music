// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import lesson from "../Assets/lesson.webp";
import conduct from "../Assets/conduct.webp";
import perform from "../Assets/perform.webp";
import compose from "../Assets/compose.webp";

const Services = () => {
  const styles = {
    background: "bg-background px-6 py-12 h-full",
    title: "font-bold text-black font-serif text-7xl pb-8",
    serviceContainer: "flex flex-1 flex-col",
    container: "my-8 flex flex-col",
    serviceTitle:
      "font-bold text-black font-serif text-2xl text-center pt-4 underline decoration-dashed",
    contactInfo: "text-center pb-6",
    button:
      "text-white font-serif text-lg tracking-wider bg-black outline outline-offset-2 outline-black px-12 py-2 rounded-full hover:bg-button hover:outline-none",
  };

  return (
    <div id="services" className={styles.background}>
      <h1 className={styles.title}>SERVICES</h1>
      <p className="font-serif">
        As an experienced musician and teacher, Paul offers all of the services
        listed below.
      </p>

      {/* SERVICES */}
      <div className={styles.serviceContainer}>
        {/* ITEM 01 */}
        <div className={styles.container}>
          <img src={perform} alt="piano performance" />
          <h2 className={styles.serviceTitle}>TEACHING</h2>
        </div>

        {/* ITEM 02 */}
        <div className={styles.container}>
          <img src={lesson} alt="piano lesson" loading="lazy" />
          <h2 className={styles.serviceTitle}>PIANO LESSONS</h2>
        </div>

        {/* ITEM 03 */}
        <div className={styles.container}>
          <img src={conduct} alt="conducting ensembles" loading="lazy" />
          <h2 className={styles.serviceTitle}>ENSEMBLE DIRECTING</h2>
        </div>

        {/* ITEM 04 */}
        <div className={styles.container}>
          <img src={compose} alt="composing music" loading="lazy" />
          <h2 className={styles.serviceTitle}>COMPOSING & ARRANGING</h2>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <p className={styles.contactInfo}>
          Please get in touch to find out more
        </p>
        <Link to="contact" className={styles.button}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Services;
