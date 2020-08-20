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
RUN npm run-script build
CMD [ "echo", "installed @angular, optimizing build prod" ]


FROM nginx:alpine
COPY --from=node /app/dist/educatify /usr/share/nginx/html