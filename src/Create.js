import { useState } from "react";
import {useNavigate} from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [pending, setPending] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault()
      const blog = {title , body , author}

      setPending(true)
     
      fetch('http://localhost:3000/blogs' , {
          body:JSON.stringify(blog),
          headers:{
              "Content-Type" : "application/json"
          },
          method: "POST"
      }).then(() =>{ 
          setPending(false)
          navigate("/");
      })

    

  };

  return (
    <div className="create">
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <div className="">
          <label>Blog Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>

        <div className="">
          <label>Blog body:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            required
          ></textarea>
        </div>

        <div className="">
          <label>Blog author:</label>
          <select
            name=""
            id=""
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="mario">mario</option>
            <option value="jice">juice wrld</option>
            <option value="trouble">trouble</option>
          </select>{" "}
        </div>
        <div className="">
         {!pending ? <button>Add blog</button> : <button disabled>Adding blog.....</button>}
        </div>
      </form>
    </div>
  );
};

export default Create;
