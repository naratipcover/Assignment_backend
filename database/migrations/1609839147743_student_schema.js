'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('id')
      table.string('name', 30)
      table.string('surname', 30)
      table.integer('university_id').unsigned()
      table.timestamps()

      table
        .foreign('university_id')
        .references('universities.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
