const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));

const page = require('../page/Get_status_page.js');
const payload = require('../data/cred.json');
const schema = require('../schema/Get_status_schema.json');
const code = require('../helper/response_code_messages.json');
const { testcase } = require('../test_case/testcase_getStatusPayment')

const payloadBody = {200};

describe(`@getvalidationtag ${testcase.describe}`, () => {
	
	before('#hook', async () => {

	});

	it(`@get ${testcase.positive.getIp}`, async () => {
		const response = await page.getStatusPayment(payloadBody);
		assert(response.status).to.equal(code.successOk);
        assert(response.body).to.be.jsonSchema(schema);
    });

	
});
