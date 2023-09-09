import React, { useEffect } from "react";
import "./TextHover.css";
const TextHover = () => {
  useEffect(() => {
    let letterElements = document.querySelectorAll(".letter ");
    letterElements.forEach((letterElement) => {
      letterElement.addEventListener("mouseenter", () => {
        console.log("Hover");
        letterElement.classList.add("bounce");
      });

      letterElement.addEventListener("mouseleave", () => {
        setTimeout(() => {
          letterElement.classList.remove("bounce");
        }, 500);
      });
    });
  }, []);

  const wordwithnospace = "hello everyone how are you fine sank you".replaceAll(
    " ",
    "0"
  );
  const word = wordwithnospace.split("");
  console.log(word);
  return (
    <div className="m-3 flex flex-col items-center mb-5">
      <div className="font-extrabold text-center">TextHover</div>
      <div className="animatedletter">
        {word.map((letter, idx) => (
          <span key={idx} color="red" className="letter">
            {letter == 0 ? <span> &nbsp; </span> : letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextHover;
