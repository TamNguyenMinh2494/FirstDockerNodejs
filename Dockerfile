FROM node:12-alpine
COPY . .

RUN npm i 
RUN npm i -g nodemon
EXPOSE 3000
CMD ["node", "index"]