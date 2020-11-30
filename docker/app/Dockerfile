FROM node:15.3.0-alpine3.12

# Environment
WORKDIR $DIR/atlas-app/

# Dependencies
COPY .eslintrc.json lerna.json package.json tsconfig.json yarn.lock $DIR/atlas-app/
COPY packages/app/ $DIR/atlas-app/packages/app/
COPY packages/shared/ $DIR/atlas-app/packages/shared/

# Build
RUN yarn install
RUN yarn build

# Serve
EXPOSE 3000
CMD ["yarn", "start"]