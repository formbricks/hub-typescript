# Changelog

## 0.3.2 (2026-02-20)

Full Changelog: [v0.3.1...v0.3.2](https://github.com/formbricks/hub-typescript/compare/v0.3.1...v0.3.2)

### Bug Fixes

* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([d8af0e7](https://github.com/formbricks/hub-typescript/commit/d8af0e79ab7c35e3fce6a5c5353fc8e3e081b7c6))


### Chores

* **internal/client:** fix form-urlencoded requests ([25f798e](https://github.com/formbricks/hub-typescript/commit/25f798efec8dda86d151e8a10b397ff457abf848))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([1e47337](https://github.com/formbricks/hub-typescript/commit/1e473379957d4f35fd889d94df76bc391d2f00df))
* **internal:** cache fetch instruction calls in MCP server ([0942424](https://github.com/formbricks/hub-typescript/commit/094242469fb464a154f88567fd9ced348dca7e9d))
* **internal:** remove mock server code ([cb34f47](https://github.com/formbricks/hub-typescript/commit/cb34f477a8864545dbb236ccf7323a70aa399a13))
* **mcp:** correctly update version in sync with sdk ([4d61e88](https://github.com/formbricks/hub-typescript/commit/4d61e8889edb59c2afff2cdaff368381e2011436))
* update mock server docs ([4aa2c95](https://github.com/formbricks/hub-typescript/commit/4aa2c95e1926c38a60e0727b65b2c13568770960))

## 0.3.1 (2026-02-17)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/formbricks/hub-typescript/compare/v0.3.0...v0.3.1)

### Chores

* update SDK settings ([dd56f23](https://github.com/formbricks/hub-typescript/commit/dd56f234d617b33249b1448c97e4542d29eaec43))

## 0.3.0 (2026-02-17)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/formbricks/hub-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** change hub mcp name ([4728a2b](https://github.com/formbricks/hub-typescript/commit/4728a2b478ea630ce41ec754ffabcbaa7b438307))

## 0.2.0 (2026-02-17)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/formbricks/hub-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** change name ([34e6d78](https://github.com/formbricks/hub-typescript/commit/34e6d780d318836c9f11a93545adae0de29a4556))


### Chores

* update SDK settings ([d4e6b53](https://github.com/formbricks/hub-typescript/commit/d4e6b53fefb9118a70af8987efaeb1e6438a4bf2))
* update SDK settings ([d9109da](https://github.com/formbricks/hub-typescript/commit/d9109da7c87b6970a1ca9c1c71e231ab60b44f87))

## 0.1.0 (2026-02-17)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/formbricks/hub-typescript/compare/v0.0.1...v0.1.0)

### Features

* **mcp:** add initial server instructions ([104db9a](https://github.com/formbricks/hub-typescript/commit/104db9a4ac9c1bfba701700ca6a3d08ab9798479))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([8821037](https://github.com/formbricks/hub-typescript/commit/8821037b04b1c5bb56cfb8c5a136d836cb6619bf))
* **client:** avoid removing abort listener too early ([f79ee0c](https://github.com/formbricks/hub-typescript/commit/f79ee0ceb6a9ce6f4bf8bf38bb876f9322191748))


### Chores

* **client:** do not parse responses with empty content-length ([e9b363a](https://github.com/formbricks/hub-typescript/commit/e9b363a87d32ddbd5d5e81d1433f09a8d42f7c72))
* **client:** restructure abort controller binding ([a8726ec](https://github.com/formbricks/hub-typescript/commit/a8726ec57a0af1453047facea62c18f811f6851a))
* configure new SDK language ([9827812](https://github.com/formbricks/hub-typescript/commit/9827812bbd0c52bf2c7a66a3219d97b82c21c278))
* **internal:** add health check to MCP server when running in HTTP mode ([a305c47](https://github.com/formbricks/hub-typescript/commit/a305c4778fe358764b95bb70266c3cf765124f2d))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([e4b5db4](https://github.com/formbricks/hub-typescript/commit/e4b5db4ebcb817f76ce960b85f97fff31b5dc96b))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([d2dbd77](https://github.com/formbricks/hub-typescript/commit/d2dbd7761644ee8a9ef95eb2edc2773379cee2d5))
* **internal:** avoid type checking errors with ts-reset ([30887f7](https://github.com/formbricks/hub-typescript/commit/30887f746af24581cdcbf1cd55fd24d2610fc5b2))
* **internal:** configure MCP Server hosting ([3e8aa93](https://github.com/formbricks/hub-typescript/commit/3e8aa9331cdcdaaa21e5f5fb56ebe6628e2cdb7c))
* **internal:** improve layout of generated MCP server files ([116112c](https://github.com/formbricks/hub-typescript/commit/116112c52788bf1b7b9af931e53148cab07befaf))
* **internal:** improve reliability of MCP servers when using local code mode execution ([2405f84](https://github.com/formbricks/hub-typescript/commit/2405f84873b9fb62722925c42faf83942b90cea2))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([b94ae48](https://github.com/formbricks/hub-typescript/commit/b94ae48feb2633f13f70821697e4f6d8ab4e3323))
* **internal:** support oauth authorization code flow for MCP servers ([57e5b81](https://github.com/formbricks/hub-typescript/commit/57e5b811a768b95d97b76b422bdc8ad30355b91d))
* **internal:** upgrade pnpm ([eca7a75](https://github.com/formbricks/hub-typescript/commit/eca7a75b9824baf74be68519ced176c15711cac3))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([6986e02](https://github.com/formbricks/hub-typescript/commit/6986e026509bd0a2fcdb78a397073d39ffcb2059))
* update SDK settings ([f8b4001](https://github.com/formbricks/hub-typescript/commit/f8b4001b7dbeeaf7232c4fb4a9a885762adf318b))
