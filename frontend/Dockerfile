# syntax=docker/dockerfile:1
ARG NODE_VERSION=18.19.1

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app


FROM base as development
ENV NODE_ENV development
COPY . .
RUN npm install
RUN npm install -g @angular/cli@^17.0.0
COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "100"]


FROM base as testing
ENV NODE_ENV testing
COPY . .
RUN npm install
RUN npm install -g @angular/cli@^17.0.0
COPY . .
CMD ["npm", "run", "test"]


FROM base as build
ENV NODE_ENV build
RUN mkdir -p /app
RUN npm cache clear --force
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx as production
ENV NODE_ENV production
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
