package tests

import (
	"testing"
	"gopkg.in/resty.v1"
	"github.com/xeipuuv/gojsonschema"
	"github.com/stretchr/testify/assert"
)

func TestResponseCode(t *testing.T) {

	client := resty.New()
	schemaLoader := gojsonschema.NewReferenceLoader("file:///Users/dhonyimamsaputra/sinbadwork/sdet/automation-skeleton/at_api_resty/api/scheme/get_loyalty_scheme.json")
	schema, _ := gojsonschema.NewSchema(schemaLoader)

	resp, _ := client.R().Get("https://medea-stg.sinbad.web.id/loyalty/v1/point-exception/list?limit=10&page=1&pointEarningId=1")
	assertSchema, _ := schema.Validate(gojsonschema.NewStringLoader(string(resp.Body()[:])))

	assert.Equal(t, 200, resp.StatusCode(), `Response Message is Not Match`)
	assert.Equal(t, true, assertSchema.Valid(), `JSON Schema is Not Match`)
}

func TestWithoutAssert(t *testing.T) {

	client := resty.New()

	resp, _ := client.R().Get("https://medea-stg.sinbad.web.id/loyalty/v1/point-exception/list?limit=10&page=1&pointEarningId=1")

	if resp.StatusCode() != 200 {
		t.Errorf("Unexpected status code, expected %d, got %d instead", 200, resp.StatusCode())
	}
}