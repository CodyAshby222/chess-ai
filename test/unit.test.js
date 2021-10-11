const testBtnID = document.getElementById("testBtn");

let whitePieces;
let blackPieces;

const randomizeTheCorrectRanks = () => {
  let starterR = ["p", "p", "p", "p", "p", "p", "p", "p"];
  let rooksAdd = rookLogic(starterR);
  let kingAdd = kingLogic(rooksAdd);
  let bishopsAdd = bishopLogic(kingAdd);
  let allPiecesAdd = restOfPiecesLogic(bishopsAdd);
  blackPieces = allPiecesAdd.join().toString().replaceAll(",", "");
  whitePieces = blackPieces.toUpperCase();
  allUnitTestResults(blackPieces);
};

testBtnID.addEventListener("click", randomizeTheCorrectRanks);

/*
 * UNIT TESTING
 * -------------
 * Using 10 total different unit tests.
 * Each one will check and assume success and failure of piece placements.
 */

const incorrectRanks = "rrkbqbnnq";

//Checks to see if string character length is 8
const correctAmount = (correct) => {
  return correct.length === 8 ? true : false;
};

const incorrectAmount = (incorrect) => {
  return incorrect.length !== 8 ? true : false;
};

//Checks to make sure rookKing Placements
const rookKingSuccess = (correct) => {
  let arr = correct.split("");
  let tempArr = [];
  arr.forEach((value, index) => {
    if (value === "r" || value === "k") {
      tempArr.push(arr[index]);
    }
  });
  let rookKings = tempArr.join().toString().replaceAll(",", "");
  return rookKings === "rkr" ? true : false;
};

const rookKingFailure = (incorrect) => {
  let arr = incorrect.split("");
  let tempArr = [];
  arr.forEach((value, index) => {
    if (value === "r" || value === "k") {
      tempArr.push(arr[index]);
    }
  });
  let rookKings = tempArr.join().toString().replaceAll(",", "");
  return rookKings !== "rkr" ? true : false;
};

//Checks bishop placements
const bishopSuccess = (correct) => {
  let arr = correct.split("");
  let num = 0;
  arr.forEach((value, index) => {
    if (value === "b") {
      num += index;
    }
  });
  return num % 2 === 1 ? true : false;
};

const bishopFailure = (incorrect) => {
  let arr = incorrect.split("");
  let num = 0;
  arr.forEach((value, index) => {
    if (value === "b") {
      num += index;
    }
  });
  return num % 2 === 0 ? true : false;
};

//checks rest of pieces placements
const queenKnightSuccess = (correct) => {
  let arr = correct.split("");
  let tempArr = [];
  arr.forEach((value, index) => {
    if (value === "n" || value === "q") {
      tempArr.push(arr[index]);
    }
  });
  let queenKnight = tempArr.join().toString().replaceAll(",", "");
  if (queenKnight === "qnn" || queenKnight === "nqn" || queenKnight === "nnq") {
    return true;
  }
  return false;
};

const queenKnightFailure = (incorrect) => {
  let arr = incorrect.split("");
  let tempArr = [];
  arr.forEach((value, index) => {
    if (value === "n" || value === "q") {
      tempArr.push(arr[index]);
    }
  });
  let queenKnight = tempArr.join().toString().replaceAll(",", "");
  if (queenKnight === "qnn" || queenKnight === "nqn" || queenKnight === "nnq") {
    return false;
  }
  return true;
};

//checks all ranks are correct
const allPiecesSuccess = (correct) => {
  if (
    correctAmount(correct) &&
    rookKingSuccess(correct) &&
    bishopSuccess(correct) &&
    queenKnightSuccess(correct)
  ) {
    return true;
  }
  return false;
};

const allPiecesFailure = (incorrect) => {
  if (
    incorrectAmount(incorrect) ||
    rookKingFailure(incorrect) ||
    bishopFailure(incorrect) ||
    queenKnightFailure(incorrect)
  ) {
    return true;
  }
  return false;
};

//Output of Unit Tests Results in console
const allUnitTestResults = (correct) => {
  console.log("--- ALL UNIT TESTS ---");
  console.log("Correct Length Test: ", correctAmount(correct));
  console.log("Incorrect Length Test: ", incorrectAmount(incorrectRanks));
  console.log("");
  console.log("Correct Rook&King Test: ", rookKingSuccess(correct));
  console.log("Incorrect Rook&King Test: ", rookKingFailure(incorrectRanks));
  console.log("");
  console.log("Correct Bishop Test: ", bishopSuccess(correct));
  console.log("Incorrect Bishop Test: ", bishopFailure(incorrectRanks));
  console.log("");
  console.log("Correct Q&Knight Test: ", queenKnightSuccess(correct));
  console.log("Incorrect Q&Knight Test: ", queenKnightFailure(incorrectRanks));
  console.log("");
  console.log("All Correct Rank Placements: ", allPiecesSuccess(correct));
  console.log("Incorrect Rank Placements: ", allPiecesFailure(incorrectRanks));
  console.log("----------------------------");
  console.log("");
};
