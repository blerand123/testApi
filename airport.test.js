const request = require("supertest")("https://jsonplaceholder.typicode.com");
const expect = require("chai").expect;

describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    const response = await request.get("/todos");

    expect(response.status).to.eql(200);
    expect(response.body.length).to.eql(200);
  });
});