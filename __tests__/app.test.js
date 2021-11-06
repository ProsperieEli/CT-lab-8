const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('CT-lab-8 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('returns all the information', () => {
    return request(app)
      .get('/api/vi/text');
  });

  afterAll(() => {
    pool.end();
  });
});
