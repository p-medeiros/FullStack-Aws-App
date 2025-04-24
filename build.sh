ECR_REGISTRY="934007006033.dkr.ecr.us-east-2.amazonaws.com"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker build -t fullstack_aws_app .
docker tag fullstack_aws_app:latest $ECR_REGISTRY/fullstack_aws_app:latest
docker push $ECR_REGISTRY/fullstack_aws_app:latest
