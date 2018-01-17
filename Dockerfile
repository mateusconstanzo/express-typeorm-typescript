FROM node:alpine

RUN mkdir -p /api/

WORKDIR /api/

EXPOSE 3000

CMD npm start