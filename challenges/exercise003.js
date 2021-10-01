function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length != 0) {
    for (let i in nums) {
      nums[i] = Math.pow(nums[i], 2);
    }
  }
  return nums;
}
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let word = "";
  for (let i in words) {
    if (i == 0) {
      word += words[i].trim().substr(0, 1).toLowerCase() + words[i].slice(1);
    } else {
      word += words[i].trim().substr(0, 1).toUpperCase() + words[i].slice(1);
    }
  }
  return word;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totSub = 0;
  for (let i in people) {
    totSub += people[i].subjects.length;
  }
  return totSub;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let hasIngredient = false;
  let i = 0;
  while (menu[i] && hasIngredient == false) {
    hasIngredient = menu[i].ingredients.includes(ingredient);
    i++;
  }
  return hasIngredient;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let nArr = arr1.filter(arr1Item => arr2.includes(arr1Item));
  let duplicateNumbers = nArr.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
});
return duplicateNumbers.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
