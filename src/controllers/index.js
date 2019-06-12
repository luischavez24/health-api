import ExercisesController from './exercises.controller'
import BenefitsController from './benefits.controller';

function createControllers(router) {
  ExercisesController.createRoutes(router);
  BenefitsController.createRoutes(router);
}

export default {
  createControllers
}