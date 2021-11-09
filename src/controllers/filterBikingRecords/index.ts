import { Request, Response } from 'express';

import Biking from '@src/models/Biking';
import { FilterBikingReqBodyTypes } from '@src/types/Biking';

const filterBikingRecordsController = async (req: Request, res: Response) => {
  const { sorting, filter } = req.body as FilterBikingReqBodyTypes;
  const filtered = await Biking.aggregate([
    {
      $match: {
        notes: {
          $regex: new RegExp(filter, 'i'),
        },
      },
    },
    {
      $sort: {
        date: sorting,
      },
    },
  ]);
  return res.status(200).json({ data: filtered });
};

export default filterBikingRecordsController;
