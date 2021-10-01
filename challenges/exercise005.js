const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return nums.indexOf(n) > -1 && nums.indexOf(n) != nums.length - 1 ? nums[nums.indexOf(n) + 1] : null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let counter = [0, 0];
  for (let i = 0; i < str.length; i++) {
    counter[str.charAt(i)]++;
  }
  let objCount = {
    "0": counter[0],
    "1": counter[1]
  };
  return objCount;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split("").reverse().toString().replace(/,/g, ""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let subTot = 0;
  for (let row = 0; row < arrs.length; row++) {
    for (let col = 0; col < arrs[row].length; col++) {
      subTot += arrs[row][col];
    }
  }
  return subTot;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    let item = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = item;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let findStr = false;
  for (let [key, value] of Object.entries(haystack)) {
    if (value.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) findStr = true;
  }
  return findStr;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let arrStr = str.replace(/[^a-zA-Z ]/g, "").split(' ');
  let newArr = arrStr.filter((este, i) => arrStr.indexOf(este) === i);
  let newStr = '';
  for (let i = 0; i < newArr.length; i++) {
    let c = 0;
    for (let o = 0; o < arrStr.length; o++) {
      if (newArr[i].toLowerCase() == arrStr[o].toLowerCase()) c++;
    }
    if (newStr.length > 0) newStr += ','
    newStr += '"' + newArr[i].toLowerCase() + '":' + c;
  }
  let myObj = JSON.parse('{ ' + newStr + '}');
  return myObj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
