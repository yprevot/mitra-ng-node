# syntax=docker/dockerfile:1
ARG NODE_VERSION=18.19.1

FROM node:${NODE_VERSION}-alpine as base 
WORKDIR /usr/src/app/backend
EXPOSE 3001

FROM base as dev
ENV NODE_ENV dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
USER node
COPY . .
CMD npm run dev


FROM base as prod
ENV NODE_ENV prod
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
USER node
COPY . .
CMD node build/src/index.js


FROM base as test
ENV NODE_ENV test
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
USER node
COPY . .
RUN npm run test
