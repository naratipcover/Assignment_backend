'use strict'

const University = use('App/Models/University')

// function withReference(data, references){
//     if(references){
//         const extre
//     }

// }

class UniversityController {

    async index ({request}){
        const {references} = request.qs
        const Universities =  await University.query().fetch()
        return {status: 200, error: undefined, data: Universities }
    }

    async show ({request}){
        const { id } = request.params
        const { references }  = request.qs
        const Universities = await University.query().where({id : id}).fetch()
        return {status: 200, error: undefined, data: Universities}
    }
}

module.exports = UniversityController
