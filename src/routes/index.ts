import express from 'express';
import { validate } from 'express-validation';

import createBikingRecordController from 'src/controllers/createBikingRecord';
import updateBikingRecordController from 'src/controllers/updateBikingRecord';
import fetchBikingRecordsController from 'src/controllers/fetchBikingRecords';
import deleteBikingRecordController from 'src/controllers/deleteBikingRecord';
import filterBikingRecordsController from 'src/controllers/filterBikingRecords';
import { bikingRecordValidation } from 'src/validations';

const router = express.Router();

router.post('/create', validate(bikingRecordValidation, { keyByField: true }), createBikingRecordController);
router.put('/update', validate(bikingRecordValidation, { keyByField: true }), updateBikingRecordController);
router.get('/records', fetchBikingRecordsController);
router.delete('/delete', deleteBikingRecordController);
router.post('/filter', filterBikingRecordsController);

export default router;
