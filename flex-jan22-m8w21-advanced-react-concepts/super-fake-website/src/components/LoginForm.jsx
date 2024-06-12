import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function LoginForm(props) {
  const { updateUser } = useContext(UserContext);

  const [userId, setUserId] = useState("");

  const handleSubmit = event => {
    event.preventDefault()

    updateUser(userId)
    setUserId("")
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your userId"
        onChange={(event) => setUserId(event.target.value)}
        value={userId}
      />
      <button>Log in!</button>
    </form>
  );
}
