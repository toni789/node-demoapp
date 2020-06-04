Demo application
================

This is a "Hello World!" application written in Node.js/Express with Mocha/Chai for testing.

**Requirements**

* [GitHub account](https://github.com/join)
* [Node.js](https://nodejs.org/en/download/)

## Getting started

### Fork & clone the repository

Create your fork by clicking the **Fork** button on the top right of [this page](https://github.com/edeltech/node-demoapp).

After creating the fork, `git clone` it to your local machine.

    $ cd <the-place-where-i-usually-clone-on-my-machine>
    $ git clone git@github.com:<your-github-username>/node-demoapp.git

### Setup the app & run the tests locally

    $ cd node-demoapp
    $ npm install
    $ npm run test

You should see a similar output in your terminal:

```
$ npm run test

> demoapp@1.0.0 test /Code/node-demoapp
> mocha --require babel-register tests/*.js --exit

Demo app listening on port 3000!


  Hello
    GET /
      ✓ should say Hello World!


  1 passing (22ms)
```


## Assignment

Create a GitHub Action workflow that will run the test suite each time you commit to your repository.

You'll find more information on how to do so in the [GitHub Actions documentation](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions). Or follow the guide below.


#### Guide

Create a new branch to add the GitHub Action workflow for continous integration:

    $ git checkout -b setup-continous-integration

Add the workflow configuration file:

    $ mkdir -p .github/workflows/
    $ touch .github/workflows/node-ci.yml

Add the following content to the file you just created:

```yaml

name: Node.js CI

on: [push]

jobs:
  test:

    runs-on: ubuntu-latest

    steps:
    # Checkout the code
    - uses: actions/checkout@v2
    # Setup Node.js
    - name: Use Node.js 12.x
      uses: actions/setup-node@v1
      with:
        node-version: 12.x
    # Install dependencies
    - run: npm install
    # Run test suite
    - run: npm test
```

Save your file, commit and push:

    $ git add .github/workflows/node-ci.yml
    $ git commit -m "Add continuous integration workflow configuration file"
    $ git push origin setup-continous-integration

Now head to your GitHub account and navigate to your forked repository. Open the **Actions** tab and you should see your workflow running.

It is now time to create a pull request to merge this feature into the master branch. Navigate back to the home of your repository and click the green **Compare & pull request** button.

> **ATTENTION**: Since this is a fork, you can choose the base repository to merge your code into. Merge into your fork by setting the base repository to `<your-github-username>/node-demoapp`.

Click **Create pull request**.

If GitHub indicates that all checks have passed, click the **Merge pull request** button. The continous integration workflow will now run for every future commit, branch and pull request, preventing you and your teamates to deploy broken code to production.

That's it!



