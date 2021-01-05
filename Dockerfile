FROM node:12-alpine AS build

ARG envProfile

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn run build:${envProfile}

FROM nginx:stable-alpine

WORKDIR /

COPY --from=build /app/build/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
