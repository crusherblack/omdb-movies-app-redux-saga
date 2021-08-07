import React, { useEffect, useState } from "react";
import { anagramsChecker } from "utils/index";

const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

const Anagram = () => {
  const [result, setResult] = useState([]);
  const [textArea, setTextArea] = useState(words);

  useEffect(() => {
    setResult(anagramsChecker(textArea));
  }, [textArea]);

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark text-white flex-column"
      style={{
        minHeight: "100vh",
      }}
    >
      <h4>Anagram Checker: dont use whitespace</h4>
      <textarea
        value={textArea}
        cols="30"
        rows="10"
        onChange={(e) => setTextArea(e.target.value.split(","))}
      ></textarea>
      <h1>Result</h1>
      <h1>
        [
        {result.map((level1) => (
          <h1>
            [
            {level1.map(
              (level2, index) => level2 + (index < level1.length - 1 ? "," : "")
            )}
            ]
          </h1>
        ))}
        ]
      </h1>
    </div>
  );
};

export default Anagram;
