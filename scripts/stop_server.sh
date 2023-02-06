#!/bin/bash

cd /ec2-user/home/versus/versus-ui-start-app
touch test3.txt
echo 'test' >> test3.txt
npm install -g pm2
pm2 stop "versus-app"
pm2 delete "versus-app"