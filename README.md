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
  - endpoints are basically like where the url takes you (like google.com/search and google.com/images)
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

## Route Parameters
  - endpoint that includes the id for each route
``` app.get('/api/courses/:id'...)```
  - the :id is a parameter that can change for each id of the page
  - to read this parameter, need to use
```req.params.id```
  - in order to do multiple params:
```app.get('/api/posts/:year/:month'...)```
  - if you just do a request of the params without specifying, it gives you a list of all the params and values

## Query string parameters
  - these are used in the url of the port/site as optional like to sort things
```http://localhost:3000/api/posts/2020/9?sortBy=name```
  - the "2020/9" is the route parameter, and the "sortBy=name" is the query string parameter
  - to read the query string parameter, use
  ```req.query```
  - query are stored in an object that has key:value pairs

## Handling GET requests
  - can use the .find() function for the array
  - syntax:
```courses.find(c => c.id == parseInt(req.params.id));```
  - the c is a variable, c.id returns its id (an int), and the rest changes req.params.id from string to int to compare
  - for now instead of using var, use either ```let``` (flexible) or ```const``` (cannot be changed)
  - 404 error means that the object does not exist on the server when it was requested
  - can see the 404 error if you inspect code and look on the network tab

## Handling POST requests
  - this is how to create a new id or endpoint
  - post is similar to get format, the route is where you want to create the new one
```app.post('/api/courses', (req, res)...)```
  - need to enable parsing of JSON objects because by default it isn't enabled in express
```app.use(express.json());```
  - usually you return the new object you created to the user

## Postman
  - tool on Chrome that is used to run HTTP requests
  - make sure you are running the node app.js
  - when you post the request in the Postman, express runs the app.post() and adds the object
  - refresh to show the courses array with the new post
  - "Status 200 OK" means request was handled successfully

## Input validation
  - never trust what the client sends you
  - have an if statement to see if it exists
  - joi on npm is a package that makes input validation easier
  - require this Joi class at the beginning
  - a schema defines the shape and properties of the object, like int or string or email
  - require that the object that gets posted by using a schema
  - this is for the earlier version
```const schema = {name: Joi.string().min(3).required()}```
  - to actually validate this, use Joi.validate(req.body, schema)
  - for the current version
```const schema = Joi.object({name: Joi.string().min(3).required()});```
```const result = schema.validate(req.body);```
  - if there is an error, we can check that value

## Handling PUT requests
  - need to look up the course in the array (like in the GET request)
  - validate that it has the right properties (like in the POST request)
  - then set and return the changed value
```course.name = req.body.name;```
  - can define a function for the validation of the properties so you don't have to keep duplicating every time
  - the object destructuring feature in JavaScript
  - when declaring a variable or constant, instead of giving it a name, you can just use the property in braces
```const {error} = validateCourse(req.body); ```

## Handling DELETE requests
  - need to look up the course (like in the GET request
  - then, delete this object
  - get the index of this object in the courses array by doing ```courses.indexOf(course)```\
  - to actually delete, use the splice function to delete 1 of the objects
```courses.splice(index, 1);```
  - to clean up the code when you have an error, just return res.send() statement
