import {
    Request,
    Response,
    NextFunction
} from 'express';

import Joi, { ValidationError, ValidationResult }  from 'joi';
import {
    NAME,
    DESCRIPTION,
    PRICE
} from './constants';

const productRules = {    
    name: Joi.string().required().min(NAME.min).max(NAME.max),
    description: Joi.string().required().min(DESCRIPTION.min).max(DESCRIPTION.max),
    price: Joi.number().required().min(PRICE.min).max(PRICE.max).precision(PRICE.precision),
};

export const createProductJoiSchema =  Joi.object(productRules);

export const updateProductJoiSchema =  Joi.object({
    id: Joi.number().integer().required(),
    ...productRules
});


export const createProductValidatorMiddleware = (
        request: Request,
        response: Response,
        nextFunction: NextFunction  
    ) => {

        const result: ValidationResult = createProductJoiSchema.validate(request.body,{
            abortEarly: false
        })

        if(result.error){
            return response.status(422).json({
                message: 'Invalid request data',
                errors: result.error.details.map(error => error.message)
            });
        }
        nextFunction();   

}
export const updateProductValidatorMiddleware =  (
        request: Request,
        response: Response,
        nextFunction: NextFunction  
    ) => {

        const result: ValidationResult = updateProductJoiSchema.validate(request.body,{
            abortEarly: false
        })

        if(result.error){
            return response.status(422).json({
                message: 'Invalid request data',
                errors: result.error.details.map(error => error.message)
            });
        }
        nextFunction();   
}