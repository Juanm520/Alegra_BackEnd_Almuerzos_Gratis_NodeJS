FROM node:20

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]