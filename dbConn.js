const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/testDb'; // or your MongoDB URI

const client = new MongoClient(uri, { useNewUrlParser: true});


async function connectMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Once connected, you can perform database operations here

    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}

connectMongoDB();