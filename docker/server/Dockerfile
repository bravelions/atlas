FROM node:15.3.0-alpine3.12

# Environment
WORKDIR $DIR/atlas-server/

# Dependencies
COPY .eslintrc.json lerna.json package.json tsconfig.json yarn.lock $DIR/atlas-server/
COPY packages/server/ $DIR/atlas-server/packages/server/
COPY packages/shared/ $DIR/atlas-server/packages/shared/

# Build
RUN yarn install
RUN yarn build

# Serve
EXPOSE 3001
CMD ["yarn", "start"]