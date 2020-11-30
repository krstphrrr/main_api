FROM node:alpine 
WORKDIR /app 
COPY package.json /app 
RUN npm install
# ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN printenv
COPY . /app
CMD node index.js 
EXPOSE 5002