import { Link } from "react-router-dom";
import BlogPosts from "../components/BlogPosts";
import Header from "../components/Header";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function HomePage(props) {
  const {user} = useContext(UserContext)
  return (
    <>
      <Header/>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <BlogPosts />
      <footer>
        <p>Copyright 2024</p>
        {user && <button>Logout</button>}
      </footer>
    </>
  );
}
