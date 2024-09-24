const Contact = () => {
  const styles = {
    background: "bg-accent/50 px-6 py-12 h-full",
    title: "font-bold text-black font-serif text-7xl pb-8",
    form: "flex flex-col justify-center items-center",
    input: "py-2 my-2 pl-2 pr-12 focus:outline-button",
    textArea: "pb-20 pt-2 my-2 pl-2 pr-12",
    button:
      "text-white font-serif text-md tracking-wider bg-black outline outline-offset-2 outline-black px-16 py-2 mt-4 rounded-full hover:bg-button hover:outline-none",
  };

  return (
    <div id="contact" className={styles.background}>
      <h1 className={styles.title}>CONTACT</h1>
      <p className="font-serif pb-6">
        Please fill out the form below to get in touch with Paul. Thank you.
      </p>

      <form className={styles.form}>
        <input
          type="text"
          name="user_name"
          placeholder="Full name"
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          className={styles.textArea}
          required
        />
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
