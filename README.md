A quick & dirty Lambda via API Gateway example

# Prerequisites

dynamodb table 'Movies' with hashkey 'Title'
populate with a few entries from omdbapi.com

## NodeJS & NPM
```
npm --version
# 3.10.5

node --version
# v6.3.1
```

## have awscli installed

```
pip install awscli
aws configure
```

## setup serverless & execute getting started

https://github.com/serverless/serverless#quick-start

## check out this repository

```
git clone https://github.com/tobig77/sample-serverless-api

```

# Run it

cd sample-serverless-api
serverless deploy

