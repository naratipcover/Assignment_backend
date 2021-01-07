'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class University extends Model {
    static get primaryKey () {
        return 'id'
    }
    studentUniversity () {
        return this.belongsToMany('App/Models/StudentUniversity').pivotTable('student_universities')
    }
}

module.exports = University
