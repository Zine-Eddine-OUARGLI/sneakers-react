import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProgressMobileStepper from "../components/progressMobileStepper";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Giorno G.",
    role: "Market Analytics",
    image: "/imgs/men ph.jpg",
    text: "“As a sneaker enthusiast, I appreciate the attention to detail and quality of Sneakers's collection. Each pair feels like a work of art.”",
    rating: "10/10 recommend",
  },
  {
    id: 2,
    name: "Jonathan J.",
    role: "Fashion Blogger",
    image: "/imgs/m1.jpg",
    text: "“Sneakers has become my go-to for stylish and comfortable sneakers. Their selection is always on point!”",
    rating: "10/10 recommend",
  },
  {
    id: 3,
    name: "Joseph J.",
    role: "Fitness Trainer",
    image: "/imgs/m2.jpg",
    text: "“I love how Sneakers combines performance and style. These sneakers have taken my workouts to the next level!”",
    rating: "10/10 recommend",
  },
  {
    id: 4,
    name: "Jotaro K.",
    role: "Graphic Designer",
    image: "/imgs/m3.jpg",
    text: "“Sneakers's unique designs always catch my eye. I love expressing my personality through their sneakers!”",
    rating: "10/10 recommend",
  },
  {
    id: 5,
    name: "Josuke H.",
    role: "Tech Enthusiast",
    image: "/imgs/m4.jpg",
    text: "“Sneakers has a fantastic range of sneakers that perfectly blend technology and style. I'm always impressed!”",
    rating: "10/10 recommend",
  },
];

export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[url('/imgs/contact-bg.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl">Home / About</h1>
      </div>
      <div className="mx-auto">
        <div className="flex items-center gap-10 bg-gray-100">
          <div className="flex items-center gap-8 w-full">
            <img
              src="/imgs/nike-1.jpg"
              alt="Nike"
              className="w-[300px] rounded-xl shadow-lg border-2 border-blue-200 hover:border-cyan-400 transition-all duration-300 ml-20"
            />
            <div className="flex flex-col space-y-6 max-w-xl">
              <h2 className="text-gray-900 text-4xl font-bold mb-2 hover:text-amber-400 transition-colors duration-200">
                Our Sneaker Journey
              </h2>
              <p className="text-gray-600 text-lg opacity-90 mb-4">
                Sneakers™ began with a love for sneakers. We've evolved into a
                hub for innovation and community, uniting enthusiasts globally
                with our curated selection and passion-driven approach.
              </p>
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-blue-900 transition-all duration-200 font-bold">
                Let's Go
              </button>
            </div>
          </div>
          <img
            src="/imgs/shoes-2.jpg"
            alt="Shoes"
            className="w-[700px] h-[500px] object-cover"
          />
        </div>
      </div>

      <div className="flex items-center mt-12">
        <img
          src="\imgs\lebron-5048790_1280.jpg"
          alt="Nike"
          className="w-[300px] rounded-xl shadow-lg border-2 border-blue-200 hover:border-cyan-400 transition-all duration-300 ml-20 mt-12"
        />
        <div className="flex flex-col space-y-6 max-w-xl ml-12">
          <h1 className="text-4xl font-bold ml-20 mt-12 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
            Our Mission
          </h1>
          <p className="text-gray-600 text-lg opacity-90 mx-20 mb-12">
            At Sneakers™, our mission is to inspire and connect sneaker
            enthusiasts worldwide. We strive to provide a platform that
            celebrates the culture, innovation, and community surrounding
            sneakers.
          </p>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-blue-900 transition-all duration-200 font-bold mx-20 mb-12">
            Let's Go
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around mt-12 bg-gray-100">
        <div className="flex flex-col space-y-6 max-w-xl ml-12">
          <h1 className="text-4xl font-bold ml-20 mt-12 mb-6 text-black hover:text-amber-400 transition-colors duration-200">
            Our Motto
          </h1>
          <p className="text-gray-600 text-lg opacity-90 mx-20 mb-12">
            "Sneakers™: Where Every Step Tells a Tale." We believe that every
            sneaker has a story, and we are here to share those stories with the
            world. Our motto reflects our commitment to celebrating the unique
            journeys and experiences that sneakers bring to our lives.
          </p>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 px-6 py-2 rounded-xl shadow hover:scale-105 hover:cursor-pointer hover:text-blue-900 transition-all duration-200 font-bold mx-20 mb-12">
            Let's Go
          </button>
        </div>
        <img
          src="/imgs/nike-4.jpg"
          alt="nike"
          className=" w-[300px] rounded-xl shadow-lg border-2 border-blue-200 hover:border-cyan-400 transition-all duration-300 mt-12"
        />
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="flex flex-col justify-center mt-6">
          <div
            key={testimonials[activeStep].id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={testimonials[activeStep].image}
              alt={testimonials[activeStep].name}
              className="w-50 h-50 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">
              {testimonials[activeStep].name}
            </h3>
            <p className="text-gray-600">{testimonials[activeStep].role}</p>
            <p className="mt-4 text-gray-800">
              {testimonials[activeStep].text}
            </p>
            <p className="mt-2 text-yellow-500 font-bold">
              {testimonials[activeStep].rating}
            </p>
          </div>
          <div className="flex justify-center w-full mb-6 mt-10">
            <ProgressMobileStepper
              steps={testimonials.length}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
