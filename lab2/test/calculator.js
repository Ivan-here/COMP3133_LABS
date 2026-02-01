const assert = require('assert');
const calculator = require('../app/calculator');
const {describe} = require('mocha');

describe('Calculator tests', ()=> {

    it("add(5, 2) expected result 7", ()=>{
        assert.equal(calculator.add(5,2), 7);
    })
    it("add(5, 2) expected result 8(FAIL)", ()=>{
        assert.equal(calculator.add(5,2), 8);
    })
    it("sub(5, 2) expected result 3", ()=>{
        assert.equal(calculator.sub(5,2), 3);
    })
    it("sub(5, 2) expected result 5(FAIL)", ()=>{
        assert.equal(calculator.sub(5,2), 5);
    })
    it("mul(5, 2) expected result 10", ()=>{
        assert.equal(calculator.mul(5,2), 10);
    })
    it("mul(5, 2) expected result 11(FAIL)", ()=>{
        assert.equal(calculator.sub(5,2), 11);
    })
    it("div(10, 2) expected result 5", ()=>{
        assert.equal(calculator.div(10,2), 5);
    })
    it("div(10, 2) expected result 6(FAIL)", ()=>{
        assert.equal(calculator.div(10,2), 6);
    })
})