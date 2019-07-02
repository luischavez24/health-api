import benefitModel from '../models/benefits.model';
import benefitPurchaseModel from '../models/benefitPurchase.model';
import mongoose from 'mongoose';
import _ from 'lodash';
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
      response.status(400)
        .json({
          status: 'error',
          message: err
        })
    }
  }

  async findUsedBenefits(request, response) {
    const { skip = 0, limit = 20 } = request.query;
    const { email } = request.params;
    
    try {
      const results = await benefitPurchaseModel.aggregate([
        { 
          $match: { email } 
        },
        {
          $lookup: {
            from: 'benefit',
            localField: 'benefit',
            foreignField: '_id',
            as: 'benefit'
          }
        },
        {
          $unwind: "$benefit"
        }
      ])
      .skip(parseInt(skip))
      .limit(parseInt(limit));

      response.status(200).json({ status: 'ok', results });
        
    } catch(err) {
      response.status(400).json({ status: 'error', message: { err } })
    }
  }


  async purchaseBenefit(request, response) {
    const { benefit, email } = request.body;
    try {
      const insertDocuments = await benefitPurchaseModel.insertMany([
        {
          benefit: mongoose.Types.ObjectId(benefit),
          email,
          purchaseDate: new Date(),
        }
      ])
      response.status(200)
        .json({
          status: 'ok',
          insertDocuments
        });
    } catch(err) {
      response.status(400)
        .json({
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
  routes.route('/benefits/:email')
    .get(benefitsController.findUsedBenefits);
  routes.route('/benefits/purchase')
    .post(benefitsController.purchaseBenefit);
}

export default {
  createRoutes
}