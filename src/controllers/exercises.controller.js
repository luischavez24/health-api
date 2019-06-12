import exercisesModel from '../models/exercises.model';

class ExercisesController {
  async findExercises(request, response) {
    
    const { skip , limit } = request.query;

    try {
      let exercisesFinder = exercisesModel.find();
      
      if(limit) {
        exercisesFinder = exercisesFinder.limit(parseInt(limit));
      }
      
      if(skip) {
        exercisesFinder = exercisesFinder.skip(parseInt(skip));
      }

      response.status(200)
        .json({
          status: 'ok',
          results: await exercisesFinder
        });
        
    } catch(err) {
      response.json({
        status: 'error',
        message: err
      })
    }
  }
  
  async addExercise(request, response) {
    const { body } = request;
    try {
      const createdDocs = await exercisesModel.create(body);
      response.status(201).json({
        status: 'created',
        created: createdDocs
      });  
    } catch (err) {
      response.status(404).json({
        status: 'error',
        message: err
      })
    }
  }
}

function createRoutes(routes) {
  const exercisesController = new ExercisesController();
  routes.route('/exercises')
    .get(exercisesController.findExercises)
    .post(exercisesController.addExercise);
}

export default {
  createRoutes
}