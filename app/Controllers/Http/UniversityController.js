'use strict'

const University = use('App/Models/University')
const UniversityValidator = require('../../../service/UniversityValidator')

class UniversityController {

    async index (){
        const universities =  await University.query().fetch()
        return {status: 200, error: undefined, data: universities }
    }

    async show ({request}){
        const { id } = request.params
        const universities = await University.query().with('students').where({id:id}).fetch()
        return {status: 200, error: undefined, data: universities}
    }

    async store ({request}){
        const data = request.body

        const  validatorData = await UniversityValidator(request.body)
        if (validatorData.error)
        return {status: 422, error: validatorData.error, data: undefined}

        const  universities = await University.create(data)
        return {status: 200, error:undefined, data: universities}
    }

    async update ({request}) {
        const {id} = request.params
        const data = request.body
        await University.query().where('id', id).update(data)
        const uni = await University.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: uni}
    }

    async destroy ({request}) {
        const {id}  = request.params
        const universities = await University.query().where('id', id).delete()
   
        if(universities) {
            return {status: 200 , error: undefined, data: { massage: ' delete success' }}
        }
        else {
            return {status: 200 , error: undefined, data: { massage: ` path ${id}  not found` }}
        }
    }
}
    

module.exports = UniversityController
