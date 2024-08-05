# Dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT ["node", "dist/index.js"]
