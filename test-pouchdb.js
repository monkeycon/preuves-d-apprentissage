var PouchDB = require('pouchdb');

var db = new PouchDB('http://localhost:5984/mydb');

db.post({name: 'first test'}).then((response) => {
      // handle response
  console.log('res' + response);
}).catch((err) => {
  console.log(err);
});

db.allDocs({
  include_docs: true,
  attachments: true,
}).then(function (result) {
  // handle result
  console.log('res' + result);
}).catch(function (err) {
  console.log(err);
});
