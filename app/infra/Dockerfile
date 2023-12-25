FROM node:18.17.1-alpine as build
WORKDIR /app
COPY packages/app/package*.json packages/app/.npmrc ./
RUN npm install --legacy-peer-deps
COPY packages/app ./
ENV ANALYZE false
ENV SITEMAP_XML true
RUN npm run build

FROM node:18.17.1-alpine as release
WORKDIR /app
COPY --from=build /app/ ./
CMD ["npm", "start"]