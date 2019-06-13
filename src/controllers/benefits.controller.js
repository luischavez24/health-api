import benefitModel from '../models/benefits.model';

class BenefitsController {
  async findBenefits(request, response) {
    const { skip = 0, limit = 20 } = request.query;

    try {
      const benefits = await benefitModel.find()
        .skip(parseInt(skip))
        .limit(parseInt(limit));

      response.status(200)
        .json({
          status: 'ok',
          results: benefits
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