FROM node:12-alpine AS build

ARG envProfile
ARG repoName

RUN echo ---- Repository Name: ${repoName} ----

WORKDIR /app
COPY . .

RUN yarn install
# RUN yarn run build:${envProfile}
RUN yarn nx build ${repoName} --${envProfile}

FROM nginx:stable-alpine

WORKDIR /

ARG myvalue=/app/dist/apps/${repoName}
RUN echo myvalue ${myvalue}

COPY --from=build {myvalue} /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
