const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  skills: {
    frontend: {
      type: [String],
      required: true
    },
    backend: {
      type: [String],
      required: true
    },
    tools: {
      type: [String],
      required: true
    },
    knowledge: {
      type: [String],
      required: true
    }
  },
  bio: {
    type: String,
    required: true
  },
  contactInfo: {
    github: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  profileImageId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('profile', profileSchema);
