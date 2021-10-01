function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city.toLowerCase().trim() === "manchester";
}
  function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    let maxPeople = 40;
    let nBus = Math.ceil(people / maxPeople);
    return nBus;
  }

  function countSheep(arr) {
    if (arr === undefined) throw new Error("arr is required");
    let sheep = 0;
    for (let x in arr) {
      if (arr[x].trim().toLowerCase() === "sheep") sheep++
    }
    return sheep;
  }

  function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    return person.address.postCode.trim().charAt(0).toLowerCase() === "m" && person.address.city.trim().toLowerCase() === "manchester";
  }

  module.exports = {
    getFillings,
    isFromManchester,
    countSheep,
    getBusNumbers,
    hasMPostCode
  };