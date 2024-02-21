# syntax=docker/dockerfile:1
ARG NODE_VERSION=18.19.1

FROM node:${NODE_VERSION}-alpine as base 
WORKDIR /usr/src/app/backend

FROM base as development
ENV NODE_ENV development
WORKDIR /usr/src/app/backend
COPY . . 
RUN npm install
CMD npm run dev


FROM base as testing
ENV NODE_ENV testing
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
COPY .env.test .env
COPY . .
RUN npm install
RUN npm run test


FROM base as build
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src 
COPY .env.prod .env
RUN ls -a
RUN npm install
RUN npm run build


FROM build as production
ENV NODE_ENV production
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --ommit=dev
USER node
WORKDIR /usr/src/app/backend
COPY .env.prod .env
COPY --from=build /usr/build  .
CMD node src/index.js



