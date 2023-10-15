import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";

interface IFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

function Contact() {
  const schema = yup.object({
    name: yup
      .string()
      .required("Please enter your full name")
      .min(3, "Your name must be more than 3 characters."),
    subject: yup
      .string()
      .required("Please enter your subject.")
      .min(3, "Your subject must be more than 3 caracters."),
    email: yup
      .string()
      .email("Email must be a valid email.")
      .required("Please enter your email."),
    message: yup
      .string()
      .required("Please enter your message")
      .min(3, "Your message must be more than 3 caracters."),
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(formData: IFormData) {
    console.log(formData);
    reset({ name: "", subject: "", email: "", message: "" });
    setIsSubmit(true);
  }

  return (
    <main className={styles.container}>
      <section>
        <div>
          <form
            className={styles.form}
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Contact us</h1>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              {...register("name")}
            ></input>
            <p className={styles.formError}>{errors.name?.message}</p>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" {...register("subject")}></input>
            <p className={styles.formError}>{errors.subject?.message}</p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              {...register("email")}
            ></input>
            <p className={styles.formError}>{errors.email?.message}</p>
            <label htmlFor="message">Message: </label>
            <textarea id="message" {...register("message")}></textarea>
            <p className={styles.formError}>{errors.message?.message}</p>
            {isSubmit && (
              <div className={styles.successMessage}>
                Thank you for contacting us. We will get back to you shortly!
              </div>
            )}

            <button className={styles.submitBtn} type="submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
export default Contact;
