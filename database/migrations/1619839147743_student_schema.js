'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('id')
      table.string('name', 30).notNullable()     
      table.string('surname', 30).notNullable()  
      table.timestamps()

    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
