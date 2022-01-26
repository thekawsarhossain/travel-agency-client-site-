import React from "react";
import Banner from "./Components/Home/Banner";
import Footer from "./Components/Shared/Footer";
import Navigation from "./Components/Shared/Navigation";
import "./tailwind.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
