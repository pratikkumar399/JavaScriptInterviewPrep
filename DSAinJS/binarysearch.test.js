const binarySearch = require("./binarysearch")

describe('binarySearch', () => {
    test('should return true when the target is in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(true);
    });

    test('should return false when the target is not in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(false);
    });

    test('should return true for the first element in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(true);
    });

    test('should return true for the last element in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(true);
    });

    test('should return false for an empty array', () => {
        expect(binarySearch([], 1)).toBe(false);
    });

    test('should return true for a single-element array if the target matches', () => {
        expect(binarySearch([3], 3)).toBe(true);
    });

    test('should return false for a single-element array if the target does not match', () => {
        expect(binarySearch([3], 1)).toBe(false);
    });
});