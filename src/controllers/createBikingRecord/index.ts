import { Request, Response } from 'express';

import Biking from '@src/models/Biking';

const createBikingRecordController = async (req: Request, res: Response) => {
  try {
    const bikingRecordCreated = await Biking.create(req.body);
    return res.status(201).json({ data: bikingRecordCreated });
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};

export default createBikingRecordController;
