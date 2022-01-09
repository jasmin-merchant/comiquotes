import React, { useState } from "react";
import UniverseSection from "../components/universe-section.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Logo from "../components/logo.component";

const IndexPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`dark:bg-stone-900 ${isDarkTheme ? "dark" : ""}`}>
      <header className="w-full p-4 bg-white dark:bg-stone-900 lg:bg-transparent flex justify-between items-center relative lg:fixed z-10">
        <Logo />
        <div>
          <FontAwesomeIcon
            icon={isDarkTheme ? faSun : faMoon}
            className="text-stone-900 dark:text-yellow-400 text-xl hover:cursor-pointer"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          />
        </div>
      </header>
      <main className="">
        <title>ComiQuotes</title>
        <section className="flex flex-col lg:flex-row">
          <UniverseSection type="dcu" />
          <UniverseSection type="mcu" />
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
