function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.slice(0, 1).toUpperCase() + word.substr(1);

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.slice(0, 1) + "." + lastName.slice(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let newValue= ((originalPrice * vatRate) / 100) + originalPrice;
  return Number(newValue.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let salePrice= originalPrice - ((originalPrice * reduction) / 100);
  return Number(salePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middleChar;
  if (str.length % 2 === 0) {
    middleChar = str.substr(((str.length / 2) - 1), 2)
  } else {
    middleChar = str.substr((str.length / 2), 1);
  }
  return middleChar;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let newStr = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newStr += word[i];
  }
  return newStr;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  for (let x in words) {
    words[x] = reverseWord(words[x]);
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxUsers = 0;
  for (let x in users) {
    if (users[x].type.toLowerCase() === "linux") linuxUsers++;
  }
  return linuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sunNumbers = 0;
  for (let x in scores) {
    sunNumbers = sunNumbers + scores[x];
  }
  let menaScore= sunNumbers / scores.length;
  return Number(menaScore.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let strOutput = "";
  //for (let i = 0; i <= n; i++) {
    if (n % 3 === 0) strOutput += "fizz";
    if (n % 5 === 0) strOutput += "buzz";
    if (strOutput === "") strOutput = n;
  //}
  return strOutput;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
