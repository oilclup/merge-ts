# ts-merge

Merge 3 sorted arrays into a single ascending array without using `sort()`.

## Requirements

- Node.js **v20 or higher** → https://nodejs.org

Check your version:
```bash
node --version  # must be v20.x.x or higher
```

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

## Test

```bash
npm test
```

## Example

```typescript
merge([5, 3, 1], [2, 4, 6], [1, 3, 7])
// → [1, 1, 2, 3, 3, 4, 5, 6, 7]
```