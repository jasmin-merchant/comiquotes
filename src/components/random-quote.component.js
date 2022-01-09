import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const RandomQuote = ({ type }) => {
  const [randomQuote, setRandomQuote] = useState({});

  const getQuoteData = async (type) => {
    return await fetch(
      `https://superhero-quotes.herokuapp.com/grab?banner=${type}&size=1`
    )
      .then((response) => response.json())
      .then((quoteResult) => {
        const quoteData = quoteResult.Items[0];
        return quoteData;
      })
      .catch((error) => {
        console.log("error", error);
        return null;
      });
  };

  const setQuoteData = async (type) => {
    const quoteData = await getQuoteData(type);
    setRandomQuote(quoteData);
  };

  useEffect(() => {
    setQuoteData(type);
  }, [type]);

  return (
    <div className="font-audiowide dark:text-white">
      {randomQuote && randomQuote.data ? (
        <div>
          <div>
            <p className="quote text-center">{randomQuote.data.quote}</p>
            <p className="author text-right">- {randomQuote.data.author}</p>
          </div>
          <div className="action-icons text-center mt-6">
            <div className="relative inline-flex flex-col items-center">
              <div
                className="absolute bottom-0 w-40 flex flex-col items-center hidden mb-6"
                id={`tooltip-${type}`}
              >
                <span className="relative z-10 p-2 text-xs leading-none text-white dark:text-stone-900 whitespace-no-wrap bg-stone-900 dark:bg-white shadow-lg">
                  Copied to clipboard!
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-stone-900 dark:bg-white"></div>
              </div>
              <FontAwesomeIcon
                className="dark:text-white mr-4 hover:cursor-pointer"
                icon={faCopy}
                onClick={() => {
                  navigator.clipboard.writeText(randomQuote.data.quote + "\r\n\r\n- " + randomQuote.data.author);
                  document
                    .querySelector("#tooltip-" + type)
                    .classList.remove("hidden");
                  setTimeout(() => {
                    document
                      .querySelector("#tooltip-" + type)
                      .classList.add("hidden");
                  }, 1500);
                }}
              />
            </div>
            <div className="inline-flex">
              <FontAwesomeIcon
                className="dark:text-white hover:cursor-pointer"
                icon={faSyncAlt}
                onClick={() => setQuoteData(type)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>No Quotes</div>
      )}
    </div>
  );
};

export default RandomQuote;
