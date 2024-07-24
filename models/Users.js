//IMPORT MONGOOSE AND SCHEMA FROM MONGOOSE
const { Schema, model, Types } = require('mongoose');

// THIS IS THE SCHEMA FOR USERS
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    //REGEX VALIDATION FOR EMAIL
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        }
      }
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// THIS IS A VIRTUAL TO COUNT THE NUMBER OF FRIENDS A USER HAS
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// THIS IS A MODEL FOR USERS USING THE SCHEMA ABOVE
const User = model('User', userSchema)

// EXPORT MODULE
module.exports = User
