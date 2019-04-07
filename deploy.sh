#!/bin/bash
if [ -z "$1" ]; then
	echo "Please specify dev or prod"
elif [ $1 == "dev" ]; then
	docker stop gatsby-dev
	docker rm gatsby-dev
	docker build --file Dockerfile.dev -t gatsby-dev .
	docker run --name gatsby-dev -v $(pwd)/hello-world:/srv -d -p 8000:8000 gatsby-dev
elif [ $1 == "prod" ]; then
	echo "prod"
fi
