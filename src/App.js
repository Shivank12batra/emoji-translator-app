import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojDict = {
    "😆": "Grinning Face",
    "😀": "Smiling Face",
    "😂": "Laughing With Tears",
    "🤑": "Money Face With Money Tongue",
    "😉": "Winking Face",
    "😍": "Smiling Face With Heat Eyes",
    "🙏": "Folding Hands",
    "😕": "Confused Face",
    "👏": "Clapping Hands",
    "🤗": "Hugging Face"
  };

  var emojis = Object.keys(emojDict);

  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojDict[userInput];

    if (meaning === undefined) {
      setMeaning("We don't have this in our database.");
    } else {
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojDict[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Emoji <span style={{ color: "blue" }}>Interpreter</span>
      </h1>
      <input onChange={inputChangeHandler}></input>
      <h2>{meaning}</h2>
      {console.log(emojis)}
      <ul>
        {emojis.map((emoji, index) => {
          return (
            <li
              key={emoji}
              id="emoji"
              style={{ fontSize: "2rem" }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
// viser: view >- interact >- state in eventHandler >- render