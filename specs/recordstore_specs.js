// Create a RecordStore that has a name, city and multiple records in it's inventory
// Give the RecordStore a balance i.e. cash in bank.
// Add some records to your RecordStore.
// Create a method that lists the inventory.
// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// Create a method that reports on the financial situation of the store. Cash and value of inventory.



var assert = require('chai').assert;
var RecordStore = require('../store');
var Record = require('../record');



 describe('RecordStore', function() {

   beforeEach(function(){
     recordstore1 = new RecordStore("Rough Trade","Liverpool")
    //  recordstore2 = new Record("Eskobar","On a Train",0.04)
    // console.log(recordstore1.records);
   });

   it('it should have a name', function () {
      assert.equal("Rough Trade", recordstore1.getname());
   })
   it('it should have a city', function () {
      assert.equal("Liverpool", recordstore1.getcity());
   })
   it('it should have a stock cash value of £0 without some records', function () {
      assert.equal(0, recordstore1.getvalue());
   })
   it('should be able to add records', function(){
    //  var store = new RecordStore();
    //  var account = new Account({owner:'Jay',amount:50, type:'buisness'});
     var record3 = new Record("Nick Drake","River Man",0.02)
     var record4 = new Record("Eskobar","On a Train",0.04)

     recordstore1.addRecord(record3);
    //  console.log(recordstore1.records);
      assert.deepEqual(record3, recordstore1.records[0]);
   });
   it('it should have an inventory with some records', function () {
    var record3 = new Record("Nick Drake","River Man",0.02)
    var record4 = new Record("Eskobar","On a Train",0.04)
    var record5 = new Record("SOHN","Temple",0.04)
    var delivery = [record3,record4,record5]
    for (var record in delivery) {
     recordstore1.addRecord(record);
   };
      assert.equal(3, recordstore1.storeStock());
   })
})
