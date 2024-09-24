// TO BE REPLACED WITH ONLINE STORE <<<<<<<<<<<<<

const Music = () => {
  const styles = {
    background: "bg-background px-6 py-12 h-screen",
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
    <div id="music" className={styles.background}>
      <h1 className={styles.title}>MUSIC</h1>
      <p className="font-serif">
        Below are some of the original compositions and arrangements Paul has
        written.
      </p>
    </div>
  );
};

export default Music;
