1. Create Policy

```
aws iam create-role --role-name manning-lambda-role --assume-role-policy-document file://trust-policy.json

aws iam attach-role-policy --policy-arn
arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole --role-name manning-lambda-role
```

2. Create Zip

```
zip -r zipfile ..
```

3. Create Lambda Function

```
aws lambda create-function --function-name manning-museum --zip-file fileb://zipfile.zip --runtime nodejs14.x --role arn:aws:iam::227033462436:role/manning-lambda-role --handler index.handler
```
