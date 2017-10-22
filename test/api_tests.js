const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server.js');

describe('API endpoint api/feeds', function() {
  this.timeout(3000);

  // GET - List json from rss_url
  it('should return a [json]', function() {
    return chai.request(app)
      .get('/api/feeds')
      .query({rss_url: 'https://www.theguardian.com/international/rss'})
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
  });

});