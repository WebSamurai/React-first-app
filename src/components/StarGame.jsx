// STAR MATCH - Starting Template
import React, { useState } from "react";
const PlayNumber = (props) => {
  const hanleclick = () => {
    console.log(props.number);
  };
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => hanleclick()}
    >
      {props.number}
    </button>
  );
};
const DisplayStars = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((star) => (
        <div key={star} className="star" />
      ))}
    </>
  );
};
const StarMatch = () => {
  const [star, setStar] = useState(utils.random(1, 9));
  const [availableNumber, setAvailableNumber] = useState([1, 2, 3, 4, 5]);
  const [cadidateNumber, setCandidateNumber] = useState([1, 3]);
  const candidateareWrong = utils.sum(cadidateNumber) > star;
  const numberStatus = (num) => {
    if (!availableNumber.includes(num)) {
      return "used";
    }
    if (cadidateNumber.includes(num)) {
      return candidateareWrong ? "wrong" : "candidate";
    }
    return "available";
  };
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <DisplayStars count={star} />
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              status={numberStatus(number)}
              key={number}
              number={number}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

// Math science
const utils = {
  // Sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

ReactDOM.render(<StarMatch />, mountNode);
