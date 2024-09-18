"use client";

import React, { useState } from "react";
import "./App.css";

const initialDominoes = [
  [1, 2],
  [1, 1],
  [4, 1],
  [3, 3],
  [6, 1],
  [5, 1],
  [3, 2],
  [2, 3],
  [3, 1],
  [5, 1],
];

function App() {
  const [dominoes, setDominoes] = useState([...initialDominoes]);

  const countDoubles = () => {
    return dominoes.filter((domino) => domino[0] === domino[1]).length;
  };
  const sortAsc = () => {
    const sorted = [...dominoes].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];
      if (totalA === totalB) {
        return a[0] - b[0];
      }
      return totalA - totalB;
    });
    setDominoes(sorted);
  };

  const sortDesc = () => {
    const sorted = [...dominoes].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];
      if (totalA === totalB) {
        return b[0] - a[0];
      }
      return totalB - totalA;
    });
    setDominoes(sorted);
  };

  const removeDuplicates = () => {
    const unique = dominoes.filter((domino, index, self) => index === self.findIndex((d) => (d[0] === domino[0] && d[1] === domino[1]) || (d[0] === domino[1] && d[1] === domino[0])));
    setDominoes(unique);
  };

  const flipDominoes = () => {
    const flipped = dominoes.map((domino) => [domino[1], domino[0]]);
    setDominoes(flipped);
  };

  const removeByTotal = (total: number) => {
    const filtered = dominoes.filter((domino) => domino[0] + domino[1] !== total);
    setDominoes(filtered);
  };

  const resetDominoes = () => {
    setDominoes([...initialDominoes]);
  };

  return (
    <div className="App">
      <h1>Domino Cards</h1>

      <div>
        <button onClick={sortAsc}>Sort Ascending</button>
        <button onClick={sortDesc}>Sort Descending</button>
        <button onClick={removeDuplicates}>Remove Duplicates</button>
        <button onClick={flipDominoes}>Flip Cards</button>
        <button onClick={() => removeByTotal(4)}>Remove Total = 4</button>
        <button onClick={resetDominoes}>Reset</button>
      </div>

      <h3>Domino Cards:</h3>
      <ul>
        {dominoes.map((domino, index) => (
          <li key={index}>
            [{domino[0]}, {domino[1]}]
          </li>
        ))}
      </ul>

      <h3>Doubles Count: {countDoubles()}</h3>
    </div>
  );
}

export default App;
