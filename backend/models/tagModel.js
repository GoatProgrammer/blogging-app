import mongoose from 'mongoose'

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  post_count: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Tag = mongoose.model('Tag', tagSchema)

export default Tag