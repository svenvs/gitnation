// TODO: Ensure you configured CONNECTION_STRING on the server when deployed
// https://docs.microsoft.com/azure/static-web-apps/application-settings
let connectionString = process.env.CosmosDbConnectionString;

// Load mongoose
const mongoose = require('mongoose');

// Create the schema or structure of our object in Mongoose
const contesterSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    country: String,
    profession: String,
    recruitment: Boolean,
});

// This model will use our schema and connect to the database
const ContesterModel = mongoose.model('contester', contesterSchema);

module.exports = {
    // Used to connect to the database
    // log parameter passed from caller, used to log to Azure Functions
    connect: async (log) => {
        log('Connecting to database...');

        // If connection is already made, return
        if (mongoose.connection.readyState === 1) {
            log('Connection already established.');
            return;
        }

        // If connectionString is not configured, attempt to connect to localhost MongoDB
        if (!connectionString) {
            log('CONNECTION_STRING not configured. Attempting to use localhost.');
            connectionString = 'mongodb://localhost';
        }

        try {
            // Connect to the database
            mongoose.connect(
                connectionString,
                { // boiler plate values
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            );
        } catch(ex) {
            // Connection unsuccessful
            // Log error and rethrow
            log(`Connection unsucessful. Error message: ${ex.message}`);
            throw ex;
        }
    },

    create: async (data) => {
        return await ContesterModel.create(data);
    }
}