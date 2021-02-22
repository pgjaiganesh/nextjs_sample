import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Part 2 - Creation of the Amplify Application
    const amplifyApp = new amplify.App(this, "sample-react-app ", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "pgjaiganesh",
        repository: "nextjs_sample.git",
        oauthToken: cdk.SecretValue.secretsManager("amplify_secret", {
          jsonField: "amplify_user",
        }),
      }),
    });
    const masterBranch = amplifyApp.addBranch("main");
  }
}
