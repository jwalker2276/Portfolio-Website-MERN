const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tech: {
    frontend: {
      type: [String],
      required: false
    },
    backend: {
      type: [String],
      required: false
    },
    tools: {
      type: [String],
      required: false
    }
  },
  imageIds: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('project', projectSchema);
