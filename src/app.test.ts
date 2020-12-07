import supertest from 'supertest';
import { app } from './app';

describe('App', () => {
  it('GET', async () => {
    const response = await supertest(app).get('/');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'John' });
  });

  it('POST', async () => {
    const response = await supertest(app).post('/').send({ name: 'John' });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'John' });
  });
});
