import { useEffect, useState } from "preact/hooks";

const toWrite = (keywords = [], setter, duration = 500) => {
  let currentWord = 0;
  let i = 0;
  let j = keywords[currentWord].length;

  let arrayCaracters = keywords[currentWord].split("");
  let textGenerate = "";

  setInterval(() => {
    if (i === arrayCaracters.length) {
      textGenerate = textGenerate.slice(0, -1);
      setter(textGenerate);
      j--;

      if (j === 0) {
        if (currentWord < keywords.length - 1) {
          currentWord++;
          arrayCaracters = keywords[currentWord];

          i = 0;
          j = keywords[currentWord].length;
        } else {
          currentWord = 0;
          arrayCaracters = keywords[currentWord];

          i = 0;
          j = keywords[currentWord].length;
        }
      }
    } else {
      textGenerate = textGenerate.concat(arrayCaracters[i]);
      setter(textGenerate);
      i++;
    }
  }, duration);
};

export const useTiping = (keywords, duration) => {
  const [text, setText] = useState("");

  useEffect(() => {
    toWrite(keywords, setText, duration);
  }, []);

  return text;
};
