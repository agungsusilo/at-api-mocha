const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));

const page = require('../page/Get_status_page.js');
const payload = require('../data/cred.json');
const schema = require('../schema/Get_status_schema.json');
const code = require('../helper/response_code_messages.json');

const payloadPost = 200;

const testCase = {
	describe: 'As a User, I should be able to see data',
	positive: {
        getIp: 'As a User, I should be able to see my status',
		
	},
	negative: {
	
	}
};

describe(`@getvalidationtag ${testCase.describe}`, () => {
	before('#hook', async () => {

	});

	it(`@get ${testCase.positive.getIp}`, async () => {
		const response = await page.getStatusPayment(payload);
		assert(response.status).to.equal(code.successOk);
        assert(response.body).to.be.jsonSchema(schema);
    });

	
});
