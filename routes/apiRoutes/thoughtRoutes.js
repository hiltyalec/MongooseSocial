// IMPORT EXPRESS ROUTER 
const router = require('express').Router();

// IMPORT THOUGHT CONTROLLER FUNCTIONS FROM THE THOUGHTCONTROLLER.JS FILE
const {
    getAllThoughts,
    getThoughts,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// GET AND POST ALL THOUGHTS
// ROUTE: /api/thoughts 
router.route('/').get(getAllThoughts).post(createThought);

// GET, PUT, AND DELETE A SINGLE THOUGHT BY ITS _id
// ROUTE: /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThoughts)
    .put(updateThought)
    .delete(deleteThought);

// POST A REACTION TO A THOUGHT
// ROUTE: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE A REACTION TO A THOUGHT
// ROUTE: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// EXPORT THE ROUTER
module.exports = router;