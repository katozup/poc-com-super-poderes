FROM node:14-alpine AS build

ARG envProfile
ARG repoName

RUN echo ---- Repository Name: ${repoName} ----

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn nx build ${repoName} --configuration=${envProfile}

FROM nginx:stable-alpine

WORKDIR /

ARG repoPath

COPY --from=build ${repoPath} /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
