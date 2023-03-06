#!/bin/bash
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 275136276893.dkr.ecr.us-west-2.amazonaws.com
docker build -t xsj-ui-starter-app .
docker tag xsj-ui-starter-app:latest 275136276893.dkr.ecr.us-west-2.amazonaws.com/xsj-ui-starter-app:latest
docker push 275136276893.dkr.ecr.us-west-2.amazonaws.com/xsj-ui-starter-app:latest