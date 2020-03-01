const user = require('express').Router();
const userControllers = require('../controllers/userControllers');

user.get('/read',userControllers.getUsers);
user.post('/create',userControllers.postUser);
user.post('/comment',userControllers.postComment);
user.put('/update',userControllers.editUser);
user.delete('/delete',userControllers.deleteUser);


module.exports = user;