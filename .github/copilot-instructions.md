# GitHub Copilot Instructions

## General Coding Standards

- Write clear, descriptive commit messages following conventional commit format
- Add comprehensive comments for complex logic
- Follow consistent code formatting and style
- Ensure all code is properly tested before committing

## Code Quality

- Write clean, maintainable code
- Use meaningful variable and function names
- Keep functions small and focused on a single responsibility
- Avoid code duplication - extract reusable components

## Documentation

- Maintain up-to-date README files
- Document all public APIs and functions
- Include usage examples where appropriate
- Keep documentation in sync with code changes

## Testing

- Write unit tests for new features
- Ensure tests are comprehensive and cover edge cases
- Maintain high test coverage
- Run all tests before submitting pull requests

## Code Review

- Review code for security vulnerabilities
- Check for performance issues
- Ensure code follows project conventions
- Verify all tests pass before merging

## Git Workflow

- Create descriptive branch names
- Keep commits atomic and focused
- Write detailed pull request descriptions
- Reference related issues in commits and PRs

## Security

- Never commit sensitive data or credentials
- Sanitize user inputs
- Follow security best practices
- Use secure dependencies and keep them updated

## Examples

### Good Commit Message
```
feat: add user authentication system

Implement JWT-based authentication with email/password login.
Includes token refresh mechanism and secure password hashing.
```

### Good Function Name
```javascript
// Good: descriptive and clear
function calculateTotalPrice(items, taxRate) { }

// Avoid: unclear abbreviations
function calcTP(i, t) { }
```

### Good Code Structure
```javascript
// Good: single responsibility, well-named
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendWelcomeEmail(userEmail) {
  if (!validateEmail(userEmail)) {
    throw new Error('Invalid email address');
  }
  // Send email logic
}
```
