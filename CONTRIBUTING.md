# Contributing Guide

Guidelines for contributing to this project.

## Types

Use the following types in your branch names and commit messages:

- `feat` - A new feature.
- `fix` - A bug fix.
- `chore` - Routine tasks or maintenance.
- `docs` - Documentation updates.
- `test` - Adding or updating tests.
- `refactor` - Code refactoring (no behavior changes).

## Branch Naming

All branches should follow this naming convention:

```text
<type>/<short-description>
```

Examples:

```text
feat/login-form-validation
fix/navbar-overlap-on-mobile
docs/update-readme
refactor/user-service
```

## Commit Message Format

Each commit message should clearly describe what was changed:

```text
<type>: <short summary>
```

Examples:

```text
feat: add login API integration
fix: resolve modal flicker on open
docs: add branch naming rules
refactor: simplify reducer logic
```

## Pull Requests

- Ensure your branch is up to date with `main` before opening a PR.
- Use a descriptive PR title (similar to commit style).
- Keep PRs focused - one logical change per PR is best.
- Include screenshots when relevant.

## Code Review

- Be kind and constructive - feedback is about improving code, not judging people.
- Explain why a change is suggested, not just what.
- Don’t hesitate to ask for clarification or propose improvements.
