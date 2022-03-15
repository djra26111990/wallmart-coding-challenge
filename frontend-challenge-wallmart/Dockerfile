FROM node:16.14.0-alpine3.15 as react_build

WORKDIR /usr/src/app
COPY . .
RUN yarn install && yarn cache clean && yarn build

FROM nginx:1.19.0-alpine

COPY --from=react_build /usr/src/app/dist /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
