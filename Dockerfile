FROM node:alpine 
WORKDIR /app 
COPY package.json /app 
RUN npm install
ENV NODE_OPTIONS="--max-old-space-size=5120"
RUN printenv
COPY . /app
CMD node index.js 
EXPOSE 5002