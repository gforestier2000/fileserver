FROM node:17-alpine


WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci --production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src .


#ADD . /var
#WORKDIR /var

#RUN npm install

EXPOSE 4888
VOLUME ./logs

CMD ["node","server.js"]