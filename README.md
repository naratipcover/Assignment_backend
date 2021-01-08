# Assignment API of student and university

## About to Assignment
 API use for university/student. Universities can have student more than 1 people and Students can have unversity more than 1 university.
 
### Example 

* Student A study B.A. at KMUTT and ที่ M.A. at KU
* Student B Studet B.A. degree at CU and M.A. at KU

## Built With

### ใช้ Framework Adonis JS
    https://adonisjs.com/

### Use data with MariaDB

### Prerequisites

Please install the following:
* Adonis JS
* Docker

### Run with serve adonis js
    adonis serve --dev

### Run with Docker
    docker compose up -d


## Example Student

### Show every students

#### REQUEST 
    medthod: GET api/v1/student
#### RESPONSE
    "status": 200,
    "data": [
        {
            "id": 1,
            "first_name": "Hon",
            "last_name": "Suoo",
            "created_at": "2021-01-07 18:16:49",
            "updated_at": "2021-01-07 18:16:49"
        },
         {
            "id": 2,
            "first_name": "Nara",
            "last_name": "Supa",
            "created_at": "2021-01-07 18:17:28",
            "updated_at": "2021-01-07 18:17:28"
        }
     ]
    
### Show student by id

#### REQUEST
    medthod: GET api/v1/student/:id
    
#### RESPONSE
    "Student": 200,
    "data": [
        {
            "id": 2,
            "first_name": "Nara",
            "last_name": "Supa",
            "created_at": "2021-01-07 18:17:28",
            "updated_at": "2021-01-07 18:17:28",
            "university": [
                {
                    "id": 2,
                    "name_university": "CMU",
                    "education_level": "ป.โท",
                    "created_at": "2021-01-07 15:34:17",
                    "updated_at": "2021-01-07 15:34:17",
                    "pivot": {
                        "university_id": 2,
                        "student_id": 2
                    }
                }
            ]
        }
    ]
    
### Create student infomation requirement

#### REQUEST
    medthod: POST api/v1/student
    
 ##### Store raw data
    {
      "first_name" : "Jon",
      "last_name" : "Sun",
      "name_university" : "CMU",
      "education_level" : "ป.ตรี"
    }
    
#### RESPONSE
    {
      "status": 200,
      "data": {
          "first_name": "Jon",
          "last_name": "Sun",
          "created_at": "2021-01-08 00:25:51",
          "updated_at": "2021-01-08 00:25:51",
          "id": 3
      }
    }
    
### Update student infomation

#### REQUEST
    medthod: PUT api/v1/student/:id
    
 ##### Store raw data
    {
      "first_name" : "PP",
      "last_name" : "JJ",
    }
    
#### RESPONSE

    "status": 200,
    "data": [
        {
            "id": 3,
            "first_name": "PP",
            "last_name": "JJ",
            "created_at": "2021-01-07 18:17:46",
            "updated_at": "2021-01-08 00:43:43"
        }
    ]
   
### Delete student infomation by id
#### REQUEST
    medthod: DELETE api/v1/student/:id
#### RESPONSE 
    
    "status": "200 deleted successful"


## Example University

## Show every univerties

#### REQUEST 
    medthod: GET api/v1/university
    
#### RESPONSE
    "status": 200,
    "data": [
        {
            "id": 1,
            "name_university": "CMU",
            "education_level": "ป.โท",
            "created_at": "2021-01-07 18:16:49",
            "updated_at": "2021-01-07 18:16:49"
        },
         {
            "id": 2,
            "name_university": "SPU",
            "education_level": "ป.ตรี",
            "created_at": "2021-01-07 18:17:28",
            "updated_at": "2021-01-07 18:17:28"
        }
     ]
    
### Show university by id

#### REQUEST
    medthod: GET api/v1/university/:id
    
#### RESPONSE
    "status": 200,
    "data": [
        {
            "id": 1,
            "name_university": "CMU",
            "education_level": "ป.โท",
            "created_at": "2021-01-07 15:34:07",
            "updated_at": "2021-01-07 15:34:07",
            "students": [
                {
                    "id": 6,
                    "first_name": "Nara,
                    "last_name": "Supa",
                    "created_at": "2021-01-08 00:15:18",
                    "updated_at": "2021-01-08 00:15:18",
                    "pivot": {
                        "student_id": 2,
                        "university_id": 1
                    }
                }
            ]
        }
    ]
    
### Create university infomation requirement

#### REQUEST
    medthod: POST api/v1/university
    
 ##### Store raw data
    {
      "name_university" : "CMU",
      "education_level" : "ป.เอก"
    }
    
#### RESPONSE
    {
      "status": 200,
      "data": {
          "name_university": "CMU",
          "edcation": "ป.เอก",
          "created_at": "2021-01-08 00:25:51",
          "updated_at": "2021-01-08 00:25:51",
          "id": 3
      }
    }
    
### Update university infomation

#### REQUEST
    medthod: PUT api/v1/university/:id
    
 ##### Store raw data
    {
      "name_university" : "SPU",
      "education_level" : "ป.ตรี"
    }
    
#### RESPONSE

    "status": 200,
    "data": [
        {
            "id": 3,
            "name_university" : "SPU",
            "education_level" : "ป.ตรี"
            "created_at": "2021-01-07 18:17:46",
            "updated_at": "2021-01-08 00:43:43"
        }
    ]
   
### Delete university infomation by id
#### REQUEST
    medthod: DELETE api/v1/university/:id
#### RESPONSE 
    
    "status": "200 deleted successful"
