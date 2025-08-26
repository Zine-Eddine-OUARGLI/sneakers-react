import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[url('/imgs/contact-bg.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl">Home / Blog</h1>
      </div>
      <Footer />
    </div>
  );
}
