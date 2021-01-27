const Validator = use('Validator')

module.exports = async function StudentValidator ( data ) {
    if (typeof data !== 'object') throw new Error()
    const {first_name, last_name, name_university, education_level } = data 
    const  rules = {
        first_name: 'required',
        last_name: 'required',
        name_university: 'required',
        education_level: 'required'
    }
    const validation = await Validator.validateAll({
       first_name, last_name, name_university, education_level
    }, rules)
    return{
        error: validation.messages()
    }
} 