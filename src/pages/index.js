import * as React from "react";
import Header from "../components/header.component";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main className="container-xl px-24 h-screen flex justify-items-center items-center">
        <title>ComiQuotes</title>
        <div className="flex-1">
          <h1 className="text-5xl text-center font-audiowide">
            <span className="text-red-900">Comi</span>Quotes
          </h1>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
