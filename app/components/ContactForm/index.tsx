"use client";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  subject: string;
  from_name: string;
}

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    subject: "Point of View Submission Form",
    from_name: "POV Submission",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "ca30fb47-54d2-44c3-b41b-626aa73ca31a",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: formData.subject,
        from_name: formData.from_name,
      });
      onSubmitSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="ca30fb47-54d2-44c3-b41b-626aa73ca31a" />
      <input type="hidden" name="subject" value={formData.subject} />
      <input type="hidden" name="from_name" value={formData.from_name} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-normal text-[#4b5563]">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          placeholder="John Doe"
          required
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#c28e1c]-100 focus:border-[#c28e1c]-300"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-normal text-[#4b5563]">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          placeholder="example@domain.com"
          required
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#c28e1c]-100 focus:border-[#c28e1c]-300"
        />
      </div>
      <div className="mb-6">
      <label htmlFor="message" className="block mb-2 text-normal text-[#4b5563]">Message</label>
        <textarea
          rows={5}
          name="message"
          id="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#c28e1c]-100 focus:border-[#c28e1c]-300"
          required
        ></textarea>
      </div>

      <div className="mb-6">
        <button
          type="submit"
          className="rounded-lg w-full px-3 py-4 text-white bg-[#5f460e] hover:bg-[#4b5563] focus:bg-[#4b5563] focus:outline-none"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
