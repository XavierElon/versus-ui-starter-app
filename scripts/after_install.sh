#!/bin/bash

cd /ec2-user/home/versus/versus-ui-starter-app
touch test1.txt
echo 'test' >> test1.txt
npm i -g pm2
yarn install