'use strict'

const { test } = use('Test/Suite')('Student Validator')
const StudentValidator =  require('../../service/UniversityValidator')

test('should return error with incorrect data that required from user validator', async ({ assert }) => {
  const data = {
    first_name: 'naratip',
    last_name: '',
    name_university: 'CMU',
    education_level: ''
  }
  const student = await StudentValidator(data)
  assert.isOk(student.error,'Student error')

})
