import { EmailValidation, Input } from "@/components";
import { formFields } from "@/lib/types";
import { submitButtonVariants } from "@/lib/variants";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [fields, setFields] = useState<formFields>({});
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const subjectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      subject: e.target.value,
    });
  };
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value) &&
      e.target.value !== ""
    ) {
      setFields({ ...fields, email: e.target.value, emailError: true });
    } else {
      setFields({ ...fields, email: e.target.value, emailError: false });
    }
  };

  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFields({ ...fields, message: e.target.value });
  };

  const formOnSubmit = () => (e: any) => {
    e.preventDefault();
    if (!fields.email) {
      setFields({ ...fields, emailError: true });
      if (!fields.subject) setFields({ ...fields, subjectError: true });
      if (!fields.message) setFields({ ...fields, messageError: true });
      setTimeout(() => {
        setFields({
          ...fields,
          emailError: false,
          subjectError: false,
          messageError: false,
        });
      }, 2000);
      return;
    }
    emailjs
      .sendForm(
        "service_lg9duye",
        "template_rym5ebd",
        e.target,
        'RSx1jnIZcozMdSwMg',
      )
      .then(
        (res) => {
          if (res.text === "OK") setIsValid(true);
          else if (res.text === "KO") setIsValid(false);
        },
        (err) => {
          console.log(err.text);
        }
      );
    e.target.reset();
  };

  return (
    <motion.div className=" w-full  flex xl:flex-row md:flex-row flex-col items-center justify-center px-9 gap-8  ">
      <motion.div
        className=" flex flex-col justify-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h1 className="text-xl font-bold md:text-xl xl:text-xl">
          General inquiries
        </motion.h1>
        <motion.div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <AiOutlineMail className="text-2xl" />
            <a
              href="mailto:daaouakfayssal@gmail.com"
              className="text-slate-900 dark:text-slate-100"
            >
              daaouakfayssal@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <AiOutlinePhone className="text-2xl" />
            <a
              href="tel:+212 6 89 71 92 99"
              className="text-slate-900 dark:text-slate-100"
            >
              +212 6 89 71 92 99
            </a>
          </div>
        </motion.div>
      </motion.div>
      <div className="w-full flex flex-col gap-2 items-center justify-center max-w-5xl ">
        {isValid === null ? (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-bold md:text-xl xl:text-xl"
            >
              Request information
            </motion.h1>
            <form
              className="lg:w-[60%] xl:w-[50%] grid md:grid-cols-2 gap-2 lg:gap-4"
              onSubmit={formOnSubmit()}
            >
              <Input
                name="email"
                label="Email"
                HTMLType="text"
                inputOnChange={emailChangeHandler}
                error={fields.emailError}
                value={fields.email}
              />
              <Input
                name="subject"
                label="Subject"
                HTMLType="text"
                inputOnChange={subjectChangeHandler}
                error={fields.subjectError}
                value={fields.subject}
              />
              <Input
                name="message"
                label="Message"
                HTMLType="textarea"
                textAreaOnChange={textAreaChangeHandler}
                error={fields.messageError}
                value={fields.message}
                className="h-36 lg:h-40 xl:h-52"
              />
              <motion.button
                type="submit"
                className="md:col-span-2 text-xs px-4 py-2 md:text-sm 2xl:text-base border rounded-md border-slate-900 bg-slate-900 text-slate-100 
              dark:bg-slate-100 dark:text-slate-900"
                initial="hidden"
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1, duration: 0.2 },
                }}
                whileHover="hover"
                whileTap="tap"
                variants={submitButtonVariants}
              >
                Submit
              </motion.button>
            </form>
          </>
        ) : (
          <EmailValidation isValid={isValid} />
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
