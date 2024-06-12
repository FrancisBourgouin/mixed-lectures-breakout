import { useContext } from "react";
import LoginForm from "./LoginForm";
import UserBadge from "./UserBadge";
import UserContext from "../context/UserContext";

export default function Header(props) {
  const {user, updateUser} = useContext(UserContext)

  return (
    <header>
      <h1>Super cool blog website!</h1>
      {!user && <LoginForm setUser={updateUser}/>}
      {user && <UserBadge {...user}/>}
    </header>
  );
}
