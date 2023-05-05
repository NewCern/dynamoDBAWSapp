npm init
npm install typescript
npx tsc --init
npm install -g serverless
go to AWS account
got to IAM:
    a. add user
    b. add user name
    c. give permission(admin) for example
    d. create user
    e. create access key
    f. copy access key and secret keys created
in command line, type:  
    serverless config credentials --provider aws --key key123 --secret secret123
test locally:
    serverless invoke local --function helloWorldFunction
deploy:
    serverless deploy
create APIgateway


