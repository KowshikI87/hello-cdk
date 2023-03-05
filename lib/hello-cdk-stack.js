// const { Stack, Duration } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const cdk = require('aws-cdk-lib');
const s3= require('aws-cdk-lib/aws-s3');

class HelloCdkStack extends cdk.Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloCdkQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });

    //"this" ==> the object we will craete using new HelloCdkStack
    //will be the value of "scope"

    //"MyFirstBucket" is the id of this construct

    //the last argument is a list of properties passed
    //as the keys of an object
    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    })
  }
}

module.exports = { HelloCdkStack }
