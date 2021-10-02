# Final image
FROM node
RUN npm install -g @angular/cli
COPY . ./
EXPOSE 4200
ENTRYPOINT [ "ng", "serve" ]