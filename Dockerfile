FROM node:16
WORKDIR /node-app
ARG PORT_BUILD=6000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . .
RUN npm install
RUN npm --prefix client install
ENTRYPOINT npm run start:prod