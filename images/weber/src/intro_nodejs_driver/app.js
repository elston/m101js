var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// var url = 'mongodb://localhost:27017/video';
// var uri = "mongodb://adminmaster:passmaster@storage/admin?authMechanism=SCRAM-SHA-1";
// var uri = "mongodb://adminmaster:passmaster@storage/admin";
var uri = "mongodb://usermaster:passmaster@storage/video";

MongoClient.connect(uri, function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find some documents in our collection
    db.collection('movies').find({}).toArray(function(err, docs) {

        // Print the documents returned
        docs.forEach(function(doc) {
            console.log(doc.title);
        });

        // Close the DB
        db.close();
    });

    // Declare success
    console.log("Called find()");
});


