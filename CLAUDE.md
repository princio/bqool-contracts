# CLAUDE.md

## API Type Conventions

All request and response types must be **explicitly defined** using TypeScript namespaces to group `Request` and `Response` types (e.g., `Foo.Request`, `Foo.Response`). Do not use inline or anonymous types for API request/response payloads.

## Directory Traversal Restrictions

When exploring files and directories outside of this project, traversal is **only permitted** for the `bqool-runner-types` repository (located at `../bqool-runner-types` relative to this directory).

Do **not** read, explore, or traverse any other sibling directories, parent directories, or unrelated repositories without explicit user instruction.
