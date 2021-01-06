'use strict'

const University = require("../../Models/University")

    const Student = use('App/Models/Student')

class StudentController {

    async index () {
        const Students = await Student.query().fetch()
        return { status:200, error: undefined, data: Students}
    }
    
    async show ({request}) {
        const { id } = request.params
        const Students = await Student.query().where('id', id).fetch()
        return {Student:200, error: undefined, data: Students}
    }

    async store ({request}){
        const data = request.body
        const Students = await Student.create(data)
        return { status: 200,error: undefined, data: Students }

    }

    async update ({request}) {
        const { id } = request.params
        const data = request.body
        const Students = await Student.query().where('id', id).update(data)
        const Stu = await Student.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: Stu}
    }

    async destroy ({request}) {
        const {id} = request.params
        await Student.query().where('id', id).delete()
        return {status: '200 deleted successful'}

    }

}

module.exports = StudentController
