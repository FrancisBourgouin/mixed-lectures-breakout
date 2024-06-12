import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import UserContext from "./context/UserContext";
import { users } from "./data/users";
import LoginPage from "./pages/LoginPage";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useLocalStorage("userId", null);

  const updateUser = userId => {
    setUser(users[userId])
    setUserId(userId)
  }

  const clearUser = () => {
    setUser(null)
    setUserId(null)
  }

  useEffect(() => {
    if(userId){
      setUser(users[userId])
    }
  }, [])
  return (
    <>
      <UserContext.Provider value={{user, updateUser, clearUser}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/posts/:userId" element={<PostPage />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
