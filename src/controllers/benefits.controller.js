import benefitModel from '../models/exercises.model';

class BenefitsController {
  async findBenefits(request, response) {
    const { skip , limit } = request.query;

    try {
      let benefitsFinder = benefitModel.find();
      
      if(limit) {
        benefitsFinder = benefitsFinder.limit(parseInt(limit));
      }
      
      if(skip) {
        benefitsFinder = benefitsFinder.skip(parseInt(skip));
      }

      response.status(200)
        .json({
          status: 'ok',
          results: await benefitsFinder
        });
        
    } catch(err) {
      response.json({
        status: 'error',
        message: err
      })
    }
  }
}

function createRoutes(routes) {
  const benefitsController = new BenefitsController();
  routes.route('/benefits')
    .get(benefitsController.findBenefits);
}

export default {
  createRoutes
}