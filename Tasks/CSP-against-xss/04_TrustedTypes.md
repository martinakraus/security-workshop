# CSP Level 2: Nonces

## Preperation

1. Open the application `csp-against-xss`
2. Run `npm i`
3. Page/ Template to this task: `trusted-names.ejs`
4. Start the Server with `npm start`

## Task A: Create you own Custom Policy

`This will just work inside the Google Chrome Browser or Edge since Firefox isn't supporting Trusted Types yet.`

[Source](https://caniuse.com/?search=trusted%20types)

- The CSP is configured for Trusted Types, by visiting the path `/trusted-types` you should see some errors in the Browser Consoles
- We need to write our own custom Policy for creating a Trusted Type:

```typescript
trustedTypes.createPolicy('myEscapePolicy', {
            createHTML: text => {
              // write own policy
               }
         });
```
- Use your custom Policy for escaping the dangerous string `<img src=x onerror=alert(1)>` before assining to innerHTML:

```typescript
const escaped = escapeHTMLPolicy.createHTML('<img src=x onerror=alert(1)>')
```


## Task B: Use Purifier 

- Use the already included DomPurify instead escaping the string on your own:
```typescript
const escapeHTMLPolicy =  trustedTypes.createPolicy('DOMPurify', {
            createHTML: string => DOMPurify.sanitize(string, {RETURN_TRUSTED_TYPE: true})
        });
```

## Hints


```typescript
if (window.trustedTypes && trustedTypes.createPolicy) { // Feature testing
  const escapeHTMLPolicy = trustedTypes.createPolicy('myEscapePolicy', {
    createHTML: text => text.replace(/\</g, '&lt;')
  });

  const escaped = escapeHTMLPolicy.createHTML('<img src=x onerror=alert(1)>')

  document.getElementById('martina').innerHTML = escaped;
}
```

[Official Documentation](https://content-security-policy.com/nonce/)
