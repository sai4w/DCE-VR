import mongoose from "mongoose";

const blog = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const BlogModel = mongoose.model("Blog", blog);
export const getBlogs = () => BlogModel.find();
export const getBlogById = (id: string) => BlogModel.findById(id);
export const createBlog = (values: Record<string, any>) =>
  new BlogModel(values).save().then((blog) => blog.toObject());
export const deleteBlogById = (id: string) => BlogModel.findByIdAndDelete(id);
