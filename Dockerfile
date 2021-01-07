FROM node:10-alpine
WORKDIR E:\Proyecto_Backend\sistema
COPY . .
RUN npm install
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node","app.js"]
