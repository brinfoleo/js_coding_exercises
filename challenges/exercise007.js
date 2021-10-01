/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  let sumDig = 0;
  let nArray = n.toString().split('');
  for (let i = 0; i < nArray.length; i++) {
    sumDig += Number(nArray[i]);
  }
  return sumDig;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step=1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  let arrRange = [];
  for (let i = start; i <= end; i += step) {
    arrRange.push(i);
  }
  return arrRange;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let arrUsers = [];
  users.forEach(user => {
    //get user 
    let totalTime = 0;
    let userName = user.username;
    let screenTime = user.screenTime;
    //Get date
    screenTime.forEach(sc => {
      let dt = sc.date;
      let usage = sc.usage;
      //get app and minutes
      for (let app in usage) {
        //let nameApp = app;
        let timeApp = usage[app];
        if (dt === date) totalTime += timeApp;
      }
      if (totalTime >= 100) arrUsers.push(userName);
    })
  })
  return arrUsers;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  let rgb = hexStr.replace('#', '').match(/.{1,2}/g);
  let aRgb = [
    parseInt(rgb[0], 16),
    parseInt(rgb[1], 16),
    parseInt(rgb[2], 16)
  ];
  return "RGB(" + aRgb[0] + "," + aRgb[1] + "," + aRgb[2] + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  //change: X=1, 0=-1 and null=0
  //Sum rows and columns and diagonals
  //a=[c1,c2,c3,r1,r2,r3,d1,d2]
  let arrSumResult = [0, 0, 0, 0, 0, 0, 0, 0];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      switch (board[row][col]) {
        case 'X':
          board[row][col] = 1;
          break;
        case '0':
          board[row][col] = -1;
          break;
        default:
          board[row][col] = 0;
      }
      arrSumResult[row + 3] += board[row][col];
      arrSumResult[col] += board[row][col];
    }
  }
  arrSumResult[6] = board[0][0] + board[1][1] + board[2][2];
  arrSumResult[7] = board[0][2] + board[1][1] + board[2][0];
  let winner = null;
  if (arrSumResult.indexOf(3) != -1) winner = 'X';
  if (arrSumResult.indexOf(-3) != -1) winner = '0';

  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
