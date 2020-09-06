# REST APIs Notes

 - REST stands for Representational State Transfer
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
## Web servers and HTTP requests
  - get, put, post, delete functions correspond to HTTP methods; this can handle HTTP requests
  - get method has two arguments, the url and the callback function
  - the callback function is something that is called when you to the 'get' method, takes two arguments
    the request and the response
```app.get('url/', (req, res));```
  - res.send() sends the response using HTTP so when you go on the localhost port, displays it
  - all the app.get() are endpoints that will do something based on url
  - nodemon package watches all files in folder and runs them
  - to use, run the program with nodemon
  - instead of having to run it whenever you change something, it does it automatically

## Environment variables
  - environment variables are variables that are part of the environment in which the process runs
  - PORT is an environment variable that depends on which OS or process
  - to use an environment variable, use
  ```process.env.SPECIFIC_VARIABLE_HERE (ex. process.env.PORT)```
  - back ticks (``) can hold a template string where you can insert dynamic values; ex:
  ```console.log(`Listening on port ${port}: `);```
  - the dynamic value is ${port} that is replaced
  - create a new environment variable in Windows
  ```$ set PORT=5000```
