
// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var server = require('../sever.js')
var expect = chai.expect;
console.log("test in server===>",server)


describe('Status and content', function () {
    describe('Main page', function () {
        var requestBody = {
            "email": "pillayar@gmail",
            "password": "12345678"
        }
        it('status', function () {
            chai.request(server).post('/Login')
                .send(requestBody)
                .then(function (res) {
                    console.log("expect ==>",  expect(res).to.have.status(200));
                    
                    expect(res).to.have.status(200);
                 })
                 .catch(function (err) {
                    
                    throw err;
                 });


                //.end((err, res) => {
                    // if (err) {
                    //     console.log("error in ending");

                    // }
                    // else {

                    //     res.should.have.status(200);
                    // }
                    done();
                })
        })
    })
//})