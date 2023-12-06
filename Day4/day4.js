let example = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

let individualRowArray = example.split("\n");
let numbersToCheck = [];
let winningNumberToCheck = [];
let score = 0;
let result = 0;
let totalScratchcards = 0;
let totalMatches = [];
let totalScratcardArrayPositions = [];
individualRowArray.map((i, rowCounter) => {
  let totalMatchingNumbers = [];
  let row = i.split(":");
  let numbers = row[1].trim().split("|");
  let inputNumbers = numbers[0].split(" ");
  let winningNumbers = numbers[1].split(" ");
  numbersToCheck = [];
  winningNumberToCheck = [];
  inputNumbers.map((singleDigit) => {
    if (singleDigit === "") {
    } else {
      numbersToCheck.push(singleDigit);
    }
  });

  winningNumbers.map((singleDigit) => {
    if (singleDigit === "") {
    } else {
      winningNumberToCheck.push(singleDigit);
    }
  });
  let individualScore = 0;

  numbersToCheck.map((i, winningNumberIndex) => {
    winningNumberToCheck.map((j) => {
      if (i === j) {
        totalMatchingNumbers.push({
          number: i,
          position: winningNumberIndex,
        });
      }
    });
  });
  totalMatchingNumbers.map((i) => {
    totalScratcardArrayPositions.push(rowCounter + i.position + 1);
  });
  console.log("totalMatchingNumbers", totalMatchingNumbers);
  console.log("totalScratcardArrayPositions", totalScratcardArrayPositions);
  if (totalMatchingNumbers.length >= 1) {
    individualScore += 1;
  }
  for (let i = 0; i < totalMatchingNumbers.length - 1; i++) {
    individualScore = individualScore * 2;
  }
  totalMatchingNumbers.map((match) => {
    totalMatches.push(match);
  });
  // console.log("[totalMatchingNumbers]", totalMatchingNumbers);
  numbersToCheck.map((numToCheck) => {
    totalMatches.map((numMatch) => {
      if (numToCheck === numMatch) {
        //console.log("----------");
        //console.log("[match found]", numToCheck);
        totalScratchcards += totalScratchcards;
      }
    });
  });
  //console.log("[score]", score);
  score = score + individualScore;
});
// console.log("[totalScratchcards]", totalScratchcards);
//console.log("[totalMatches]", totalMatches);
