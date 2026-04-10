# CLAUDE.md

## API Type Conventions

All request and response types must be **explicitly defined** using TypeScript namespaces to group `Request` and `Response` types (e.g., `Foo.Request`, `Foo.Response`). Do not use inline or anonymous types for API request/response payloads.

## Editing types

This package is a contract, not an implementation. Do not edit a type here just because a backend or frontend consumer disagrees with it — the consumer is wrong.

The only reasons to edit a type here:
1. The upstream `bqool` domain type changed and this file needs to re-align.
2. The API shape itself is being redesigned (and the user is explicitly asking for that).

If a backend service returns something that doesn't match a type in this package, fix the service.

## Endpoint comment convention

Every `export namespace` has comment headers describing its route:

```typescript
/** Description */
/** METHOD /path */
export namespace ExampleEndpoint { ... }
```

Type compatibility is enforced by TypeScript compilation.
Frontend coverage is checked by `bqool-frontend-v2/scripts/check-contracts.ts`.
