import { useState } from "react";



export default function UserCard(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  const incrementCountByFive = () => {
    setCount(count + 1) // 0 + 1 => 1, Put that value in the count var on the next render
    setCount(count + 1) // 0 + 1 => 1, Put that value in the count var on the next render
    setCount(count + 1) // 0 + 1 => 1, Put that value in the count var on the next render
    setCount(count + 1) // 0 + 1 => 1, Put that value in the count var on the next render
    setCount(count + 1) // 0 + 1 => 1, Put that value in the count var on the next render

    // set functions should be used as a "commit"
  };

  

  console.log("Component was re-rendered");

  return (
    <article>
      <h1>Count is : {count}</h1>
      <button onClick={incrementCountByFive}>Count + 1</button>

      <h1>{props.name}</h1>

      {props.isLoggedIn && (
        <>
          <p>The props is currently logged in</p>
          <button onClick={props.toggleLoginStatus}>Log out</button>
        </>
      )}
      {!props.isLoggedIn && (
        <>
          <p>The user is not logged in</p>
          <button onClick={props.toggleLoginStatus}>Log in</button>
        </>
      )}
    </article>
  );
}
