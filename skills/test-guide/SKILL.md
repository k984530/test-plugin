---
name: Test Guide
description: This skill should be used when the user asks to "write tests", "create unit tests", "add test cases", "test this function", "how to test", or mentions "단위 테스트", "테스트 작성", "테스트 코드". Provides guidance for writing effective tests in JavaScript/TypeScript projects.
version: 0.1.0
---

# Test Writing Guide

This skill provides guidance for writing effective unit tests and test cases.

## Overview

Effective tests validate code behavior, prevent regressions, and document expected functionality. Follow these principles to write maintainable, reliable tests.

## Test Structure

### AAA Pattern

Structure tests using Arrange-Act-Assert:

```javascript
test('should calculate total correctly', () => {
  // Arrange - Set up test data
  const items = [{ price: 10 }, { price: 20 }];

  // Act - Execute the function
  const result = calculateTotal(items);

  // Assert - Verify the result
  expect(result).toBe(30);
});
```

### Naming Conventions

Use descriptive test names that explain the expected behavior:

- `should return empty array when input is null`
- `should throw error for invalid email format`
- `should update user profile successfully`

## Common Testing Patterns

### Testing Pure Functions

```javascript
describe('add', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });
});
```

### Testing Async Functions

```javascript
test('should fetch user data', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBeDefined();
});
```

### Testing Error Cases

```javascript
test('should throw on invalid input', () => {
  expect(() => validateEmail('invalid')).toThrow('Invalid email');
});
```

## Best Practices

1. **Test one thing per test** - Each test should verify a single behavior
2. **Use meaningful assertions** - Assert on specific values, not just truthiness
3. **Avoid test interdependence** - Tests should run independently
4. **Keep tests fast** - Mock external dependencies
5. **Test edge cases** - Empty inputs, null values, boundary conditions

## Running Tests

For JavaScript/TypeScript projects:

```bash
# Jest
npm test

# Vitest
npx vitest

# Run specific test file
npm test -- path/to/test.spec.js
```

## Additional Resources

### Reference Files

For detailed patterns and framework-specific guides:
- **`references/jest-patterns.md`** - Jest-specific patterns and matchers
- **`references/testing-checklist.md`** - Pre-commit testing checklist

### Example Files

Working examples in `examples/`:
- **`example.test.js`** - Complete test file example
