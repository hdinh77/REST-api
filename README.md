# REST APIs Notes

 - to create the json package
 ```
 $ npm init --yes
 ```
 - Express is a dependency that the project includes to use, so it is installed in the node_modules folder
 - to download the Express and include it in your project,use
 ```
 $ npm i express
 ```
  - the require function lets you load in the required Express module
  - by convention, you name the "Express" object 'app'
  - get, put, post, delete functions correspond to HTTP methods; this can handle HTTP requests
  - get method has two arguments, the url and the callback function
  - the callback function is something that is called when you to the 'get' method, takes two arguments
    the request and the response
```app.get('url/', (req, res));```
  - res.send() sends the response using HTTP so when you go on the localhost port, displays it
  - all the app.get() are endpoints that will do something based on url