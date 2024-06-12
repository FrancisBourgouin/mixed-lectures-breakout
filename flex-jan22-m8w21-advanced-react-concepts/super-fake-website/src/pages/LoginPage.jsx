import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage(props) {

  return (
    <>
      <h1>Please login!</h1>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <LoginForm />
    </>
  );
}
