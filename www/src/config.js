// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  aws_user_pools_web_client_id: "7jqfckt15c377e3j2bsdpfacoh", // CognitoClientID
  api_base_url: "https://dhwo6zpm8d.execute-api.us-east-1.amazonaws.com/{StageNameParam}", // TodoFunctionApi
  cognito_hosted_domain: "mytodoappdemo-serverless-todo-app.auth.us-east-1.amazoncognito.com", // CognitoDomainName
  redirect_url: "https://master.d1igflfbzv11fy.amplifyapp.com", // AmplifyURL
};

export default config;
