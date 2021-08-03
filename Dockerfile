FROM node:14.15 AS build

ARG APP_ENV

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm cache clean --force
RUN npm i

COPY . .

RUN npm run build:ssr:${APP_ENV}

CMD [ "node", "dist/dksh/server/main.js" ]
