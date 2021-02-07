import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },
  post_title: {
    type: String,
    trim: true,
    min: 3,
    max: 160,
    required: true
  },
  post_slug: {
    type: String,
    unique: true,
    index: true
  },
  post_excerpt: {
    type: String,
    max: 1000
  },
  post_content: {
    type: {},
    required: true
  },
  post_thumbnail: {
    data: Buffer,
    contentType: String
  },
  post_tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
    require: true
  }],
  post_categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true
  }],
  post_meta_title: {
    type: String
  },
  post_meta_description: {
    type: String
  }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export default Post