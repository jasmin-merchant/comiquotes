import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import RandomQuote from "./random-quote.component";

const UniverseSection = ({ type }) => {
  const imageHeight = 75;
  return (
    <article className="w-full lg:w-1/2 inline-flex flex-col h-[calc(50vh_-_41px)] lg:h-screen justify-center items-center bg-white dark:bg-stone-900">
      <div className="img-wrapper">
        {type === "dcu" ? (
          <StaticImage
            height={imageHeight}
            layout="fixed"
            alt="mcu"
            src={`../images/universes/dcu-logo.png`}
          />
        ) : (
          <StaticImage
            height={imageHeight}
            layout="constrained"
            alt="mcu"
            src={`../images/universes/mcu-logo.png`}
          />
        )}
      </div>
      <div className="homepage-quote-rapper mt-6 w-3/5 mx-auto">
          <RandomQuote type={type} />
      </div>
    </article>
  );
};

export default UniverseSection;
