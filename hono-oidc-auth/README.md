# hono-oidc-auth-demo-for-cloudflare-workers

A demo of Hono's oidc-auth middleware on Cloudflare Workers

_This repository is a modified version of the following one to be able to run with CloudFlare workers._

[hnw/hono-oidc-auth-demo-for-cloudflare-pages](https://github.com/hnw/hono-oidc-auth-demo-for-cloudflare-pages)

For technical specifications and an explanation of the sequence, please refer to the following resources.

- [@hono/oidc-auth - npm](https://www.npmjs.com/package/@hono/oidc-auth)
- [(JP) Hono 上にストレージレスなログインセッション管理を実装してみた - hnw の日記](https://hnw.hatenablog.com/entry/2024/02/26/032539)

```txt
npm install
npm run cf-typegen
npm run dev
```

```txt
npm run deploy
```

# Disclaimers

The author never claim copyright to the code below this folder.
In no event shall the authors or copyright holders be liable for any claim.

# Difference from the original

- Added and modified configurations for CF workers
  - Added `wrangler.jsonc`
  - Changed `scripts`
  - Removed packages
    - @cloudflare/workers-types
    - vite
      - @hono/vite-cloudflare-pages
      - @hono/vite-dev-server
- wrangler v3 to v4
- Fixed type checking violations
  - Added OidcAuthClaims
  - Enabled null check for the return value of getAuth
