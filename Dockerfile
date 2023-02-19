FROM nginx:1.15.8-alpine

COPY ./dist/personal /usr/share/nginx/html

