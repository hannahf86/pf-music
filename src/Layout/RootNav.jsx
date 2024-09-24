// REACT
import { useState } from "react";

// REACT ROUTER DOM
import { Link, Outlet } from "react-router-dom";

// ICONS
import { HiOutlineMenuAlt4, HiOutlineMinusSm } from "react-icons/hi";

const RootNav = () => {
  const styles = {
    navContainer: "z-0 h-16 bg-background",
    nav: "absolute top-6 right-6 cursor-pointer text-black",
    logo: "absolute top-6 left-6 font-serif text-black",
    fullNav:
      "top-0 absolute h-screen w-screen bg-white flex flex-col justify-start z-[99]",
    linksContainer: "flex flex-col pt-40",
    navLinks:
      "text-black font-serif py-4 pr-6 font-bold uppercase text-right text-7xl hover:tracking-wider hover:underline underline-offset-4 decoration-dashed hover:text-button",
  };

  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div id="root-nav">
      {/* TOP MENU */}
      <div id="nav-container" className={styles.navContainer}>
        <Link to="home" className={styles.logo}>
          <p className="font-extrabold">PF MUSIC</p>
        </Link>
        <div className={styles.nav} onClick={openNav}>
          <HiOutlineMenuAlt4 size={30} />
        </div>
      </div>
      {nav ? (
        <div id="full-nav" className={styles.fullNav}>
          <div className={styles.linksContainer}>
            <div className={styles.nav} onClick={openNav}>
              <HiOutlineMinusSm size={30} />
            </div>
            <Link to="home" className={styles.navLinks}>
              <span>Home</span>
            </Link>
            <Link to="music" className={styles.navLinks}>
              <span>Music</span>
            </Link>
            <Link to="lessons" className={styles.navLinks}>
              <span>Lessons</span>
            </Link>
            <Link to="contact" className={styles.navLinks}>
              <span>contact</span>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      <Outlet />
    </div>
  );
};

export default RootNav;
