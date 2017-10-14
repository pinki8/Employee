var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/info", function (err, db) {
    
    db.collection('emp', function (err, collection) {
        
              collection.insert({firstName: 'Annu', lastName: 'Yadav', age: 22 ,email: 'annuyads09@gmail.co ',phone: '7767983560',address:'Haryana' });
        
        

        db.collection('emp').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});

