import { useState } from "react";

import "./App.css";
import Pet from "./Pet.jsx";
import SearchParams from "../SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Hava" />
      <Pet name="Dolink" animal="cat" breed="Mixed" /> */}

      <SearchParams/>
    </div>
  );
};

export default App;
