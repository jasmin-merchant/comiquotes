import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const RandomQuote = ({ type }) => {
  const [randomQuote, setRandomQuote] = useState({});

  //   useEffect(() => {
  //       fetch("https://akabab.github.io/superhero-api/api/all.json")
  //         .then(response => response.json())
  //         .then(result => setRandomQuote(response))
  //         .catch(error => console.log('error', error));
  //   }, []);

  useEffect(() => {
    if (type === "dcu") {
      const randomQuoteVal = {
        id: "BJBmaixf27TepVXj55Qnf6",
        data: {
          author: "Harley Quinn",
          quote:
            "Every woman has a crazy side that only the right man can bring out.",
        },
      };
      setRandomQuote(randomQuoteVal);
    } else {
      const randomQuoteVal = {
        id: "HFTmV9cxK6u2yLanUesRai",
        data: {
          author: "Iron Man",
          quote:
            "You know what, give me a break, Steve. I just got hit in the head with a Hulk.",
        },
      };
      setRandomQuote(randomQuoteVal);
    }
  }, [type]);

  return (
    <div className="font-audiowide w-3/5 mx-auto dark:text-white">
      {randomQuote && randomQuote.data ? (
        <div>
          <div>
            <p className="quote text-center">{randomQuote.data.quote}</p>
            <p className="author text-right">- {randomQuote.data.author}</p>
          </div>
          <div className="action-icons text-center">
            <FontAwesomeIcon
              className="dark:text-white mr-4 hover:cursor-pointer"
              icon={faCopy}
              onClick={() => {
                navigator.clipboard.writeText(randomQuote.data.quote);
              }}
            />
            <FontAwesomeIcon
              className="dark:text-white hover:cursor-pointer"
              icon={faSyncAlt}
            />
          </div>
        </div>
      ) : (
        <div>No Quotes</div>
      )}
    </div>
  );
};

export default RandomQuote;
