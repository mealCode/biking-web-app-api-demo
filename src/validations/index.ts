import { Joi } from 'express-validation';

export const bikingRecordValidation = {
  body: Joi.object({
    _id: Joi.string().optional().allow(null, ''),
    date: Joi.date().required(),
    location: Joi.string().required(),
    notes: Joi.string().optional().allow(null, ''),
  }),
};

export const placeholder = '';
