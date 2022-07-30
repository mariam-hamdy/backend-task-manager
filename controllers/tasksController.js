const getAllTasks = (req, res) => {
    res.send('get all tasks')
}
const getTask = (req, res) => {
    res.send('get one task')
}
const addTask = (req, res) => {
    res.send('add new task')
}
const deleteTask = (req, res) => {
    res.send('delete one task')
}
const updateTask = (req, res) => {
    res.send(req.params)
}
module.exports = {
    getAllTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask
}