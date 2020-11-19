# Atlas

[Project Backlog](https://www.notion.so/prabu/3b3a75c1c34244b698b09cc06e3a071c?v=7b0d78ed4fda4a45938dae61fee6f1ab)

How to run the project:

1. Make sure you have [nodemon](https://www.npmjs.com/package/nodemon) installed globally.

2. Make sure you have [yarn](https://www.npmjs.com/package/yarn) installed globally.

3. This project has been setup as a monorepo. You will need to run `yarn` inside each workspace separately as well as from the root when you first clone. When done, make sure you are at the root `/` level of the application, and run `yarn start`. This will run both the `app` and the `server` in parallel.

How to install packages:

Please make sure that when you install a new package you always use `yarn`, and that you are inside the directory of the workspace you want to add a package to e.g. `cd packages/app` and then `yarn add { package_name }`. Although rare, if you want to add a package to the root directory please make sure you use the `-W` flag. You should ever only need to install dev dependencies from the root directory, nothing more.

How to run the linter:

The linter runs on precommit however you might want to run it separately. If so run `yarn lint` from the root directory to lint all workspaces.