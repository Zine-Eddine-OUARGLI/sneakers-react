import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FiHome } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { TbClockHour4 } from "react-icons/tb";
import ContactMap from "../components/contact/contactMap";
import ContactForm from "../components/contact/contactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[url('/imgs/contact-bg.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl">Home / Contact</h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg mt-8 flex justify-around items-center w-full p-6">
        <div className="bg-gray-100 py-12 px-20 mx-10 flex flex-col gap-6 rounded-lg w-200">
          <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6 justify-around">
            <div className="flex   gap-3">
              <FiHome className="w-10 h-8 flex items-center justify-center mt-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white text-xl" />
              <div>
                <h1 className="text-2xl font-bold mb-4">Our Location</h1>
                <p>123 Sneaker Street, Shoe City, SC 12345</p>
              </div>
            </div>
            <div className="flex gap-3">
              <TbPhoneCall className="w-8 h-8 flex items-center justify-center mt-7 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white text-xl" />
              <div>
                <h1 className="text-2xl font-bold mt-6">Phone: </h1>
                <p className="mt-2">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex gap-3">
              <HiOutlineMail className="w-8 h-8 flex items-center justify-center mt-8 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white text-xl" />
              <div>
                <h1 className="text-2xl font-bold mt-6">Email Us:</h1>
                <p>
                  <a href="mailto:" className="text-blue-500 hover:underline">
                    sneakers@mail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <TbClockHour4 className="w-12 h-10 flex items-center justify-center mt-8 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white text-xl" />
              <div>
                <h1 className="text-2xl font-bold mt-6">Business Hours:</h1>
                <p className="mt-2 ">
                  Mon-Fri 9:00 AM - 6:00 PM, Sat-Sun Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="w-full h-[400px] m-0 p-0">
        <ContactMap />
      </div>
      <Footer />
    </div>
  );
}
