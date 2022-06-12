import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {



  return (
    <div>
      <h1>{title}</h1>
      <div className="">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            </Link>
            
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
