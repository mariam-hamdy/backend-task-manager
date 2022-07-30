const express = require('express')
const app = express()
const tasks = require('./routes/tasksRoute')


//app.use(express.static('./public'))
/**routes
 * /api/v1/tasks => GET all tasks
 * /api/v1/tasks/  => POST new task
 * /api/v1/tasks/:id => GET details of one task by id params
 * /api/v1/tasks/:id  => DELETE task
 * /api/v1/tasks/:id  => PATCH/PUT  update task
 * CRUD => Create Read Update Destroy/Delete
 */
app.use(express.json())

app.use('/api/v1/tasks', tasks);


const port = 5000
app.listen(port, () => {
    console.log('the server is ON')
})