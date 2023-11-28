import "./App.css";

import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import useCities from "./hooks/useCities";

import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const { cities, addCity, toggleCity } = useCities();
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
        <Routes>
          <Route path="/" element={<Home cities={cities} user={user} />} />
          <Route
            path="/cities"
            element={<Cities cities={cities} addCity={addCity} toggleCity={toggleCity} />}
          />
          <Route path="/profile" element={<Profile onSubmit={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;

// const handleSubmit = event => {
//   event.preventDefault()
// }
// <a></a>

// const handleLinkClick = event => {
//   event.preventDefault()
// }
