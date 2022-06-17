const isPalindrome = require('../ejercicios/ejercicio2.js');
const multiplicationTable = require('../ejercicios/ejercicio1.js');
const coincidences = require('../ejercicios/ejercicio3.js');
const invertStr = require('../ejercicios/ejercicio4.js');

//Is palindome
describe('isPalindrome', () => {
    it('should return true if the string is a palindrome', () => {
        expect(isPalindrome('ana')).toBe("Es palindromo");
    });
    it('should return false if the string is not a palindrome', () => {
        expect(isPalindrome('leo')).toBe("No es palindromo");
    });
});

//Multiplication table 
describe('multiplicationTable', () => {
    it('should return a multiplication table', () => {
        expect(multiplicationTable(5)).toBe(`# Tabla del 5 #
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
`);
    });
});

//Coincidences
describe('coincidences', () => {
    it('should return the number of coincidences', () => {
        expect(coincidences('la casa de la pared es muy grande', 'casa')).toBe(1);
    });
});

//invertStr
describe('invertStr', () => {
    it('should return the inverted string', () => {
        expect(invertStr('mailen')).toBe('neliam');
    });
});