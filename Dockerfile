FROM node:lts-slim

WORKDIR /usr/src/superquiz
COPY ./ ./
RUN npm install
CMD [ "/bin/bash" ]

