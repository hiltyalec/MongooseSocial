// IMPORT EXPRESS ROUTER
const router = require('express').Router();

//IMPORT USER CONTROLLER FUNCTIONS FROM THE USERCONTROLLER.JS FILE
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUserById,
  addFriend,
  deleteFriend,
  
  // CHECK REMOVE FRIEND,
} = require('../../controllers/userController');

// GET AND POST ALL USERS
//ROUTE: /api/users
router.route('/').get(getAllUsers).post(createUser);

// GET USER BY ID, UPDATE USER BY ID, AND DELETE USER BY ID
// ROUTE: /api/users/:userId
router.route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUserById);

// POST AND DELETE FRIENDS
// ROUTE: /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// Export the router
module.exports = router;