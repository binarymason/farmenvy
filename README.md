
`aws ecr create-repository --repository-name farm-envy-qa`
`DOCKER_LOGIN=$(aws ecr get-login --region us-east-1 --no-include-email)`


## How to manage EC2 docker containers
##### Ref: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_tutorial.html
```
# configure cluster
ecs-cli configure --cluster farm-envy-qa -r us-east-1 --access-key ACCESS_KEY --secret-key SECRET_KEY

aws ec2 create-key-pair --key-name MyKeyPair

# create a new instance
ecs-cli up --keypair MyKeyPair --force --capability-iam --size 2 --instance-type t2.medium


# perform 'compose' commands
ecs-cli compose --file docker-compose.yml up
ecs-cli compose --file docker-compose.yml down
```
