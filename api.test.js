const fetch = require("node-fetch");
const url = "http://localhost:3000/courses"

it('works with get', async () => {
    expect.assertions(1)
    var response = await fetch(url)
    expect(response.status).toEqual(200)
    var json = await response.jason()
    console.log(json)
    expects(jason[0].id).toEqual(21);
})