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
      "top-0 absolute h-screen w-screen bg-background flex flex-col justify-start z-[99]",
    linksContainer: "flex flex-col pt-24",
    navLinks:
      "text-black font-serif py-4 pr-6 font-bold uppercase text-right text-7xl hover:tracking-wider hover:underline underline-offset-4 decoration-dashed hover:text-button",
    buttonContainer: "flex m-auto",
    button:
      "text-white font-serif text-lg tracking-wider bg-black outline outline-offset-2 outline-black px-24 py-4 rounded-full hover:bg-button hover:outline-none",
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
            <Link to="home" className={styles.navLinks} onClick={openNav}>
              <span>Home</span>
            </Link>
            <Link to="services" className={styles.navLinks} onClick={openNav}>
              <span>Services</span>
            </Link>

            <Link to="bio" className={styles.navLinks} onClick={openNav}>
              <span>Bio</span>
            </Link>
            <Link to="music" className={styles.navLinks} onClick={openNav}>
              <span>Music</span>
            </Link>
          </div>
          <Link to="contact" className={styles.buttonContainer}>
            <span>
              <button className={styles.button} onClick={openNav}>
                CONTACT
              </button>
            </span>
          </Link>
        </div>
      ) : (
        ""
      )}

      <Outlet />
    </div>
  );
};

export default RootNav;
