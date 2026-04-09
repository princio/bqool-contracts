# CLAUDE.md

## API Type Conventions

All request and response types must be **explicitly defined** using TypeScript namespaces to group `Request` and `Response` types (e.g., `Foo.Request`, `Foo.Response`). Do not use inline or anonymous types for API request/response payloads.

## Editing types

This package is a contract, not an implementation. Do not edit a type here just because a backend or frontend consumer disagrees with it — the consumer is wrong.

The only reasons to edit a type here:
1. The upstream `bqool` domain type changed and this file needs to re-align.
2. The API shape itself is being redesigned (and the user is explicitly asking for that).

If a backend service returns something that doesn't match a type in this package, fix the service.

## Endpoint versioning and implementation status

Every `export namespace` has comment tags tracking its lifecycle:

```typescript
/** Description */
/** METHOD /path */
/** @since 0.2.0 */
/** @backend not-implemented */
/** @frontend not-implemented */
export namespace ExampleEndpoint { ... }
```

- `@since <version>` — the backend-types version that introduced this endpoint
- `@backend implemented | not-implemented` — whether the backend has a working controller route
- `@frontend implemented | not-implemented` — whether the frontend has a working API call
- `@deprecated <version>` — marks an obsolete endpoint (add when retiring)

To discover gaps:
```bash
grep "@backend not-implemented" src/*.ts
grep "@frontend not-implemented" src/*.ts
grep "@deprecated" src/*.ts
```

When implementing an endpoint, change its tag from `not-implemented` to `implemented`.
