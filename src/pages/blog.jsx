import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BlogSideBar from "../components/blog/blogSideBar";

export default function Blog() {
  const blogPosts = [
    {
      image: "/imgs/comf.jpg",
      title: "Comfort and Support",
      content:
        "Experience superior cushioning and stability with our sneakers, designed for lasting comfort and support throughout your day.",
      comments: 15,
      date: "May 10, 2024",
    },
    {
      image: "/imgs/durab.jpg",
      title: "Durability and Style",
      content:
        "Crafted with high-quality materials, our sneakers offer both durability and a sleek design that complements any outfit.",
      comments: 8,
      date: "June 5, 2024",
    },
    {
      image: "/imgs/versat.jpg",
      title: "Versatility for Every Occasion",
      content:
        "From casual outings to light workouts, our sneakers are versatile enough to match your active lifestyle while keeping you stylish.",
      comments: 12,
      date: "July 15, 2024",
    },
    {
      image: "/imgs/tech.jpg",
      title: "Innovative Technology",
      content:
        "Incorporating the latest in footwear technology, our sneakers provide enhanced performance, breathability, and moisture-wicking properties.",
      comments: 20,
      date: "August 20, 2024",
    },
    {
      image: "/imgs/sustain.jpg",
      title: "Sustainability Matters",
      content:
        "Our commitment to sustainability means our sneakers are made with eco-friendly materials and processes, reducing environmental impact.",
      comments: 5,
      date: "September 1, 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[url('/imgs/contact-bg.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl">Home / Blog</h1>
      </div>
      <div className="flex items-center justify-center my-8">
        <div className="container mx-auto px-4 py-8 w-6/10">
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-4/12 h-100 object-cover"
                />
                <div className="p-4 w-8/12 flex justify-between flex-col">
                  <div className="mt-4 flex flex-col justify-around h-8/12">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/10 p-4 flex flex-col self-start space-y-8 mt-4 mr-5">
          <BlogSideBar blogPosts={blogPosts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
