import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Header(props) {
  const { user, clearUser } = useContext(UserContext);
  return (
    <header>
      <h1>Super Blog Website</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {!user && <Link to="/login">Login</Link>}
        {user && <Link onClick={clearUser}>Logout</Link>}
        {user && (
          <>
            <img src={user.profile_picture} alt="" />
            <span>{user.name}</span>
          </>
        )}
      </nav>
    </header>
  );
}
