
const { Error } = require('mongoose')
const pool = require('../db')


// GET ALL TASKS

const getAllTasks = async (req, res, next) => {

    try {
        const allTasks = await pool.query('SELECT * FROM task')

        console.log(allTasks)
        res.json(allTasks.rows)

    } catch (error) {
        next(error)
    }

}

// GET SINGLE TASK

const getTask = async (req, res, next) => {

    try {
        const { id } = req.params

        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id])

        if (result.rows.length === 0)

            return res.status(404).json({ message: "Task not found" })


        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

// POST CREATE TASK

const createTask = async (req, res, next) => {

    const { title, description } = req.body

    console.log(title, description)

    try {
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description])

        res.json(result.rows[0])

    } catch (error) {
        next(error)
    };

}

// DELETE SINGLE TASK

const deleteTask = async (req, res, next) => {

    try {

        const { id } = req.params

        const result = await pool.query('DELETE FROM task WHERE id = $1', [id])

        if (result.rowCount === 0)

            return res.status(404).json({ message: "Task not found" })

        return res.sendStatus(204)

    } catch (error) {
        next(error)
    }
}

// PUT UPDATE TASK

const updateTask = async (req, res, next) => {

    try {

        const { id } = req.params
        const { title, description } = req.body

        const result = await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id])

        if (result.rows.length === 0)

            return res.status(404).json({ message: "task not found" })

        return res.json(result.rows[0])

    } catch (error) {
        next(error)
    }

}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}