FROM node:10.16.0-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npx tsc

EXPOSE 3000

CMD ["node", "./dist/app.js"]