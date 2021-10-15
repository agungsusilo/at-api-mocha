const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BASE_URL);

const getSearchResult = (param) =>
  api.get('/search')
    .query(param)
    .set('Content-Type', 'application/json');
    
module.exports = {
    getSearchResult
};