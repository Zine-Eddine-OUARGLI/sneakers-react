export default function BlogRecent({ blogPosts }) {
  return (
    <div className="mb-8 w-full flex flex-col items-center shadow-md p-4">
      <h1 className="text-left ml-2 font-semibold text-2xl w-full">
        Recent Posts
      </h1>
      <ul className="w-full flex flex-col gap-4">
        {blogPosts.slice(0, 5).map((post, index) => (
          <li key={index} className="mb-4">
            <div className=" w-full h-0.5 bg-gray-200 mt-4 mb-6 "></div>
            <div className="text-black font-semibold flex items-center">
              <img
                className="w-20 h-20 object-cover mr-4"
                src={post.image}
                alt={post.title}
              />
              <div>
                {post.title}
                <p className="text-gray-600 text-sm">{post.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
