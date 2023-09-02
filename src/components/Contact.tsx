import { useRef } from "react";
import { faUser, faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Notification } from "@mantine/core";

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobileno: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobileno: (value) =>
        /^(0|91)?[6-9][0-9]{9}$/.test(value) ? null : "Invalid mobile number",
    },
  });

  const emailform: any = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_h39tvzn",
        "template_ji2z5op",
        emailform.current,
        "y0cd1sqUd95Rmx5Wp"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          if (result.text == "OK") {
            toast.success("Your message has been send successfully.");
          } else {
            toast.error("Some error in sending the message.");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="fifthSection">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <span className="text-gray">Reach out to me</span>
      <h1>Contact Me</h1>
      <div className="container">
        <div className="form-box">
          <h2
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Contact Me
          </h2>
          <form
            ref={emailform}
            onSubmit={form.onSubmit((values) => {
              console.log(values);
              sendEmail();
              
                values.name = "";
                values.email = "";
                values.mobileno = "";
                values.message = "";
              
            })}
          >
            <TextInput
              label="Name"
              icon={<FontAwesomeIcon icon={faUser} />}
              placeholder="Your name"
              {...form.getInputProps("name")}
              name="name"
              required
            />
            <TextInput
              label="Email"
              icon={<FontAwesomeIcon icon={faAt} />}
              placeholder="Your email"
              name="email"
              {...form.getInputProps("email")}
              required
            />
            <TextInput
              label="Mobile No"
              icon={<FontAwesomeIcon icon={faPhone} />}
              placeholder="Your mobile no"
              {...form.getInputProps("mobileno")}
              name="mobileno"
              required
            />
            <Textarea
              label="Message"
              placeholder="Message"
              minRows={7}
              autosize
              {...form.getInputProps("message")}
              name="message"
              required
            />
            <div className="action_btns">
              <a
                href="mailto:deepcoomer45@gmail.com"
                style={{ margin: "auto" }}
              >
                <button type="submit" className="hire_me">
                  Submit
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
