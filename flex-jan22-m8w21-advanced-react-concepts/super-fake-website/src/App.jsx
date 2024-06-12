import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserContext from "./context/UserContext";
import { users } from "./data/users";
import LoginForm from "./components/LoginForm";
// import ViewContext from "./context/ViewContext";

import { Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = useState(null);
  const updateUser = (userId) => setUser(users[userId]);

  const [view, setView] = useState("HOME");

  // const toggleView = () => {
  //   // A way to change the URL in the address bar
  //   // A way to read what is currently there, so that we can get the data from it
  //   setView(view === "HOME" ? "LOGIN" : "HOME");
  // };

  return (
    // <ViewContext.Provider value={{ view, toggleView }}>

    <UserContext.Provider value={{ user, updateUser }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </UserContext.Provider>
    // </ViewContext.Provider>
  );
}

export default App;

// Context => Keeps stateful information, at the cost of refreshing everything
// User login, Visual theme, Page navigation!

// Home page => app.get("/")
// Login page => app.get("/login")

// Home view
// Login view