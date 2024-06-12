import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function HomePage(props) {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, [user]);

  const goodPosts = Array.isArray(posts) && user ? posts.filter(post => post.userId === user.id) : posts

  const parsedPosts =
    Array.isArray(goodPosts) &&
    goodPosts.map((post) => (
      <article key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    ));

  return (
    <div>
      <h1>Home posts!</h1>
      <section>{parsedPosts}</section>
    </div>
  );
}
