FROM node:alpine
USER node
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "node", "app.js" ]
