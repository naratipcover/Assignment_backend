'use strict'

const University = use('App/Models/University')

class UniversityController {

    async index (){
        const universities =  await University.query().fetch()
        return {status: 200, error: undefined, data: universities }
    }

    async show ({request}){
        const { id } = request.params
        const universities = await University.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: universities}
    }

    async store ({request}){
        const data = request.body
        const  universities = await University.create(data)
        return {status: 200, error:undefined, data: universities}
    }

    async update ({request}) {
        const {id} = request.params
        const data = request.body
        const universities = await University.query().where('id', id).update(data)
        const uni = await University.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: uni}
    }

    async destroy ({request}) {
        const {id}  = request.params
        await University.query().where('id', id).delete()
        return {status: '200 deleted successful'}
    }
    
}

module.exports = UniversityController
