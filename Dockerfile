FROM node

COPY . ./tomato

WORKDIR /tomato

RUN npm install

EXPOSE 1234
