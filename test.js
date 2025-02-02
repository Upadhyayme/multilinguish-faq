const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
const { expect } = chai;

describe('FAQ API', () => {
  it('should GET all FAQs', done => {
    chai.request(server)
      .get('/api/faqs')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should CREATE an FAQ', done => {
    chai.request(server)
      .post('/api/faqs')
      .send({ question: 'What is Node.js?', answer: 'Node.js is a runtime environment.' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        done();
      });
  });
});