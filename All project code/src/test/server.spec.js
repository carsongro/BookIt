// Imports the index.js file to be tested.
const server = require('../index.js'); //TO-DO Make sure the path to your index.js is correctly added
// Importing libraries

// Chai HTTP provides an interface for live integration testing of the API's.
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {assert, expect} = chai;

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', done => {
    chai
      .request(server)
      .get('/welcome')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });

  // ===========================================================================
  // TO-DO: Part A Login unit test case

  it('positive : /register', done => {
    chai
      .request(server)
      .post('/register')
      .send({email: 'test@test.com', password: 'test'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('negative : /register', done => {
    chai
      .request(server)
      .post('/register')
      .send({email: 'test', password: 'test'})
      .end((err, res) => {
        expect(err)
        done();
      });
  });

  it('positive : /login', done => {
    chai
      .request(server)
      .post('/login')
      .send({email: 'test@test.com', password: 'test'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  }).timeout(10000);
  it('negative : /login', done => {
    chai
      .request(server)
      .post('/login')
      .send({email: 'test', password: 'test'})
      .end((err, res) => {
        expect(err)
        done();
      });
  }).timeout(10000);
});