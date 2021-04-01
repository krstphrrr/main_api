FROM node:alpine 
WORKDIR /app 
COPY package.json /app 
RUN npm install
RUN printenv
COPY . /app
CMD node index.js 
EXPOSE 5002