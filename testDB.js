const Sequelize = require('sequelize')

function testDB() {
  console.log('Attempting to connect to DB')
  // const db = new Sequelize('postgres://localhost:5432/tabula-rasa')
  const db = new Sequelize({
    host: 'localhost',
    database: 'tabula-rasa',
    port: 5432,
    dialect: 'postgres'
  })

  console.log('Testing db connection')
  db.query('SELECT 1+1 AS result').then(data => {
    // Results will be an empty array and metadata will contain the number of affected rows.
    console.log(data)
  })
}

function hello() {
  console.log('We have waited')
}

testDB()

setTimeout(hello, 30000)
