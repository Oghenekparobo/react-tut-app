import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>sorry page not found</h1>
            <Link to="/">back to square one boss</Link>
        </div>
     );
}
 
export default NotFound;