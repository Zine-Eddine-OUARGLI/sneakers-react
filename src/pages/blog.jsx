import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BlogSideBar from "../components/blog/blogSideBar";
import { blogPosts } from "../data/blogs";

export default function Blog() {
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
