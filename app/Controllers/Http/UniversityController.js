'use strict'

const University = use('App/Models/University')

class UniversityController {

    async index (){
        const Universities =  await University.query().fetch()
        return {status: 200, error: undefined, data: Universities }
    }

    async show ({request}){
        const { id } = request.params
        const Universities = await University.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: Universities}
    }

    async store ({request}){
        const data = request.body
        const  Universities = await University.create(data)
        return {status: 200, error:undefined, data: Universities}
    }

    async update ({request}) {
        const {id} = request.params
        const data = request.body
        const Universities = await University.query().where('id', id).update(data)
        const Uni = await University.query().where('id', id).fetch()
        return {status: 200, error: undefined, data: Uni}
    }

    async destroy ({request}) {
        const {id}  = request.params
        await University.query().where('id', id).delete()
        return {status: '200 deleted successful'}
    }
    
}

module.exports = UniversityController
