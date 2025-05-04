import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const options = ["rock", "paper", "scissors"];

  const imgurls = {
    rock: "https://tse3.mm.bing.net/th?id=OIP.Sa3fML62G8HLeW-U2I_4ogHaEo&pid=Api&P=0&h=180",
    paper:
      "https://tse1.mm.bing.net/th?id=OIP.iTwcNNAT8EJeUtcqf07WMwHaE9&pid=Api&P=0&h=180",
    scissors:
      "https://tse3.mm.bing.net/th?id=OIP.NxWZ8pOSUQLm1nO1yQfvLAHaEv&pid=Api&P=0&h=180",
  };

  const handleOption = (item) => {
    const compChoice = getComputerChoice();
    setPlayerChoice(item);
    setComputerChoice(compChoice);

    if (item === compChoice) {
      draw();
    } else if (
      (item === "rock" && compChoice === "scissors") ||
      (item === "scissors" && compChoice === "paper") ||
      (item === "paper" && compChoice === "rock")
    ) {
      win();
    } else {
      lose();
    }
  };

  const win = () => {
    const status = document.getElementById("status1");
    status.innerText = "You Win!";
    status.style.backgroundColor = "green";
    setPlayerScore((prev) => prev + 1);
  };

  const lose = () => {
    const status = document.getElementById("status1");
    status.innerText = "Computer Wins!";
    status.style.backgroundColor = "red";
    setComputerScore((prev) => prev + 1);
  };

  const draw = () => {
    const status = document.getElementById("status1");
    status.innerText = "Game Draw!";
    status.style.backgroundColor = "orange";
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setPlayerScore(0);
    setComputerScore(0);
    document.getElementById("status1").innerText = "";
    document.getElementById("status1").style.backgroundColor = "transparent";
  };

  const getComputerChoice = () => {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  };

  return (
    <div>
      <h1 className="title">Rock Paper Scissors</h1>

      <div className="rockpaperscissors">
        {options.map((item, index) => (
          <img
            key={index}
            src={imgurls[item]}
            className="choice"
            alt={item}
            onClick={() => handleOption(item)}
          />
        ))}
      </div>

      <div id="status1"></div>

      <div className="versus-container">
        <div className="player-box">
          <p>You Chose:</p>
          {playerChoice && (
            <img
              src={imgurls[playerChoice]}
              alt="your choice"
              className="result-img enlarged"
            />
          )}
        </div>

        <div className="vs-text">VS</div>

        <div className="computer-box">
          <p>Computer Chose:</p>
          {computerChoice && (
            <img
              src={imgurls[computerChoice]}
              alt="computer choice"
              className="result-img enlarged"
            />
          )}
        </div>
      </div>

      <div className="result">
        <p>Your Score: {playerScore}</p>
        <p>Computer Score: {computerScore}</p>
      </div>

      <button id="resetBtn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
