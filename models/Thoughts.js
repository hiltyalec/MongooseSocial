// IMPORT MONGOOSE AND REACTIONSCHEMA FROM REACTIONS.JS
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

//THIS IS THE SCHEMA FOR THOUGHTS
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

//THIS IS A VIRTUAL TO COUNT THE NUMBER OF REACTIONS
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//THIS IS A MODEL FOR THOUGHTS USING THE SCHEMA ABOVE
const Thought = model('Thought', thoughtSchema)

//EXPORT MODULE
module.exports = Thought

