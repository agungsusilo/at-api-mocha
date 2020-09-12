package golang_resty_examples

import (
	"testing"

	"github.com/go-resty/resty"
	"github.com/stretchr/testify/assert"
)

func TestResponseCode(t *testing.T) {

	client := resty.New()

	resp, _ := client.R().Get("https://medea-stg.sinbad.web.id/loyalty/v1/point-exception/list?limit=10&page=1&pointEarningId=1")

	assert.Equal(t, 200, resp.StatusCode())
}

func TestWithoutAssert(t *testing.T) {

	client := resty.New()

	resp, _ := client.R().Get("https://medea-stg.sinbad.web.id/loyalty/v1/point-exception/list?limit=10&page=1&pointEarningId=1")

	if resp.StatusCode() != 200 {
		t.Errorf("Unexpected status code, expected %d, got %d instead", 200, resp.StatusCode())
	}
}