# Jest Testing Patterns

## Matchers

### Common Matchers

```javascript
expect(value).toBe(expected)          // Strict equality
expect(value).toEqual(expected)       // Deep equality
expect(value).toBeTruthy()            // Truthy check
expect(value).toBeFalsy()             // Falsy check
expect(value).toBeNull()              // Null check
expect(value).toBeUndefined()         // Undefined check
expect(value).toBeDefined()           // Defined check
```

### Number Matchers

```javascript
expect(value).toBeGreaterThan(3)
expect(value).toBeGreaterThanOrEqual(3)
expect(value).toBeLessThan(5)
expect(value).toBeCloseTo(0.3, 5)     // Floating point
```

### String Matchers

```javascript
expect(value).toMatch(/pattern/)
expect(value).toContain('substring')
```

### Array Matchers

```javascript
expect(array).toContain(item)
expect(array).toHaveLength(3)
```

## Mocking

### Mock Functions

```javascript
const mockFn = jest.fn();
mockFn.mockReturnValue(42);
mockFn.mockResolvedValue({ data: 'test' });

expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith(arg1, arg2);
expect(mockFn).toHaveBeenCalledTimes(2);
```

### Mock Modules

```javascript
jest.mock('./module', () => ({
  fetchData: jest.fn().mockResolvedValue({ id: 1 })
}));
```

## Setup and Teardown

```javascript
beforeAll(() => {
  // Run once before all tests
});

beforeEach(() => {
  // Run before each test
});

afterEach(() => {
  // Run after each test
});

afterAll(() => {
  // Run once after all tests
});
```
