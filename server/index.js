const express = require('express');
const app = express();

const cors = require('cors');
const courses = require('./data/courses.json');
const blog = require('./data/blog.json');

app.use(cors());

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/blog', (req, res) => {
  res.json(blog);
});

app.get('/details/:courseId', (req, res) => {
  const courseDetails = courses.find(
    course => course.id === req.params.courseId
  );

  res.json(courseDetails);
});

app.get('/featured', (req, res) => {
  const featuredCourses = courses.filter(course => course.isFeatured);

  res.json(featuredCourses);
});

app.get('/bestseller', (req, res) => {
  const bestsellerCourses = courses.filter(course => course.isBestSeller);

  res.json(bestsellerCourses);
});

app.get('/details/:courseId', (req, res) => {
  const courseDetails = courses.find(
    course => course.id === req.params.courseId
  );

  res.json(courseDetails);
});

app.listen(3000);
