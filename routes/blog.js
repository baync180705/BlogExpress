//importing required node modules 
const express = require('express');
const path = require('path');
const blogs = require('../data/blogs')

//instantiating express.Router
const router = express.Router();

//routes for the blog app
router.get('/',(req,res)=>{
    res.render('home');

});
router.get('/blogs',(req,res)=>{
    blogs.map((blog)=>{
        console.log(blog.title);
    })
    res.render('blog_home', {blogs : blogs});
});
router.get('/blogs/:slug',(req,res)=>{
    let myBlog= blogs.filter((blog)=>(
        blog.slug == req.params.slug
    ))
    console.log(myBlog);
    res.render('blog_page',{
        title: myBlog[0].title,
        description: myBlog[0].description,
        author: myBlog[0].author
    });
});

//export routers
module.exports = router;