"use client";
import { useState } from "react";
import ContactForm from "../ContactForm"; 
import SuccessMessage from "../ContactForm/success";

type Props = {};

const Footer: React.FC<Props> = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmitSuccess = () => {
    setSubmitted(true);
  };

  const handleCloseSuccessMessage = () => {
    setSubmitted(false);
  };

  return (
    <footer className="w-full">
      <section className="mx-auto px-5 flex max-w-[1240px] items-center justify-between">
        <div className="grid sm:grid-cols-2 items-center gap-8 md:gap-16 my-6 w-full max-w-[1240px] bg-white">
          <div className="align-center">
            <p className="mb-4 text-[#c28e1c]">Get in touch with us.</p>
            <h2 className="text-4xl md:text-[2.625rem] font-bold mb-8 md:mb-[52px]">Contact Us</h2>
          </div>
          {submitted ? (
             <SuccessMessage onClose={handleCloseSuccessMessage} />
          ) : (
            <ContactForm onSubmitSuccess={handleFormSubmitSuccess} />
          )}
        </div>
      </section>
      <section className="bg-[#5f460e] w-full py-10">
        <div className="max-w-[1240px] m-auto">
          <h1>hi</h1>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
