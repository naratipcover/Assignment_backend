'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    static get primaryKey () {
        return 'id'
    }
    studentUniversity () {
        return this.belongsToMany('App/Models/StudentUniversity').pivotTable('student_universities')
    }
}

module.exports = Student
