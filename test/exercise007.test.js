
const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");




describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(423)).toBe(9);
  });
});



describe("createRange", () => {
  test("creates a range of numbers as an array.", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });

  test("Step is an optional parameter. If it is not provided, assume the step is 1.", () => {
    expect(createRange(4,10)).toEqual([4, 5, 6, 7, 8, 9, 10]);
  });
});




describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
      ]
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
      ]
    }
  ];
  test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
  });
});



describe("hexToRGB", () => {
  test("Convert hexadecimal to RGB.", () => {
    expect(hexToRGB("#FF1133")).toBe("RGB(255,17,51)");
  });
});


describe("findWinner", () => {
  test("find the winner.", () => {
    expect(findWinner([["X", "0", null], ["X", null, "0"], ["X", null, "0"]])).toBe("X");
    expect(findWinner([[ null,"X", "0"], ["X", null, "0"], ["X", null, "0"]])).toBe("0");
  });
});
