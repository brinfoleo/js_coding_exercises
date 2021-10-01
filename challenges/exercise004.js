function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(element => element < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => 
    name.trim().toLowerCase().charAt(0) === char.toLowerCase()
  );
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.substr(0, 3).toLowerCase() === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(num => Number(Math.sqrt(num).toFixed(2)));
}
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(sentence => sentence.toLowerCase().indexOf(str.toLowerCase()) > -1);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(t => Math.max.apply(null, t));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
