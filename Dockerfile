FROM node:12-alpine AS build

ARG envProfile

WORKDIR /app
COPY . .

RUN yarn install
# RUN yarn run build:${envProfile}
RUN yarn nx affected --target=build:${envProfile}

FROM nginx:stable-alpine

WORKDIR /

COPY --from=dist /apps/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
