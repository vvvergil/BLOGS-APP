const express = require("express")
const BlogCtrl = require("../controllers/blog-ctrl")
const router = express.Router()

// console.log(BlogCtrl);
// router.get("/blog",()=>{
//     console.log(11)
// })
router.post('/blog',BlogCtrl.createBlog)
router.put('/blog/:id',BlogCtrl.updateBlog)
router.delete('/blog/:id',BlogCtrl.deleteBlog)
router.get('/blog',BlogCtrl.getBlog)
router.get('/blog/:id',BlogCtrl.getBlogById)

module.exports= router