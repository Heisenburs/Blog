import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
 <span>Welcome, <em>{user.name}</em></span>{" " }

      <Link to="/">HOME</Link> 
        &nbsp; | &nbsp;

      <Link to="/">YOUR POSTS</Link>
      
      &nbsp; | &nbsp;
      <Link to="/">CREATE</Link>
      &nbsp;
      
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
