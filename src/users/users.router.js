const express = require('express')

const router = require('express').Router()

const usersServices = require('./users.services')

router.get('/users', usersServices.getUsersController)
router.post('/users', usersServices.createUserController)
router.get('/users/:id', usersServices.getUserByIdController)
router.patch('/users/:id', usersServices.patchUserByController)
router.put('/users/:id', usersServices.putUserByIdController)
router.delete('/users/:id', usersServices.deleteUserByIdController)


module.exports = router