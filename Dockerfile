FROM node:12-alpine AS build

ARG envProfile
ARG dockerRepositoryName

RUN echo DOCKER REPOSITORY NAME: ${dockerRepositoryName}

WORKDIR /app
COPY . .

# RUN yarn install
# RUN yarn run build:${envProfile}
# RUN yarn nx affected --head=$PR_BRANCH_NAME --target=build

FROM nginx:stable-alpine

WORKDIR /

COPY --from=build /app/dist/apps/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
