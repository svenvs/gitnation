const mongod = require('../mongoHandler.js');
const sanitizer = require("string-sanitizer");

const validateAndSanitize = function(body){
  if (!body) return false;
  let result = {
    fullName: sanitizer.sanitize.keepSpace(body.fullName),
    email: body.email,
    phone: sanitizer.sanitize.keepNumber(body.phone),
    country: sanitizer.sanitize.keepSpace(body.country),
    profession: sanitizer.sanitize.keepSpace(body.profession),
    recruitment: body.recruitment
  }

  if(sanitizer.validate.isEmail(result.email) && 
    typeof result.recruitment === "boolean" &&
    result.fullName.length > 0 && result.fullName.length < 300 &&
    result.phone.length > 0 && result.phone.length < 16 &&
    result.country.length > 0 && result.country.length < 57 &&
    result.profession.length > 0 && result.profession.length < 100){
    return result;
  } else {
    return false;
  }
}
const handleError = function(context, message, status){
  context.res.status = status;
  context.res.body = {
    message: message
  };
}

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  await mongod.connect(context.log).catch(handleError(context,'internal server error code: 1', 500));
  context.res = {
    header: {
        "Content-Type": "application/json"
      }
  }
  const valitData = validateAndSanitize(req.body);
  if(valitData){
      const contest = await mongod.create(valitData).catch(handleError(context,'internal server error code: 2', 500));
      context.res.status = 201;
      context.res.body = {
        message: 'stuff happely created',
        contest
      };
  } else {
    handleError('data is wrong', 403);
  }
}