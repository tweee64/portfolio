import React from "react";
import NavBar from "../NavBar";
import { useState } from "react";

function MainLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <NavBar onDarkMode={handleDarkMode} />
          <div>{children}</div>
        </section>
      </main>
    </div>
  );
}

export default MainLayout;
