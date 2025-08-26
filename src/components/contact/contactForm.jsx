import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-4">
        If you have any questions, feel free to reach out to us via the form
        below.
      </p>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          id="from_address"
          name="from_address"
          placeholder="Your Address"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          id="from_email"
          name="from_email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          id="from_phone"
          name="from_phone"
          placeholder="Your Phone Number"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
