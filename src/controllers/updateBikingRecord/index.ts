import { Request, Response } from 'express';

import Biking from '@src/models/Biking';
import { BikingRecordTypes } from '@src/types/Biking';

const updateBikingRecordController = async (req: Request, res: Response) => {
  const { _id: recordId, ...rest } = req.body as BikingRecordTypes;
  const bikingRecordUpdated = await Biking.findByIdAndUpdate(recordId, rest, { new: true });
  return res.status(200).json({ data: bikingRecordUpdated });
};

export default updateBikingRecordController;
