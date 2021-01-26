const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: [100, 'A title length must be less than 100'],
      required: [true, 'A post must have a title'],
      unique: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A post must have a cover image'],
    },
    language: {
      type: String,
      default: 'TR',
      enum: ['TR', 'EN'],
    },
    tags: [String],
    post: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    publishedAt: {
      type: Date
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
