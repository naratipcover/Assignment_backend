'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentUniversitySchema extends Schema {
  up () {
    this.create('student_universities', (table) => {
      table.increments()
      table.integer('university_id').unsigned()
      table.integer('student_id').unsigned()
      table.timestamps()

      table
      .foreign('university_id')
      .references('universities.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      table
      .foreign('student_id')
      .references('students.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('student_universities')
  }
}

module.exports = StudentUniversitySchema
