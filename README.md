# Atlas

[Project Backlog](https://www.notion.so/prabu/3b3a75c1c34244b698b09cc06e3a071c?v=7b0d78ed4fda4a45938dae61fee6f1ab)

How to run the project:

1. Make sure you have [yarn](https://www.npmjs.com/package/yarn) installed globally.

2. This project has been setup as a monorepo. You will need to run `yarn install` from the root when you first clone to install all dependencies. When done, again at the root `/` level of the application, run `yarn start`. This will run both the `app` and the `server` in parallel.

How to install packages:

Please make sure that when you install a new package you always use `yarn add`, and that you are inside the directory of the workspace you want to add a package to e.g. `cd packages/app` and then `yarn add { package_name }`. Although rare, if you want to add a package to the root directory please make sure you use the `-W` flag. You should ever only need to install dev dependencies from the root directory, nothing more.

How to run the linter:

The linter runs on precommit however you might want to run it separately. If so run `yarn lint` from the root directory to lint all workspaces.

How to run the app using docker:

To run both containers using docker compose run: `docker-compose-up`

To run the app on its own, run: `docker build -t atlas-app -f ./packages/app/Dockerfile .` and then `docker run -p 3000:3000 --name atlas-app atlas-app`.

To run the server on its own, run: `docker build -t atlas-server -f ./packages/server/Dockerfile .` and then `docker run -p 3001:3001 --name atlas-server atlas-server`.