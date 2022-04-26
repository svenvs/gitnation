const mongod = require('../mongoHandler.js');
module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  await mongod.connect(context.log);
  context.res = {
    header: {
        "Content-Type": "application/json"
      }
  }
  if(req.body && 
    req.body.fullName && 
    req.body.email &&
    req.body.phone && 
    req.body.country &&
    req.body.profession){
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
      context.res.body = {
        message: 'stuff happely created',
        contest
      };
  } else {
    context.res.status = 403;
    // return new object
    context.res.body = {
      message: 'data is wrong'
    };
  }
}