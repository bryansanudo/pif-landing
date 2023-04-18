import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { useState } from "react";
import Portfolio from "@/components/Portfolio";

import Contact from "@/components/Contact";

import Technologies from "@/components/Technologies";
import Navbar from "@/components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      {/*  <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />

        <Portfolio />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
