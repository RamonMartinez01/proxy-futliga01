FROM node
WORKDIR /usr/proyecto-proxy
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "proxy.js" ]