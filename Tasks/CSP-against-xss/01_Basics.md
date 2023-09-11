# CSP Level 2: Hashes

## Preperation

1. Open the application `csp-against-xss`
2. Run `npm i`
3. Page/ Template to this task: `list-names.ejs`

## Task: Use CSP to secure your app against inline scripting

- Update the CSP in order to block the inline scripting - use the `expressCspHeader`-middleware.
- Update the CSP in order to allow loading scripts from the same origin


## Hints


```typescript
const { expressCspHeader } = require('express-csp-header');

const csp_hashes = {
    directives: {
        'script-src': ["'self'"]
    }
}

```


[Official Documentation](https://content-security-policy.com/)
