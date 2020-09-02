const supertest = require('supertest');

const env = require('dotenv').config();
const api = supertest(process.env.BASE_URL);

const getStatusPayment = (payload) =>
	api
		.get('/payment-status')
        .set('Content-Type', 'application/json')
        
           

module.exports = {
	getStatusPayment
};