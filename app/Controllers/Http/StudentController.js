'use strict'

    const Student = use('App/Models/Student')
    const University = use('App/Models/University')
    const StudentUniversity = use('App/Models/StudentUniversity')

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
        await Student.query().where('id', id).delete()
        return {status: '200 deleted successful'}

    }

}

module.exports = StudentController
