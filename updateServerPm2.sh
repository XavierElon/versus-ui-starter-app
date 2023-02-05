#!/bin/bash

cd versus-ui-starter-pp
pm2 stop "versus-app"
pm2 delete "versus-app"
git pull
yarn install
yarn run build
pm2 start npm --name "versus-app" -- start --watch
systemctl restart nginx