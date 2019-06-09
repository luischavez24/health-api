import ExercisesController from './exercises.controller'

function createControllers(router) {
  ExercisesController.createRoutes(router);
}

export default {
  createControllers
}