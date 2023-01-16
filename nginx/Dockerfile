FROM nginx:1.19-alpine

RUN rm /etc/nginx/conf.d/default.conf && \
    apk add --no-cache bash

COPY nginx.conf /etc/nginx/conf.d
