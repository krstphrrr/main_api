FROM node:alpine 
WORKDIR /app 
COPY package.json /app 
RUN npm install
RUN export NODE_OPTIONS="--max-old-space-size=5120"
COPY . /app
CMD node index.js 
EXPOSE 5002