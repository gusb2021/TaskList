const getAllTasks = async (req, res) => {
    res.send('retrieving a list of tasks')
}

const getTask = async (req, res) => {
    res.send('retrieving a single task')
}

const createTask = async (req, res) => {
    res.send('creating a task')
}

const deleteTask = async (req, res) => {
    res.send('deleting a task')
}

const updateTask = async (req, res) => {
    res.send('updating a task')
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}