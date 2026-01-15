/**
 * Example test file demonstrating best practices
 */

// Function to test
function calculateDiscount(price, discountPercent) {
  if (price < 0) throw new Error('Price cannot be negative');
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  return price * (1 - discountPercent / 100);
}

describe('calculateDiscount', () => {
  // Happy path tests
  describe('when given valid inputs', () => {
    test('should apply 10% discount correctly', () => {
      // Arrange
      const price = 100;
      const discount = 10;

      // Act
      const result = calculateDiscount(price, discount);

      // Assert
      expect(result).toBe(90);
    });

    test('should return original price when discount is 0', () => {
      expect(calculateDiscount(50, 0)).toBe(50);
    });

    test('should return 0 when discount is 100%', () => {
      expect(calculateDiscount(100, 100)).toBe(0);
    });
  });

  // Edge cases
  describe('edge cases', () => {
    test('should handle price of 0', () => {
      expect(calculateDiscount(0, 50)).toBe(0);
    });

    test('should handle decimal prices', () => {
      expect(calculateDiscount(99.99, 10)).toBeCloseTo(89.991, 2);
    });
  });

  // Error cases
  describe('error handling', () => {
    test('should throw error for negative price', () => {
      expect(() => calculateDiscount(-10, 10)).toThrow('Price cannot be negative');
    });

    test('should throw error for discount over 100', () => {
      expect(() => calculateDiscount(100, 150)).toThrow('Discount must be between 0 and 100');
    });

    test('should throw error for negative discount', () => {
      expect(() => calculateDiscount(100, -10)).toThrow('Discount must be between 0 and 100');
    });
  });
});
