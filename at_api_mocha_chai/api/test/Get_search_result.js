const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));

const page = require('../page/searchResult.js');
// const payload = require('../data/cred.json');
// const schema = require('../schema/Get_status_schema.json');
const status = require('../helper/response_code_messages.json');
const testcase = require('../test_case/tc_getSearchResults.js');
const data = require('../data/query.js')

// const payloadBody = 200;

let response

describe(`@getSearchResult ${testcase.GetSearchResults.describe}`, () => {
	
	before(async () => {

	});

	it(`@getSearch ${testcase.GetSearchResults.positive.GetSearchResults}`, async () => {
        const params = data.queryList(1, 20, "word", "price", "asc", 0, 999999999, 0, 999999999);
		response = await page.getSearchResult(params);
		assert(response.status).to.equal(status.successOk);
        console.log(response.body.data.data);
        // assert(response.body).to.be.jsonSchema(schema);S
    });
	
});