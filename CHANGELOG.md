

## [2.0.1](https://github.com/timelessco/node-ts-app/compare/v2.0.0...v2.0.1) (2023-05-04)


### 👀 Notable Changes



#### `config` 

- Remove loadEnvironmentVariables() function invocation from config/index.ts and move to server.ts
- Ensure environment variables are loaded before validating them.


Introduced in: [`e6955d1`](https://github.com/timelessco/node-ts-app/commit/e6955d1b95ba78e76617a7ae9e7c92fb532bfda3)





### 🗃️ Commits


#### 🐞 Bug Fixes

- **`config:`** 🐛 move environment vars loading to server.ts [e6955d1](https://github.com/timelessco/node-ts-app/commit/e6955d1b95ba78e76617a7ae9e7c92fb532bfda3) by @navin-moorthy



#### ♻️  Code Refactoring

- **`env:`** ♻️ remove unused environment files and add dotenv configuration [2d2f2f0](https://github.com/timelessco/node-ts-app/commit/2d2f2f0faab7c56a4b11dcf77b8715dc68918bf1) by @navin-moorthy



#### 🛠️ Build Updates

- **`nvmrc:`** 🛠️ add .nvmrc file with LTS Node version [9fd338f](https://github.com/timelessco/node-ts-app/commit/9fd338f0ab72f7857c57ec2e7c1aaed5064c3be1) by @navin-moorthy

- **`package.json:`** 🛠️ update build script with tsup-node [dcc1fb2](https://github.com/timelessco/node-ts-app/commit/dcc1fb2a3af1c4eefe14e0bd9866f134f2ab9585) by @navin-moorthy



#### 📔 Documentation Changes

- **`DEVELOPMENT.md:`** 📔 update instructions for starting development server [c574f95](https://github.com/timelessco/node-ts-app/commit/c574f951d99b684017f436d9b3b34e031ca7f9ab) by @navin-moorthy



#### 🔨 Maintenance Updates

- **`.eslintrc.cjs:`** 💄 update ESLint configuration [7a17cc4](https://github.com/timelessco/node-ts-app/commit/7a17cc4bf3399e773cd04de530785b3742f7661c) by @navin-moorthy

- **`config:`** 🧹 add ignoreDependencies option  in knip and update tsconfig [61bc78d](https://github.com/timelessco/node-ts-app/commit/61bc78da1104a2a26a4ae6b4d2bfe0a702ea45fe) by @navin-moorthy

- **`cspell:`** 🧹 enable useGitignore in cspell.json [81543f4](https://github.com/timelessco/node-ts-app/commit/81543f4a09a1678423919ebd075319a09da2fd08) by @navin-moorthy

- **`deps:`** 🧹 upgrade pnpm to version 8.4.0 [64191da](https://github.com/timelessco/node-ts-app/commit/64191da3afd0343f6a9b541881f4080d46c8104e) by @navin-moorthy

- **`git-config:`** 🧹 correct spelling mistake in git configuration description [06f123f](https://github.com/timelessco/node-ts-app/commit/06f123feb58ac5a96ea348f1f2f4796d4fc2052f) by @navin-moorthy

- **`linting:`** 🧹 update ignore files [9dba94e](https://github.com/timelessco/node-ts-app/commit/9dba94edf46bf5052b09a63a10b257ce3d329429) by @navin-moorthy

- **`project-words:`** 🧹 add and update project-related words [c18380a](https://github.com/timelessco/node-ts-app/commit/c18380a6849de8336b22df65c278586b15f66fc8) by @navin-moorthy

- **`release-it:`** 🧹 update release notes template [4c9d392](https://github.com/timelessco/node-ts-app/commit/4c9d392967e60c3e38bca574b0674ae6f945b2b4) by @navin-moorthy

- **`vscode:`** 🛠️ add file associations and editor formatters for Dockerfile and Nginx files [810182a](https://github.com/timelessco/node-ts-app/commit/810182a5bffb3b091666a261fdd1544c198eb4b5) by @navin-moorthy



### 📌 Other Notable Changes



#### `DEVELOPMENT md` 

- Change file path from `src/index.ts` to `src/server.ts` for starting development server


Introduced in: [`c574f95`](https://github.com/timelessco/node-ts-app/commit/c574f951d99b684017f436d9b3b34e031ca7f9ab)




#### `env` 

- Add a new config/index.ts file for loading the environment variables from a .env file.
- Add validateEnvironment variables function that validates the required environment variables.
- Use validateEnvironment variables to ensure the required env variables are available at runtime.
- Update index.ts to utilize the validate environment variables function.
- Replace usage of consola library with console.log to output 1 + 2.


Introduced in: [`2d2f2f0`](https://github.com/timelessco/node-ts-app/commit/2d2f2f0faab7c56a4b11dcf77b8715dc68918bf1)

## [2.0.0](https://github.com/timelessco/node-ts-app/compare/v1.0.0...v2.0.0) (2023-04-12)


### 🧨 BREAKING CHANGE


#### `Tooling` 

- ✨ update & add many toolings


Introduced in: [`1faebdc`](https://github.com/timelessco/node-ts-app/commit/1faebdc2d379bc34645e73c0600bf547bfe6712a)




### 🗃️ Commits


#### ⭐ New Features

- **`tooling:`** ✨ update & add many toolings [1faebdc](https://github.com/timelessco/node-ts-app/commit/1faebdc2d379bc34645e73c0600bf547bfe6712a) by @navin-moorthy



#### 📔 Documentation Changes

- **`readme:`** 📝 update guide with node support [e5ab6bb](https://github.com/timelessco/node-ts-app/commit/e5ab6bbcca2d8b6cf228782284f2b170baa2d4b8) by @navin-moorthy



#### 🔨 Maintenance Updates

- **`deps:`** ⬆️ update actions/stale action to v8 (#7) [606927a](https://github.com/timelessco/node-ts-app/commit/606927a866b43d705348cda30420ee9a03fd1ba3) by @renovate[bot], closes [#7](https://github.com/timelessco/node-ts-app/issues/7)

- **`deps:`** lock file maintenance (#15) [9159045](https://github.com/timelessco/node-ts-app/commit/9159045767ba150636cf38556c8e3fe31380818e) by @renovate[bot], closes [#15](https://github.com/timelessco/node-ts-app/issues/15)

- **`deps:`** lock file maintenance (#19) [7fc0b6b](https://github.com/timelessco/node-ts-app/commit/7fc0b6ba1af9d9fe03f27ccf3325bcf040faab4f) by @renovate[bot], closes [#19](https://github.com/timelessco/node-ts-app/issues/19)

- **`deps:`** lock file maintenance (#9) [316f1ad](https://github.com/timelessco/node-ts-app/commit/316f1add0056ff180aa4c01983e85700dcff4a8c) by @renovate[bot], closes [#9](https://github.com/timelessco/node-ts-app/issues/9)

- **`dev-deps:`** ⬆️ update @babel/core to ^7.21.4 (#12) [046356d](https://github.com/timelessco/node-ts-app/commit/046356db7a9db8a22eeebee4fafba035043d3f61) by @renovate[bot], closes [#12](https://github.com/timelessco/node-ts-app/issues/12)

- **`dev-deps:`** ⬆️ update @babel/preset-env to ^7.21.4 (#13) [24d6854](https://github.com/timelessco/node-ts-app/commit/24d68541de18f09eff292b2962c858fcd81d5adb) by @renovate[bot], closes [#13](https://github.com/timelessco/node-ts-app/issues/13)

- **`dev-deps:`** ⬆️ update @commitlint/cli to ^17.5.0 (#5) [5b578bb](https://github.com/timelessco/node-ts-app/commit/5b578bb135f5ba5d9e84da5a508e9863227bc27f) by @renovate[bot], closes [#5](https://github.com/timelessco/node-ts-app/issues/5)

- **`dev-deps:`** ⬆️ update @commitlint/cli to ^17.5.1 (#10) [f739bc6](https://github.com/timelessco/node-ts-app/commit/f739bc6a8ca0d531e496d70cdf22c7299736d23e) by @renovate[bot], closes [#10](https://github.com/timelessco/node-ts-app/issues/10)

- **`dev-deps:`** ⬆️ update devdependencies (non-major) (minor) (#4) [79de2b2](https://github.com/timelessco/node-ts-app/commit/79de2b2d4c295f7b3c217c63d69ba12177e511e4) by @renovate[bot], closes [#4](https://github.com/timelessco/node-ts-app/issues/4)

- **`dev-deps:`** ⬆️ update devdependencies (non-major) (patch) (#3) [77ebb09](https://github.com/timelessco/node-ts-app/commit/77ebb09f5d1ef110b6b62c2ea9369e6fb7c5350c) by @renovate[bot], closes [#3](https://github.com/timelessco/node-ts-app/issues/3)

- **`dev-deps:`** ⬆️ update devdependencies (non-major) (patch) (#6) [c2f5fbf](https://github.com/timelessco/node-ts-app/commit/c2f5fbfdd0f223dbccde4ba6f0683e70f7e11867) by @renovate[bot], closes [#6](https://github.com/timelessco/node-ts-app/issues/6)

- **`dev-deps:`** ⬆️ update devdependencies (non-major) (patch) (#8) [6af4ad6](https://github.com/timelessco/node-ts-app/commit/6af4ad615a60f2b4301765f1f3da1593485f9c55) by @renovate[bot], closes [#8](https://github.com/timelessco/node-ts-app/issues/8)

- **`dev-deps:`** ⬆️ update eslint to ^8.37.0 (#11) [18182f5](https://github.com/timelessco/node-ts-app/commit/18182f5f17bffc1cc9fe52155546e448ec8d1322) by @renovate[bot], closes [#11](https://github.com/timelessco/node-ts-app/issues/11)

- **`dev-deps:`** ⬆️ update eslint to ^8.38.0 (#18) [19f6a65](https://github.com/timelessco/node-ts-app/commit/19f6a652007987321006c9198f2c18a585565cd2) by @renovate[bot], closes [#18](https://github.com/timelessco/node-ts-app/issues/18)

- **`dev-deps:`** ⬆️ update lint-staged to ^13.2.1 (#17) [d166537](https://github.com/timelessco/node-ts-app/commit/d166537f5a5655863a207f0d8741bfe385e2b62c) by @renovate[bot], closes [#17](https://github.com/timelessco/node-ts-app/issues/17)

- **`dev-deps:`** ⬆️ update release-it to ^15.10.0 (#14) [428b5c1](https://github.com/timelessco/node-ts-app/commit/428b5c1b04ab6d2459b7c9e512c543f181a3bf72) by @renovate[bot], closes [#14](https://github.com/timelessco/node-ts-app/issues/14)

- **`dev-deps:`** ⬆️ update release-it to ^15.10.1 (#16) [ca00464](https://github.com/timelessco/node-ts-app/commit/ca004645b49fcb34f86a3167e502a2ed6ad88e57) by @renovate[bot], closes [#16](https://github.com/timelessco/node-ts-app/issues/16)

- **`dev-deps:`** ⬆️ upgrade rimraf to v4 (#2) [ea8c225](https://github.com/timelessco/node-ts-app/commit/ea8c225d74b7c112a2f9e0da60f2077c8e99e7b9) by @renovate[bot], closes [#2](https://github.com/timelessco/node-ts-app/issues/2)

- **`dev-deps:`** ⬆️ upgrade rimraf to v5 (#20) [63492ba](https://github.com/timelessco/node-ts-app/commit/63492bad192332708fcc7937384681c178f514f1) by @renovate[bot], closes [#20](https://github.com/timelessco/node-ts-app/issues/20)

- **`eslint:`** 🎨 add node env true [4f74504](https://github.com/timelessco/node-ts-app/commit/4f7450404d3c9046a245d51cd1fada03a7f8ff02) by @navin-moorthy

## 1.0.0 (2022-12-28)


### Feature Updates

* **project:** 🎉 initial commit ([bb2ee5a](https://github.com/timelessco/node-js-app-template/commit/bb2ee5ad171b119efda2e82e85e4284ab8e3daea))


### Build Updates

* 👷 add build pipeline for production use ([a183829](https://github.com/timelessco/node-js-app-template/commit/a183829da83bd1f1028ca8c65ef5057bfbe03003))


### Maintanance Updates

* **pkg:** 🎨 initiate the version ([37c7fe9](https://github.com/timelessco/node-js-app-template/commit/37c7fe99ddce72079169fb7bf05b179e3d6a1f04))