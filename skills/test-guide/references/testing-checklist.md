# Testing Checklist

## Before Committing Code

### Unit Tests
- [ ] All new functions have corresponding tests
- [ ] Edge cases are covered (null, empty, boundary values)
- [ ] Error scenarios are tested
- [ ] All tests pass locally

### Test Quality
- [ ] Tests are independent (no shared state)
- [ ] Test names clearly describe what is being tested
- [ ] No hardcoded timeouts or delays
- [ ] Mocks are properly cleaned up

### Coverage
- [ ] Critical paths have test coverage
- [ ] Both success and failure paths tested
- [ ] Input validation tested

## Code Review Checklist

- [ ] Tests actually test the functionality (not just coverage)
- [ ] No flaky tests introduced
- [ ] Test setup is minimal and clear
- [ ] Assertions are meaningful and specific
