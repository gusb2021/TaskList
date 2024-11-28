const { Pool } = require('pg')

const db = new Pool({
    user: "gustavo",
    password: "",
    host: "localhost",
    port: "5432",
    database:"tasklist"
})

module.exports = db 