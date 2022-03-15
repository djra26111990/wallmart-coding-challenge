FROM node:alpine3.15 as build_image

WORKDIR /usr/src/app
COPY . .
RUN yarn install && yarn cache clean && yarn build

FROM node:alpine3.15 as deploy_image

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
COPY development.env ./
COPY test.env ./
RUN yarn install && yarn cache clean
COPY --from=build_image /usr/src/app/dist .

CMD [ "yarn", "start:prod" ]