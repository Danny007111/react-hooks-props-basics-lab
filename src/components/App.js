import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user.links);

function App(user) {
  return (
    <div>
      <NavBar />
      <Home />
      <About />{user.bio}
    </div>
  );
}

export default App;
