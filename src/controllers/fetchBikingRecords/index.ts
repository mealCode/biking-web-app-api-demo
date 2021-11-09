import { Request, Response } from 'express';

import Biking from 'src/models/Biking';

const fetchBikingRecordsController = async (req: Request, res: Response) => {
  const bikingRecords = await Biking.find({});
  return res.status(200).json({ data: bikingRecords });
};

export default fetchBikingRecordsController;
