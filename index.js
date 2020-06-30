const nock = require('nock');
const request = require("request");
// const axios = require('axios');

//
// config
//
const url = 'http://jservice.io/api/';

//
// nock
//
const interceptor = nock(url);

interceptor.get("/random")
    .reply(200, [{
        question: "This is the clue."
    }])


//
// your request
//
const myApi = request.defaults({
    baseUrl: url
});

myApi.get("/random", function (error, response, body) {
    var question = JSON.parse(body)[0];
    console.log(question);
});