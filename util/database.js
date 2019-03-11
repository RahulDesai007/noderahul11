const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://rahul_92:root@cluster0-3zopr.mongodb.net/test?retryWrites=true'
,{useNewUrlParser:true})
.then(client => {

  _db = client.db()
  callback(client);
})
.catch(err => {
  console.log(err)
});
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database found'
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;