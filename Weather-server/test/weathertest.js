let expect = require('chai').expect;
let sinon = require('sinon');
let scheema = require('./../models/data');
let supertest = require('supertest');
let app = require('../app');

let stubSave = sinon.stub(scheema.prototype,'save')

describe('test my post method', () => {
	stubSave.yields(null,{city:"delhi",date:"34556"});
  

  it('it should respond',(done)=>{
  	supertest(app)
  	.post('/api/insert')
  	.end((err,res)=>{
  		if(err) return err;
  		else 
  			expect(res.body.city).to.be.equal('delhi');
  		done()
  	})
  })
})
