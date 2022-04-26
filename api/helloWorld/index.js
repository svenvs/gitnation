const mongod = require('../mongoHandler.js');
module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  await mongod.connect(context.log);
  context.res = {
    header: {
        "Content-Type": "application/json"
      }
  }
  // Read the uploaded task
  //const newContester = req.body;
  // Save to database
//   const contest = await mongod.create({
//     fullName: 'sven van Straalen',
//     email: 'la@la.com',
//     phone: '064634553',
//     country: 'NL',
//     profession: 'crazy',
//     recruitment: true,
// });

const contest = await mongod.create({
  fullName: req.body.fullName,
  email: req.body.email,
  phone: req.body.phone,
  country: req.body.country,
  profession: req.body.profession,
  recruitment: req.body.recruitment,
});
  // Set the HTTP status to created
  context.res.status = 201;
  // return new object
  context.res.body = contest;
}