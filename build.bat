aws ecr get-login-password --region us-east-1 --profile "Live-CLI"| docker login --username AWS --password-stdin "934007006033.dkr.ecr.us-east-2.amazonaws.com"
docker build -t fullstack_aws_app .
docker tag fullstack_aws_app:latest "934007006033.dkr.ecr.us-east-2.amazonaws.com"/fullstack_aws_app:latest
docker push "934007006033.dkr.ecr.us-east-2.amazonaws.com"/fullstack_aws_app:latest