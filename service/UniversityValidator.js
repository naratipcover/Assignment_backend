const Validator = use('Validator')

module.exports = async function UniversityValidator ( data ) {
    if (typeof data !== 'object') throw new Error()
    const {name_university, education_level} = data 
    const  rules = {
        name_university: 'required',
        education_level: 'required'
    }
    const validation = await Validator.validateAll({
        name_university, education_level
    }, rules)
    return{
        error: validation.messages()
    }
} 