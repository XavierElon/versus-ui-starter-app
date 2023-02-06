#!/bin/bash

cd /ec2-user/home/versus/versus-ui-starter-app
touch test2.txt
echo 'test' >> test2.txt
yarn run build
pm2 start npm --name "versus-app" -- start --watch
systemctl restart nginx