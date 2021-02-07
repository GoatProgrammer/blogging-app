import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Post from '../models/postModel.js'

// @desc    Gets all of the post 
// @route   GET /api/post
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})

  res.json(posts)
})

// @desc    Get post details
// @route   GET /api/post/:id
// @access  Public
const getPostDetails = asyncHandler(async (req, res) => {
  // ref to the tag model implemented
})

// @desc    Adds a new post 
// @route   Post /api/post/
// @access  Private
const addPost = asyncHandler(async (req, res) => {

})

// @desc    Edit a post 
// @route   Put /api/post/edit/:id
// @access  Private
const editPost = asyncHandler(async (req, res) => {

})

// @desc    Delete a post 
// @route   Put /api/post/delete/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {

})

export {
  getPosts,
  getPostDetails,
  addPost,
  editPost,
  deletePost
}