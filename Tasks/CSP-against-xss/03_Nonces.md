# CSP Level 2: Nonces

## Preperation

1. Open the application `csp-against-xss`
2. Run `npm i`
3. Page/ Template to this task: `list-names-with-count-nonces.ejs`

## Task: Use CSP to secure your app against inline scripting

- Update the CSP in order to block the inline scripting - use the `expressCspHeader`-middleware.
- Update the CSP in order to allow this inline scripting securely (import the `NONCE` module from `express-csp-header`) and include it inside your CSP-Policy
- Extend the Response Data with a `nonce`-Attribute and include the imported `NONCE` Value

## Hints


```typescript
const { expressCspHeader } = require('express-csp-header');

app.get("/nonces", expressCspHeader(csp_nonces), (req, res) => {
    // Render the EJS page with the data
    // The middleware exposes the calculated nonce on req.nonce
    res.render(`${PAGES}/list-names-with-count-nonces`, { data: data, nonce: req.nonce });
});

```

[Official Documentation](https://content-security-policy.com/nonce/)
