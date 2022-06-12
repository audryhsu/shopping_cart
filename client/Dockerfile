FROM node:16-alpine
RUN mkdir -p /home/my-shopping-cart-react
WORKDIR /home/my-shopping-cart-react
COPY package.json .
RUN npm install
COPY . .
CMD npm start