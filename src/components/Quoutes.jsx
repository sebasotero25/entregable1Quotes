import React, { useState } from "react";
import quotes from "../quotes.json";
import Button from "./Button";

const Quoutes = () => {
  const colors = [
    "#0825E4",
    "#AC1080",
    "#5A59D0",
    "#7D98C7",
    "#362040",
    "#D902C4",
    "#62C54B",
    "#B46237",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changeQuote = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  };
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (
    <div className="card"  style={{ color: colors[randomColorIndex] }}>
      <i class="fa-solid fa-quote-left fa-2x"></i>
      <h2>{quotes[index].quote} </h2>
      <h5 className="author">{quotes[index].author}</h5>
      
      <Button 
      changeQuote={changeQuote}
      randomColorIndex={randomColorIndex}
      colors={colors}
      />

      
      
      
    </div>
  );
};

export default Quoutes;
