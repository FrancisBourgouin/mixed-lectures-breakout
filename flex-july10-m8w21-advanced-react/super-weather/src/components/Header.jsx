import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header(props) {
  const [count, setCount] = useState(0);
  const location = useLocation();
  return (
    <header>
      {/* <button onClick={() => setCount(count + 1)}>Count is : {count}</button> */}
      <Link to="/">Home</Link>
      <Link to="/cities">Cities</Link>
      <Link to="/profile">Profile</Link>
      <h1>Currently on page: {location.pathname}</h1>
      {/* <a href="/">Home</a>
  <a href="/cities">Cities</a>
  <a href="/profile">Profile</a> */}
    </header>
  );
}
