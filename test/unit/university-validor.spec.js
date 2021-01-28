'use strict'

const { test } = use('Test/Suite')('University Validor')
const UniversityValidator = require('../../service/UniversityValidator')

test('should return error with incorrect data that required from user validator', async ({ assert }) => {
  const data = {
      name_university: '',
      education_level: ''
  }
  const university = await UniversityValidator(data)
  assert.isOk(university.error,'university error')
})
