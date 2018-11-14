const fetch = require("node-fetch")
test('fetch', () => {
  fetch("https://sites.google.com/unitn.it/seii-inf-org-unitn").then( (r) => {
  console.log(r)
  expect(r.status).toEqual(200)
  })
})