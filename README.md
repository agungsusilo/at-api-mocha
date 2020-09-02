# Automation Test API using Mocha & CHai

Automation testing API using Mocha & Chai Framework


## Requirement
```
node installation
```

## Installation

- Set up node

```
npm install
```

## env
```
cp env.sample .env
```
```
BASE_URL = 
```
    
## How To Run
```
npm run test-api        #Running test case
npm run reports         #generate reports

notes* If use Unix remove node in 
"test-api": "node ./node_modules/mocha/bin/mocha ./api/test --recursive --reporter mochawesome --reporter-options reportDir=reports/mochawesome/ --timeout 180000",
```

## Structure
```bash
├───api                 # Test directory
│   ├───data            # directory for data files like parameter etc
│   ├───helper          # directory for put response code etc
│   ├───page            # directory for set up page and parameter
│   ├───schema          # directory for put schema json
│   └───test            # directory for put test files 
└───reports             # directory for reports
    └───mochawesome     # reports mochawesome.html &  mochawesome.json
        └───assets      # assets
```



## Report

report can be two type :
- mochawesome.html : if we want to see in html format
- mochawesome.json : if we want consume that report and integrate it with dashboard like grafana etc,

## Notes
- this project use Windows set up, so need to simple set up if wanna use unix

## Answer the Question
1. To make sure this end-point have correct data type I use Json schema
2. To make sure this end-point get a correct response I use assertion
