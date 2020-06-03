// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Hello", () => {
    describe("GET /", () => {
        it("should say Hello World!", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.eq('Hello World!');
                    done();
               });
         });
    });
});
