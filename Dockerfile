# -------------------------------------------------
# Don't Touch This file | Very Secured | 
# Project Might Failed if any changes Did further 
# other than sounishnath003
# -------------------------------------------------
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm i -g @angular/cli
# RUN npm run-script build
EXPOSE 4200
CMD npm start


# made for production checking
# FROM nginx:alpine
# COPY --from=node /app /usr/share/nginx/html
