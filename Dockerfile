FROM node:slim
WORKDIR /usr/src/app
EXPOSE 3000
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]
