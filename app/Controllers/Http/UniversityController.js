'use strict'

const University = use('App/Models/University')

function withReference(data, references){
    if(references){
        const extractedReferences = references.split(",")
        data.with(extractedReferences)
    }
    return data
}

class UniversityController {

    async index ({request}){
        const {references} = request.qs
        const Universities =  await University.query().fetch()
        const data = withReference(Universities,references)
        return {status: 200, error: undefined, data: data }
    }

    async show ({request}){
        const { id } = request.params
        const { references }  = request.qs
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
        console.log(Universities)
        return {status: 200, error: undefined, data: Universities}
    }
    async destroy ({request}) {
        const {id}  = request.params
        const Universities = await University.query().where('id', id).delete()
        return {status: '200 deleted successful'}
    }
    
}

module.exports = UniversityController
