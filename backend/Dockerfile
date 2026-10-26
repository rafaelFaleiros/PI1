FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# O --quiet evita logs excessivos e o install garante que tudo suba
RUN npm install

COPY . .

RUN npm rebuild

EXPOSE 3001

# O CMD aqui será ignorado porque o Docker Compose tem um "command" próprio
CMD ["node", "server.js"]