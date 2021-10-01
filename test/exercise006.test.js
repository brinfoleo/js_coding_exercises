const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");


describe("sumMultiples", () => {
    test("This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5, 15,23])).toBe(23);
    });
});


describe("isValidDNA", () => {
    test("returns the next number after the given number in the array", () => {
        expect(isValidDNA('CGTA')).toBe(true);
        expect(isValidDNA('CFTA')).toBe(false);
    });
});


describe("getComplementaryDNA", () => {
    test('This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".', () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC');
        expect(getComplementaryDNA('TGAC')).toBe('ACTG');
    });
});


describe("isItPrime", () => {
    test("This function should receive a number and return true/false depending on whether it is a prime number or not.", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(97)).toBe(true);
    });
});


describe("createMatrix", () => {
    test("This function should receive a number and return an array of n arrays, each filled with n items. The parameter fill should be used as the filler of the arrays", () => {
        let matrix =[["foo", "foo", "foo"],["foo", "foo", "foo"],["foo", "foo", "foo"]];
        expect(createMatrix(3, "foo")).toEqual(matrix);
    });
});


describe("areWeCovered", () => {
    test("returns the next number after the given number in the arrayreturn true/false depending on whether there are enough staff scheduled for the given day.", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Kelly", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Ellen", rota: ["Monday", "Wednesday", "Friday"] }
        ];
        expect(areWeCovered(staff, 'Monday')).toBe(true);
        expect(areWeCovered(staff, 'Sunday')).toBe(false);
        expect(areWeCovered(staff, 'Wednesday')).toBe(false);
        expect(areWeCovered(staff, 'Friday')).toBe(true);

    });
});
