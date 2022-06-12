FROM node:16-alpine
RUN mkdir -p /home/my-shopping-cart
WORKDIR /home/my-shopping-cart
COPY package.json .
RUN npm install
COPY . .
CMD npm start