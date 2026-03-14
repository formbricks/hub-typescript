# Changelog

## 0.4.2 (2026-03-14)

Full Changelog: [v0.4.1...v0.4.2](https://github.com/formbricks/hub-typescript/compare/v0.4.1...v0.4.2)

### Chores

* Google Vertex AI support ([a5ee88f](https://github.com/formbricks/hub-typescript/commit/a5ee88fa3b8ffe1a76a9362e3062b44d8116cf3a))
* **internal:** codegen related update ([4009a58](https://github.com/formbricks/hub-typescript/commit/4009a58b101741eb51ba24904d56a65b7ed5d6ee))
* **internal:** codegen related update ([ccfee0a](https://github.com/formbricks/hub-typescript/commit/ccfee0a38f14157afdb951e1cd364e36ebc98b31))
* **internal:** codegen related update ([40c92d5](https://github.com/formbricks/hub-typescript/commit/40c92d5c773251cad0191cfc9cae39bf9f693970))
* **internal:** codegen related update ([cb61137](https://github.com/formbricks/hub-typescript/commit/cb61137f4606077dd7372cc1b173235c64de667e))
* **internal:** codegen related update ([00bdd4e](https://github.com/formbricks/hub-typescript/commit/00bdd4e6551fbda5fdc7710201c7f6298dc3282f))
* **internal:** codegen related update ([81dafcc](https://github.com/formbricks/hub-typescript/commit/81dafcc0c4c44bfd11394bc71e032f9a3f525460))
* **internal:** codegen related update ([bef048c](https://github.com/formbricks/hub-typescript/commit/bef048c11d2d8004567a333b5f68168db0460f00))
* **internal:** codegen related update ([4662e2b](https://github.com/formbricks/hub-typescript/commit/4662e2bb7cfa8d00158e3d8a38b239eac1bd9f79))
* **internal:** codegen related update ([25c70d4](https://github.com/formbricks/hub-typescript/commit/25c70d401dcd5329a432fc0e3216b107bb7c7c0d))
* **internal:** codegen related update ([ccfb19c](https://github.com/formbricks/hub-typescript/commit/ccfb19c69c183a09986b5c774c6d6d9b126b0c7f))
* **internal:** codegen related update ([6118c55](https://github.com/formbricks/hub-typescript/commit/6118c55b2e0f67343d141a4e7d40aa6229a5c23a))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([a23cc61](https://github.com/formbricks/hub-typescript/commit/a23cc6127d61df85aeb869ac34ee9b2b1eaebf1a))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([ff5b514](https://github.com/formbricks/hub-typescript/commit/ff5b5148c975be199d3877d099bdd48cd80ae7f0))
* **internal:** update lock file ([9eca1d6](https://github.com/formbricks/hub-typescript/commit/9eca1d6f23f60b6f9e4cc9618d19a970a4822117))
* **internal:** update lockfile ([5a40fac](https://github.com/formbricks/hub-typescript/commit/5a40facea96bacde3d0a6fa8ee9819a0fd9af454))

## 0.4.1 (2026-03-10)

Full Changelog: [v0.4.0...v0.4.1](https://github.com/formbricks/hub-typescript/compare/v0.4.0...v0.4.1)

### Chores

* **internal:** codegen related update ([9705ee4](https://github.com/formbricks/hub-typescript/commit/9705ee4cb3af7d1a02048c5a52286e4c50a2cf6c))
* **internal:** update dependencies to address dependabot vulnerabilities ([b1ee26e](https://github.com/formbricks/hub-typescript/commit/b1ee26e9ba9beb6f0d9beb6bb570cfe91fb21287))
* update SDK settings ([7d37a29](https://github.com/formbricks/hub-typescript/commit/7d37a2983c5c469b9cd8266b2eec2273be4030b9))
* update SDK settings ([21b7534](https://github.com/formbricks/hub-typescript/commit/21b7534c3a5da4896d7f6a74ee51a1fb472918fb))

## 0.4.0 (2026-03-09)

Full Changelog: [v0.3.1...v0.4.0](https://github.com/formbricks/hub-typescript/compare/v0.3.1...v0.4.0)

### Features

* Add keyset (cursor) pagination to list endpoints ([40304bd](https://github.com/formbricks/hub-typescript/commit/40304bd39ba6258102b660b09ad8af2335ea7e12))
* **feedback-records:** add submission_id for grouped submissions and idempotent ingestion ([c2e90e1](https://github.com/formbricks/hub-typescript/commit/c2e90e19b3f001d38db709718bcc76309cb2bf4b))
* **mcp:** add an option to disable code tool ([4a27cac](https://github.com/formbricks/hub-typescript/commit/4a27cac0a64d4d5add9578e014f1057436975c7d))
* semantic search and similar feedback API ([c164990](https://github.com/formbricks/hub-typescript/commit/c1649908aa5a19d12f0727f725e1a9439606c67e))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([9a67acf](https://github.com/formbricks/hub-typescript/commit/9a67acfab9a8a6245d0550f80a3f9134580a4977))
* **docs/contributing:** correct pnpm link command ([a8221ee](https://github.com/formbricks/hub-typescript/commit/a8221eef9aed7c376a303e22dd8b3d5767f5e3ee))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([d8af0e7](https://github.com/formbricks/hub-typescript/commit/d8af0e79ab7c35e3fce6a5c5353fc8e3e081b7c6))
* **mcp:** update prompt ([252cb30](https://github.com/formbricks/hub-typescript/commit/252cb3052ddb2546567f23ed391c0b82088ed520))


### Chores

* Address Hub OpenAPI AI-review feedback ([01c581e](https://github.com/formbricks/hub-typescript/commit/01c581e1030f5b3fed8d7a6f797087b721d9802f))
* CI, config, security, and new() pattern improvements ([cdc3bfb](https://github.com/formbricks/hub-typescript/commit/cdc3bfb3c8b18897716910e75cc4f422d9b80af0))
* **ci:** skip uploading artifacts on stainless-internal branches ([5e6618d](https://github.com/formbricks/hub-typescript/commit/5e6618d7a2d3e7108824fa9b423ba51f2367f32c))
* **internal/client:** fix form-urlencoded requests ([25f798e](https://github.com/formbricks/hub-typescript/commit/25f798efec8dda86d151e8a10b397ff457abf848))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([1e47337](https://github.com/formbricks/hub-typescript/commit/1e473379957d4f35fd889d94df76bc391d2f00df))
* **internal:** cache fetch instruction calls in MCP server ([0942424](https://github.com/formbricks/hub-typescript/commit/094242469fb464a154f88567fd9ced348dca7e9d))
* **internal:** codegen related update ([460bc7c](https://github.com/formbricks/hub-typescript/commit/460bc7cebebadf9b87d2ce8d00a914892fb05019))
* **internal:** codegen related update ([0d51e30](https://github.com/formbricks/hub-typescript/commit/0d51e304e22252470dd9da4c5c40402160d077e2))
* **internal:** codegen related update ([8f72269](https://github.com/formbricks/hub-typescript/commit/8f7226933629e466550c096c9392c1403c2ca879))
* **internal:** codegen related update ([acec1f1](https://github.com/formbricks/hub-typescript/commit/acec1f1357d2486ad3c5a4131fe8e0599861a74f))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([c2d696c](https://github.com/formbricks/hub-typescript/commit/c2d696c1641f9802d72504f3391bcc437117728f))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([f6143d0](https://github.com/formbricks/hub-typescript/commit/f6143d0098d9ca5f52b2e713388735a5203dc9fe))
* **internal:** make MCP code execution location configurable via a flag ([907745d](https://github.com/formbricks/hub-typescript/commit/907745deb638aac955bf929d38000475d2e702e8))
* **internal:** move stringifyQuery implementation to internal function ([e46d05a](https://github.com/formbricks/hub-typescript/commit/e46d05aa0de97e9fe1028a2283eb2f580c44ad95))
* **internal:** remove mock server code ([cb34f47](https://github.com/formbricks/hub-typescript/commit/cb34f477a8864545dbb236ccf7323a70aa399a13))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([1888b79](https://github.com/formbricks/hub-typescript/commit/1888b799bff698d8d4f4e59a10a750bc6a47e904))
* **internal:** upgrade pnpm version ([8f36818](https://github.com/formbricks/hub-typescript/commit/8f3681844ed366d294fb80b703a6f6c80e79bc61))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([3a99054](https://github.com/formbricks/hub-typescript/commit/3a9905466abc24903471a41a2d1301fd84ccf1dd))
* **mcp-server:** improve instructions ([a7800a0](https://github.com/formbricks/hub-typescript/commit/a7800a00c953d6b177ba839f9014765dea86de5d))
* **mcp-server:** return access instructions for 404 without API key ([8fe84f7](https://github.com/formbricks/hub-typescript/commit/8fe84f7ecec72831d47092f1f1f06c5ecae4fce6))
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
