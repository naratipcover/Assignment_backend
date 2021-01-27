'use strict'
    const Student = use('App/Models/Student')
    const University = use('App/Models/University')
    const StudentUniversity = use('App/Models/StudentUniversity')
    const StudentValidator = require('../../../service/StudentValidator')

class StudentController {

    async index () {
        const students = await Student.query().fetch()
        return { status:200, error: undefined, data: students}
    }
    
    async show ({request}) {
        const { id } = request.params
        const students = await Student.query().with('university').where('id',id).fetch()
        return {Student:200, error: undefined, data: students}
    }

    async store ({request}){
        const {first_name, last_name,name_university,education_level} = request.body

        const  validatorData = await StudentValidator(request.body)

        if (validatorData.error)
        return {status: 422, error: validatorData.error, data: undefined}

        const students = await Student.create({first_name, last_name})
        const universityData = await University.query().where({name_university, education_level}).fetch().then(response => JSON.parse(JSON.stringify(response)))
        const testUniversity = universityData.map(item => item.id)
        let testId = await Student.query().count('id as id').then(response => JSON.parse(JSON.stringify(response[0])))
        const student_university = await StudentUniversity.create({student_id: testId.id,university_id: testUniversity[0]})

        return { status: 200,error: undefined, data: students }

    }

    async update ({request}) {
        const { id } = request.params
        const data = request.body
        const students = await Student.query().where('id', id).update(data)
        const Stu = await Student.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: Stu}
    }

    async destroy ({request}) {
        const {id} = request.params
        const student = await Student.query().where('id', id).delete()
        
        if(student) {
            return {status: 200 , error: undefined, data: { massage: ' delete success' }}
        }
        else {
            return {status: 200 , error: undefined, data: { massage: ` path ${id}  not found` }}
        }

    }

}

module.exports = StudentController
