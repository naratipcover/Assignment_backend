'use strict'

const StudentUniversity = use('App/Models/StudentUniversity')

class StudentUniversityController {
    async index () {
        const studentUniversity = await StudentUniversity.query().fetch()
        return { status:200, error: undefined, data: studentUniversity}
    }
    
    async show ({request}) {
        const { id } = request.params
        const studentUniversity = await StudentUniversity.query().where('id', id).fetch()
        return {Student:200, error: undefined, data: studentUniversity}
    }

    async store ({request}){
        const data = request.body
        const studentUniversity = await StudentUniversity.create(data)
        return { status: 200,error: undefined, data: studentUniversity }

    }

    async update ({request}) {
        const { id } = request.params
        const data = request.body
        const studentUniversity = await StudentUniversity.query().where('id', id).update(data)
        const Su = await Student.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: Su}
    }

    async destroy ({request}) {
        const {id} = request.params
        await StudentUniversity.query().where('id', id).delete()
        return {status: '200 deleted successful'}

    }
}

module.exports = StudentUniversityController
