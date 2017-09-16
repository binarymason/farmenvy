FROM node:8.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install yarn
COPY package*.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install
