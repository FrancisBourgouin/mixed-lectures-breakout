import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

const someUser = {
  name: "Pequeno Pollo de la Pampa",
  isLoggedIn: true,
};

function App() {
  const [user, setUser] = useState(someUser); // useState Hook!

  const toggleLoginStatus = () => {
    const updatedUser = { ...user };
    updatedUser.isLoggedIn = !updatedUser.isLoggedIn;

    setUser(updatedUser); // React will check for a shallow equality
  };

  return (
    <div className="App">
      <header>
        <h1>State party test!</h1>
      </header>
      <main>
        {/* <UserCard />
        <UserCard /> */}
        <UserCard
          name={user.name}
          isLoggedIn={user.isLoggedIn}
          toggleLoginStatus={toggleLoginStatus}
        />
      </main>
    </div>
  );
}

export default App;
