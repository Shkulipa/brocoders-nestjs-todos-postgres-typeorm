
FROM node:18-alpine

RUN rm -rf /usr/src/app/node_modules

WORKDIR /user/src/app

COPY package*.json .

RUN npm install

COPY . .