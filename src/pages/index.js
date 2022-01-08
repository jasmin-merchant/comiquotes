import * as React from "react";
import Header from "../components/header.component";
import UniverseSection from "../components/universe-section.component";

const IndexPage = () => {
  return (
    <div className="dark dark:bg-stone-900">
      <Header />
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
