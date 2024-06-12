import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostPage(props) {
  const [posts, setPosts] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, [userId]);

  const goodPosts =
    Array.isArray(posts) && userId
      ? posts.filter((post) => post.userId === Number(userId))
      : posts;

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
      <h1>Posts page!</h1>
      <section>{parsedPosts}</section>
    </div>
  );
}
