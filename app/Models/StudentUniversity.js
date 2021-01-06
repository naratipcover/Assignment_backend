'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StudentUniversity extends Model {
    static get primaryKey () {
        return 'id'
    }
    students () {
        return this.belongsTo('App/Models/Student')
    }

    universities () {
        return this.belongsTo('App/Models/University')
    }
}

module.exports = StudentUniversity
