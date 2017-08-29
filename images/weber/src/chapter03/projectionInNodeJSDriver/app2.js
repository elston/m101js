var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


var uri = 'mongodb://usermaster:passmaster@storage:27017/crunchbase';

MongoClient.connect(uri, function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"founded_year": 2010};
    var cursor = db.collection('companies').find(query);

    cursor.project({"name": 1, "number_of_employees": 1, "_id": 0});

    cursor.forEach(
        function(doc) {
            console.log(doc.name + " has " + doc.number_of_employees + " employees.");
        },
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});
