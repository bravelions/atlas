FROM node:alpine

#COPY .eslintrc.json package.json tsconfig.json yarn.lock $DIR/ - DOESN'T WORK (stops at yarn.lock)

WORKDIR /app

RUN yarn install

COPY package.json ./

RUN yarn add nodemon -D
RUN yarn add ts-node -D
RUN yarn add typescript -D
RUN yarn install

COPY ./ ./

CMD ["yarn", "start"]