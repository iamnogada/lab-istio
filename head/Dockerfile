FROM node:12.16-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install --production

ENV  NODE_ENV production

CMD ["node","bin/www"]