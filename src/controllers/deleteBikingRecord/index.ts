import { Request, Response } from 'express';

import Biking from 'src/models/Biking';
import { DeleteBikingReqBodyTypes } from 'src/types/Biking';

const deleteBikingRecordController = async (req: Request, res: Response) => {
  const { _id: recordId } = req.body as DeleteBikingReqBodyTypes;
  const deleted = await Biking.deleteOne({ _id: recordId });
  if (deleted.deletedCount === 1) {
    return res.status(200).json({});
  }
  return res.status(400).json({});
};

export default deleteBikingRecordController;
