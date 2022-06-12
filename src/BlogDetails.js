import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {
  const navigate = useNavigate()

  const { id } = useParams();
  const {
    pending,
    error,
    data: blog,
  } = useFetch(" http://localhost:3000/blogs/" + id);

  const deleteBlog = () =>{ 

    fetch(" http://localhost:3000/blogs/" + id , {
      method: 'DELETE'
    }).then(() =>{ 
      navigate('/')
    })

  }

  return (
    <div className="blog-details">
      {error && <div className="">{error}</div>}
      {pending && <div className="">loading | please wait..</div>}
      {blog && (
        <div className="blog-details">
          <article>
            <h2> {blog.title} </h2>
            <p>written by {blog.author}</p>
            <p>{blog.body}</p>
            <button onClick={deleteBlog}>DELETE</button>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
