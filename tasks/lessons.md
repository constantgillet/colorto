# Lessons

## File structure & separation of concerns

- **Types** go in `types.ts` — pure type definitions, no runtime code.
- **Constants** go in `constants.ts` — static data and configuration values only.
- **Utility/validation functions** go in `utils.ts` — helper functions like `isValidFormat()`.
- **Domain logic** gets its own file named after its purpose (e.g. `format-color.ts`) — functions with business logic and their private helpers.
- Don't mix constants with utility functions in the same file. A validation function that operates on a constant still belongs in utils, not alongside the constant.
