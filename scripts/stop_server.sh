#!/bin/bash

cd /ec2-user/home/versus/versus-ui-start-app
npm install -g pm2
pm2 stop "versus-app"
pm2 delete "versus-app"