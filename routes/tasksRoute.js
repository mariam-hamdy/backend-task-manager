const express = require('express')
const router = express.Router()

const { 
    getAllTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask 
} = require('../controllers/tasksController')

//router.get('/', getAllTasks)
router.route('/').get(getAllTasks).post(addTask)

router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)
    

module.exports = router