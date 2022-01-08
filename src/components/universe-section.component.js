import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const UniverseSection = ({ type }) => {
    const imageHeight = 75
  return (
    <article className="w-1/2 inline-flex flex-col h-screen justify-center items-center bg-white dark:bg-stone-900">
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
    </article>
  );
};

export default UniverseSection;
