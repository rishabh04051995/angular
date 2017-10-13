let expect = require('chai').expect;
let sinon = require('sinon');
let scheema = require('../models/data');
let supertest = require('supertest');
let url = supertest("http://localhost:3000");
let app = require('../app');

let stubSave = sinon.stub(scheema.prototype, 'save');
let stubFind = sinon.stub(scheema, 'find');
let stubDelete = sinon.stub(scheema, 'remove');



describe('test my post method', () => {


    stubSave.yields(null,{"city": "delhi","date": "34556"})
    it('it should respond',(done)=>{
    
  	url
  	.post('/api/insert')
  	.end((err,res)=>{
  		if(err) return err;
  		else 
  			expect(res.body.city).to.be.equal('delhi');
  		done();
  	})
  })

  stubFind.yields(null,{"city": "delhi","date": "34556"});
  it('it should find',(done)=>{

    url
    .get('/api/find')
    .end((err,res)=>{
      if(err) return err;
      else 
        expect("34556").to.be.equal(res.body.date);
      done();
    })
})
  stubDelete.yields(null,{"deleted": "ok"});
  it('it should remove',(done)=>{

    url
    .delete('/api/delete/34556')
    .end((err,res)=>{
      if(err) return err;
      else
        expect(res.body.deleted).to.be.equal("ok");
      done();
    })
  })

})
