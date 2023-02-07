#!/bin/bash

cd /ec2-user/home/versus/versus-ui-starter-app
touch test1.txt
echo 'hello world'
echo 'test' >> test1.txt
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16
npm i -g pm2
npm i -g yarn
yarn install