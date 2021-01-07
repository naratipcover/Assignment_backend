'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('id')
      table.string('first_name', 30).notNullable()     
      table.string('last_name', 30).notNullable()  
      table.timestamps()

    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
