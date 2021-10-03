FROM nginx:latest
COPY ./dist/admin-template /usr/share/nginx/html
EXPOSE 80