// REACT
import { useRef, useState } from "react";

// EMAIL JS
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

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

  // CLEAR FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // EMAIL JS
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm("service_igmsd0o", "template_mg063vq", formRef.current, {
        publicKey: "CLllgrNb6UYby4AOj",
      })
      .then(
        () => {
          toast.success(
            `Thanks for your email ${name}! We'll be in touch soon!`,
          );
          console.log("Success!");
        },
        (error) => {
          toast.error(`Oh no! There's been an error!`);
          console.log("Error!", error.message);
        },
      );
  };

  return (
    <div id="contact" className={styles.background}>
      <h1 className={styles.title}>CONTACT</h1>
      <p className="font-serif text-base pb-6">
        Please fill out the form below to get in touch with Paul. Thank you.
      </p>

      <form className={styles.form} onSubmit={sendEmail} ref={formRef}>
        <input
          type="text"
          name="name"
          aria-label="name input"
          value={name}
          placeholder="Full name"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          aria-label="email input"
          value={email}
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          aria-label="message input"
          name="message"
          value={message}
          placeholder="Enter your message"
          className={styles.textArea}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className={styles.button}>Send</button>
        <Toaster />
      </form>
    </div>
  );
};

export default Contact;
