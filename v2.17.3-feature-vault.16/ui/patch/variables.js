var variables={
  "name": "@ch-post-app-techsys-onboarding/statistics-stream-api",
  "version": "2.17.3-feature-vault.16",
  "description": "Statistics Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "eggimannm",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "0.9.19",
    "apikana-defaults": "0.0.71",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "eggimannm",
    "namespace": "app.techsys.onboarding.statistics",
    "shortName": "statistics",
    "projectName": "statistics-stream-api",
    "title": "Statistics Stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.App.Techsys.Onboarding.Statistics.V1",
    "dotnetPackageId": "Ch.Post.App.Techsys.Onboarding.Statistics.StreamApi",
    "mqs": "Kafka",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}