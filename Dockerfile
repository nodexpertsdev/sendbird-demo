# Use latest node version 10.x
FROM node:10.15.0-slim as react-build

# create app directory in container
RUN mkdir -p /usr/src/app

# set /app directory as default working directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app
# copy all file from current dir to /app in container

RUN apt-get update && apt-get --assume-yes install git-core
RUN npm install

COPY . /usr/src/app

# create build
RUN npm run build

# expose port 4200
EXPOSE 4200

# cmd to start service
CMD [ "npm","run","start" ]


# # stage: 1
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=react-build /usr/src/app/dist/send-bird /usr/share/nginx/html

# # To provide a http authentication comment out the next two lines
COPY conf /etc/nginx/conf.d
# #COPY conf/authnginx/htpasswd /etc/nginx/authnginx/htpasswd
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
