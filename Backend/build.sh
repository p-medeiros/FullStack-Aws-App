aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 934007006033.dkr.ecr.us-east-2.amazonaws.com
docker build -t fullstack_aws_app_backend .
docker tag fullstack_aws_app_backend:latest 934007006033.dkr.ecr.us-east-2.amazonaws.com/fullstack_aws_app_backend:latest
docker push 934007006033.dkr.ecr.us-east-2.amazonaws.com/fullstack_aws_app_backend:latest
