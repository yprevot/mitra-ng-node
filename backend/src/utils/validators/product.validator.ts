import { Request, Response, NextFunction } from 'express';

import Joi, { ValidationResult } from 'joi';
import { NAME, DESCRIPTION, PRICE } from './constants';

const nameJoiSchema = Joi.string().required().min(NAME.min).max(NAME.max);
const descriptionJoiSchema = Joi.string().required().min(DESCRIPTION.min).max(DESCRIPTION.max);
const priceJoiSchema = Joi.number()
    .required()
    .min(PRICE.min)
    .max(PRICE.max)
    .precision(PRICE.precision);

const productRules = {
    name: nameJoiSchema,
    description: descriptionJoiSchema,
    price: priceJoiSchema,
};

export const createProductJoiSchema = Joi.object(productRules);

const updateProductJoiSchema = Joi.object({
    id: Joi.number().integer().required(),
    ...productRules,
});

const createProductValidatorMiddleware = (
    request: Request,
    response: Response,
    nextFunction: NextFunction,
): void => {
    const result: ValidationResult = createProductJoiSchema.validate(request.body, {
        abortEarly: false,
    });

    if (result.error) {
        response.status(422).json({
            message: 'Invalid request data',
            errors: result.error.details.map((error) => error.message),
        });
    }
    nextFunction();
};
const updateProductValidatorMiddleware = (
    request: Request,
    response: Response,
    nextFunction: NextFunction,
): void => {
    const result: ValidationResult = updateProductJoiSchema.validate(request.body, {
        abortEarly: false,
    });

    if (result.error) {
        response.status(422).json({
            message: 'Invalid request data',
            errors: result.error.details.map((error) => error.message),
        });
    }
    nextFunction();
};

const nameValidatorMiddleware = (
    request: Request,
    response: Response,
    nextFunction: NextFunction,
): void => {
    const { name } = request.params;
    const result: ValidationResult = nameJoiSchema.validate(name, {
        abortEarly: false,
    });

    if (result.error) {
        response.status(422).json({
            message: 'Invalid name data',
            errors: result.error.details.map((error) => error.message),
        });
    }
    nextFunction();
};

const descriptionValidatorMiddleware = (
    request: Request,
    response: Response,
    nextFunction: NextFunction,
): void => {
    const { description } = request.params;
    const result: ValidationResult = descriptionJoiSchema.validate(description, {
        abortEarly: false,
    });

    if (result.error) {
        response.status(422).json({
            message: 'Invalid description data',
            errors: result.error.details.map((error) => error.message),
        });
    }
    nextFunction();
};
const priceValidatorMiddleware = (
    request: Request,
    response: Response,
    nextFunction: NextFunction,
): void => {
    const { price } = request.params;
    const result: ValidationResult = descriptionJoiSchema.validate(price, {
        abortEarly: false,
    });

    if (result.error) {
        response.status(422).json({
            message: 'Invalid price data',
            errors: result.error.details.map((error) => error.message),
        });
    }
    nextFunction();
};

export {
    createProductValidatorMiddleware,
    updateProductValidatorMiddleware,
    nameValidatorMiddleware,
    descriptionValidatorMiddleware,
    priceValidatorMiddleware,
};
