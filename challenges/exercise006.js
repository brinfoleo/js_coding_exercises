/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let isMultiples = 0;
  arr.forEach(num => {
    let xNumb = 0;
    xNumb = num % 3 == 0 ? num : xNumb;
    xNumb = num % 5 == 0 ? num : xNumb;
    isMultiples += xNumb;
  });
  return isMultiples;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  
  let dna = ['C', 'G', 'T', 'A'];
  dna.sort();

  let nDna = str.toUpperCase().split('').sort();

  let isValid = nDna.every((val, index) => val === dna[index]);
  return isValid;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  
  let nDna = str.toUpperCase().split('');
  let strNewDNA = '';

  nDna.forEach(element => {
    if (element === 'T') strNewDNA += 'A';
    if (element === 'C') strNewDNA += 'G';
    if (element === 'A') strNewDNA += 'T';
    if (element === 'G') strNewDNA += 'C';
  });
  return strNewDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  let isPrime = false;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      isPrime = true;
      break;
    }
  }
  return isPrime;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let newArray = [];
  for (let row = 0; row <= n - 1; row++) {
    newArray[row] = [];
    for (let col = 0; col <= n - 1; col++) {
      newArray[row][col] = fill;
    }
  }
  return newArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let dayStaff = 0;
  Object.keys(staff).forEach(pessoa => {
    for (let i = 0; i < staff[pessoa].rota.length; i++) {
      if (staff[pessoa].rota[i] === day) dayStaff++;
    }
  });
  return dayStaff >= 3 ? true : false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
