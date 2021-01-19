FROM node:12-alpine AS build

ARG envProfile
ARG repoName

WORKDIR /app
COPY . .

RUN echo repoName: ${repoName}
RUN yarn install
# RUN yarn run build:${envProfile}
RUN yarn nx affected:build --${envProfile}

FROM nginx:stable-alpine

WORKDIR /

COPY --from=build /app/dist/apps/{repoName} /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
