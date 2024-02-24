import React from "react";
import { styles } from "../styles";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import { send, sendHover } from "../assets";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
    };

    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (form.message.trim() === "") {
      newErrors.message = "message is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    emailjs
      .send(
        "service_2k9qtqq",
        "template_1ldvdir",
        {
          from_name: form.name,
          to_name: "Thuy Pham",
          from_email: form.email,
          message: form.message,
        },
        "A_YubUHnveoG41d4p"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <span id="contact">
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` `}
        id="contact"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-jet p-8 rounded-2xl"
        >
          <h2 className={styles.sectionHeadText}>Contact</h2>
          <div className="flex justify-center h-screen">
            <div className="bg-gray-300 w-9/12 h-4/6 p-10 rounded-md self-center">
              <h3 className={styles.sectionSubText}>Get in Touch</h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col justify-between h-32"
              >
                <div className="my-2">
                  <label className="text-timberWolf font-medium mb-4">
                    Your Name:
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"></div>
                      <input
                        className="w-full"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                      />
                    </div>
                  </label>
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name}</span>
                  )}
                </div>
                <div className="my-2">
                  <label className="text-timberWolf font-medium mb-4">
                    Your Email:
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"></div>
                      <input
                        className="w-full"
                        value={form.email}
                        onChange={handleChange}
                        type="text"
                        name="email"
                      />
                    </div>
                  </label>
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>
                <div className="my-2">
                  <label className="text-timberWolf font-medium mb-4">
                    Your Message:
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"></div>
                      <textarea
                        row="7"
                        className="w-full"
                        value={form.message}
                        onChange={handleChange}
                        type="text"
                        name="message"
                      />
                    </div>
                  </label>
                  {errors.message && (
                    <span style={{ color: "red" }}>{errors.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out bg-white "
                  onMouseOver={() => {
                    document
                      .querySelector(".contact-btn")
                      .setAttribute("src", sendHover);
                  }}
                  onMouseOut={() => {
                    document
                      .querySelector(".contact-btn")
                      .setAttribute("src", send);
                  }}
                >
                  {loading ? "Sending" : "Send"}
                  <img
                    src={send}
                    alt="send"
                    className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
                  />
                </button>{" "}
              </form>
            </div>{" "}
          </div>
        </motion.div>
      </motion.section>
    </span>
  );
}

export default Contact;
