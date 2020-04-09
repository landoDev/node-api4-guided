
const server = require("./api/server.js");

// make the port dynamic
// The pipe OR operator allows for heroku to manage it but also lets me work locally because if process is undefined it will default to the right
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
