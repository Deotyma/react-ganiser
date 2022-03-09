import { Link } from "react-router-dom";

const Navbar = () => {
    return (
     <>
      <nav>
        <Link className="primary_button" to="/">Home</Link> |{" "}
        <Link className="primary_button" to="signup">Sign up</Link> |{" "}
        <Link className="primary_button" to="login">Log in</Link>
      </nav>
     </>
    );
  }
  
  export default Navbar;