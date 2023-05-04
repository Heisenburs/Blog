import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";
import { Container } from "react-bootstrap";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <Container>
       <nav>
 <span>Welcome, <em>{user.name}</em></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <Link to="/">HOME</Link> 
        &nbsp; | &nbsp;

      <Link to="/myposts">YOUR POSTS</Link>
      
      &nbsp; | &nbsp;
      <Link to="/posts/new">CREATE</Link>
      &nbsp;
      &nbsp;
      &nbsp;&nbsp;
      &nbsp;
      &nbsp;
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
    </Container>
   
  );
}

export default NavBar;
