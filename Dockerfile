FROM node:21-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .
RUN npm run build 

FROM node:21-alpine
WORKDIR /app
COPY --from=builder /app/dist /app

RUN npm install -g serve

CMD [ "serve", "-s", "app/dist","-l","5000" ]

EXPOSE 5000