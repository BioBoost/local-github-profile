# Local GitHub Profile

Just a basic API that serves my GitHub profile. This can be used by students to develop a frontend for GitHub API.

Problem with using the real GitHub API is that we all send our request from same public IP and that GitHub throttles the requests.

More info? Take a look at [How to build a restful node.js api server using json files](https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files)

## Personal Setup

Start by forking the repository to your own account.

Next navigate to your own profile using the GitHub API. For example [https://api.github.com/users/BioBoost](https://api.github.com/users/Bioboost).

Save the result as `data/users/<username>.json` where you replace the username tag with your own username, so for example `data/users/bioboost.json`.

### Start the API process

Next start the API service locally using:

```bash
npm run serve
```

## Dependencies

* Express: a web application framework that provides lots of awesome features and HTTP utility methods
* Body Parser: a body parsing middleware that helps to process the body of requests sent to the express server
* Nodemon: a super helpful because it acts as a file-watcher, reloading our server when we make changes to our files
