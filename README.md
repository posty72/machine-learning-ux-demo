# Machine learning UX demo

A small demonstration of how machine learning can be applied to make a user's experience faster and easier.

## Setup

1. Rename `aws-creds.example.json` to `aws-creds.json` and add your [AWS access key and secret key](https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html).
2. Set up your machine learning models in AWS Console
3. Create a `config.js` file and add your machine learning ID from AWS

```module.exports = {
    machineLearningId: 'ml-id'
}
```

4. Run `yarn install`
5. Run `yarn start` and go to `localhost:8080`
