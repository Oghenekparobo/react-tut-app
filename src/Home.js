
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data:blogs , error , pending} = useFetch("http://localhost:3000/blogs")
 

 

  return (
    <div className="home">
      { error && <div className="">{error}</div> }
      {pending && <div className="">loading | please wait..</div>}
      {blogs && <BlogList blogs={blogs} title="Blogs" />}
    </div>
  );
};

export default Home;
