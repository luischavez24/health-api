import exercisesModel from '../models/exercises.model';

class ExercisesController {
  async findExercises(request, response) {
    
    const { skip = 0, limit = 20 } = request.query;
    
    console.log({ skip, limit })

    try {
      const exercises = await exercisesModel.find()
        .limit(parseInt(limit))
        .skip(parseInt(skip));

      response.status(200)
        .json({
          status: 'ok',
          results: exercises
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