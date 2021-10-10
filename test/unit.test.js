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
const rookKingSuccess = (correct) => {};

const rookKingFailure = (incorrect) => {};

//Checks bishop placements
const bishopSuccess = () => {};

const bishopFailure = () => {};

//checks rest of pieces placements
const queenKnightSuccess = () => {};

const queenKnightFailure = () => {};

//checks all ranks are correct
const allPiecesSuccess = () => {};

const allPiecesFailure = () => {};

//Output of Unit Tests Results in console
const allUnitTestResults = (correct) => {
  console.log("--ALL UNIT TESTS--");
  console.log("Correct Length Test: ", correctAmount(correct));
  console.log("Incorrect Length Test: ", incorrectAmount(incorrectRanks));
  console.log("");
};
