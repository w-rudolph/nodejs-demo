module.exports = {
    db: 'mongodb://127.0.0.1:27017/test_db',
    options: {
        autoReconnect: true,
        poolSize: 5,
        useMongoClient: true
    }
}
/**
 * More configuration: http://mongoosejs.com/docs/connections.html
 */