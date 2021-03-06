// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex! when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat " when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when called', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return the string "Hello, World! when passed true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed an empty string', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed 2.3', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed "5"', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed an empty array', function () {
        expect(sayHello([])).toBe("Hello, World!");
    });

});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function () {
        expect(isFive("5")).toBe(false);
    });

});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when with a boolean value', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
})

describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean value when executed', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed with "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed with a number', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed with a boolean value', function () {
        expect(isVowel(false)).toBe(false);
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed with a string that is not a number', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when undefined', function () {
        expect(isVowel()).toBe(false);
    });
    it('should return true when passed with a lowercase vowel', function () {
        expect(isVowel("i")).toBe(true);
    });
    it('should return true when passed with a lowercase vowel', function () {
        expect(isVowel("O")).toBe(true);
    });
    it('should return true is a vowel in a string with spaces', function () {
        expect(isVowel("  A    ")).toBe(true);
        expect(isVowel("y    ")).toBe(false);
    });
});

describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
    it('should add two numbers together', function () {
        expect(add(2, 3)).toBe(5);
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return a number when a numeric string is used', function () {
        expect(add("5", 6)).toBe(11);
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when passed a string with no numeric value', function () {
        expect(add("banana", "split")).toBeNaN();
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when undefined', function () {
        expect(add()).toBeNaN();
    });
});