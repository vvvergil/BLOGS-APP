const Blog = require('../models/blog-model')

createBlog = (req,res) => {
    const body = req.body

    if(!body){
        return res.this.status(400).json({
            success: false,
            error: "You must provide a blog",
        })
    }

    const blog = new Blog(body)

    if(!blog){
        return res.status(400).json({
            success:false,
            error:err,
        })
    }

    blog.save().then(()=>{
        return res.status(201).json({
            success:true,
            id:blog._id,
            message:"Blog created"
        })
    })
}

updateBlog = async (req,res) =>{
    const body = req.body
    if(!body){
        return res.this.status(400).json({
            success:false,
            error: "Blog not found!",
        })
    }

    const blog=await Blog.findById(req.params.id);
    blog.title = body.title;
    blog.time = body.time
    blog.description = body.description
    blog.content = body.content
    blog.save().then(()=>{
        return res.status(200).json({
            success:true,
            id:blog._id,
            message:"Blog updated!"
        })
    }).catch(error=>{
        return res.status(400).json({
            error,
            message:"Blog not update!"
        })
    })
}

deleteBlog = async (req,res) =>{
    await Blog.findOneAndDelete({_id:req.params.id}).then((blog)=>{
        if(!blog){
            return res.status(404).json({
                success:false,
                error:"Blog not found"
            })
        }
        return res.status(200).json({success:true,data:blog})
    }).catch(err=>console.log(err));
}

getBlogById = async (req,res) =>{
    await Blog.findById(req.params.id).then((blog,err)=>{
        if(!blog){
            return res.status(400).json({success:false,error:"blog not found"})
        }
        return res.status(200).json({
            success:true,
            data:blog
        })
    }).catch(err => console.log(err))
}

getBlog = async (req,res) => {
    await Blog.find({}).then((blog)=>{
        // if(err){
        //     return res.status(400).json({
        //         success:false,
        //         error:err
        //     })
        // }
        if(!blog.length){
            return res.status(404).json({
                success:false,
                error:"Blog not found"
            })
        }
        return res.status(200).json({
            success:true,
            data:blog
        })
    }).catch(err=>console.log(err))
}

module.exports={
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
    getBlog
}