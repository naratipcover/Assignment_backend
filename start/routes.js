'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {

    // Router University
    Route.get('/university', 'UniversityController.index')
    Route.get('/university/:id', 'UniversityController.show')
    Route.post('/university', 'UniversityController.store')
    Route.put('/university/:id', 'UniversityController.update')
    Route.patch( '/university/:id', 'UniversityController.update')
    Route.delete('/university/:id', 'UniversityController.destroy')

    // Router Student
    Route.get('/student','StudentController.index')
    Route.get('/student/:id','StudentController.show')
    Route.post('/student','StudentController.store')
    Route.put('/student/:id','StudentController.update')
    Route.patch('/student/:id','StudentController.update')
    Route.delete('/student/:id','StudentController.destroy')

  }).prefix('api/v1')
