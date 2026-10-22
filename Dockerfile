</> dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY app.js ./

EXPOSE 3000

ENV PORT=3000

USER node

CMD ["npm", "start"]
