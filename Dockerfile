FROM node:8.9.4

RUN mkdir -p /usr/apps/codebreaker/backend
WORKDIR /usr/apps/codebreaker/backend
COPY package.json /usr/apps/codebreaker/backend
RUN npm install --silent
RUN npm install react-scripts@1.1.4 -g --silent
COPY . /usr/apps/codebreaker/backend
EXPOSE 3000
CMD ["npm", "start"]