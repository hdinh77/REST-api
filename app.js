const express = require('express');
const app = express();

const Joi = require('joi');

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found'); // 404 error (object not found)
    res.send(course);
});

/*
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});
*/

app.post('/api/courses', (req, res) => {
    // older version
    /*
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    */

    // current version
    // or u can use ---> const result = validateCourse(req.body);
    const {error} = validateCourse(req.body);
    console.log(result);

    if(error) return res.status(400).send(error.details[0].message);
        

    // not using Joi
    /*
    if(!req.body.name || req.body.name.length < 3) {
        // 400 bad request
        res.status(400).send("Name is required and should be minimum 3 characters");
        return;
    }*/
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);       // return this new course object to the user
});

app.put('/api/courses/:id', (req, res) => {
    // look up the course, if it doesn't exist return 404
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found'); // 404 error (object not found)

    // validate
    // if invalid, return 400
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
        

    // update the course and return
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // lookup the course
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');

    // then delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);


});

function validateCourse(course) {
    const schema = Joi.object({name: Joi.string().min(3).required()});
    return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
