FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration production


FROM nginx:alpine

# supprimer ancien contenu
RUN rm -rf /usr/share/nginx/html/*

# copier build Angular
COPY dist/site-janne/ /usr/share/nginx/html/

# ⚠️ copier ta config nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf