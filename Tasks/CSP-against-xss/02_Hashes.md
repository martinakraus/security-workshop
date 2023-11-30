# CSP Level 2: Hashes

## Preperation

1. Open the application `csp-against-xss`
2. Run `npm i`
3. Page/ Template to this task: `list-names-with-count.ejs`
4. Start the Server with `npm start`

## Task: Use CSP to secure your app against inline scripting

- Update the CSP in order to block the inline scripting - use the `expressCspHeader`-middleware.
- Update the CSP in order to allow this inline scripting securely (consider CSP3 SHA-256 hash syntax)
- Hints : To generate the hash of the script content, use this  [online tool](https://report-uri.com/home/hash): (beware of spaces and carriage returns...)


## Hints


```typescript
const { expressCspHeader } = require('express-csp-header');

const csp_hashes = {
    directives: {
        'script-src': ["'self'", "'sha256-hR9T49uyHNM6Gl14iFigC1D52XD5NRR9kaaBx4gYLrc='"]
    }
}

```


[Official Documentation](https://content-security-policy.com/hash/)
