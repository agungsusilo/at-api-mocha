package page

import {
	"gopkg.in/resty.v1"
}

const baseURL string = `https://medea-stg.sinbad.web.id/`
const client Client := resty.New()

func GetListLoyalty() []byte {
	return client.R().Get(baseURL+"loyalty/v1/point-exception/list?limit=10&page=1&pointEarningId=1")
}