# Dev Setup Instructions

1. clone the repository `git clone https://github.com/RopesApp/server`
2. install all dependencies from package.json by: `npm install`
3. run server: `npm run dev`
4. go to `http://127.0.0.1:3000/` or hit the API through Postman

## Technology/Tools
* `express` - gives us the http server to respond to requests
* `body-parse` - allows us to read POST data that comes in the body of requests
* `morgan` - middleware to log requests to stout
* `mongoose` - mongoDB ORM to manage models and querying DB
* `MongoDB` - hosting a dev DB at https://mlab.com (TODO: figure out how to share it with others)
