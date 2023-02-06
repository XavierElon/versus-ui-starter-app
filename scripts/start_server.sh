#!/bin/bash

cd ..
pm2 stop "versus-app"
pm2 delete "versus-app"
yarn run build
pm2 start npm --name "versus-app" -- start --watch
systemctl restart nginx