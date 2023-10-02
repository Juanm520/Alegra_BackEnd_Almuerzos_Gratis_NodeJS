FROM node:20

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3002

CMD [ "npm", "run", "dev" ]
