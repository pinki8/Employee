var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/info", function (err, db) {
    
    db.collection('emp', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Priya', lastName: 'Bharti', age: 21 ,email: 'www.priyabharti95@gmail.com',phone: '7020012721',address:'Jaipur' });
             collection.insert({ id: 2, firstName: 'Anamika', lastName: 'Sharma', age: 22 ,email: 'anamikasharma190594@gmail.com',phone: '8390136948',address:'Bihar' });
            collection.insert({ id: 3, firstName: 'Nutan', lastName: 'Kuchhadia', age: 22 ,email: 'snowhite09@gmail.co ',phone: '7767982936',address:'Gujrat' });
        
        

        db.collection('emp').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});