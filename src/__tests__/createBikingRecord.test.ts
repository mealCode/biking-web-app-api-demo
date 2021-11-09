import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

import Biking from 'src/models/Biking';
import app from '..';

describe('Api Controller', () => {
  describe('Create new biking record endpoint', () => {
    describe('Invalid request body', () => {
      it('should fail without date and location args', (done) => {
        request(app)
          .post('/api/biking/create')
          .send({ date: '', location: '' })
          .then(({ statusCode, body }) => {
            const { message, details } = body;
            expect(message).toEqual('Validation Failed');
            expect(details).toEqual([{ date: '"date" must be a valid date' }]);
            expect(statusCode).toEqual(StatusCodes.BAD_REQUEST);
            done();
          });
      });
    });
    describe('Valid request body', () => {
      it('should save new biking record', (done) => {
        request(app)
          .post('/api/biking/create')
          .send({ date: '2021-11-05', location: 'Cebu, Philippines', notes: 'test notes' })
          .then(({ statusCode, body }) => {
            const { data } = body;
            expect(statusCode).toEqual(StatusCodes.CREATED);
            expect(data).toHaveProperty('_id');
            expect(data).toHaveProperty('date');
            expect(data).toHaveProperty('location');
            done();
          });
      });
    });
    afterAll(async () => {
      await Biking.remove({});
    });
  });
});
