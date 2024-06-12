import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const { updateUser } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => setUserId(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(userId);
    setUserId("");
    navigate("/")
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your user id"
        onChange={handleChange}
        value={userId}
      />
      <button>Log in</button>
    </form>
  );
}
