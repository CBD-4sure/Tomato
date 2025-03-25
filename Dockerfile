FROM node:latest

WORKDIR /tomato

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","build" ]