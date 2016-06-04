// Create a constructor to create Record objects with artist, title, price
var assert = require('chai').assert;
var Record = require('../record');



 describe('Record', function() {

   beforeEach(function(){
     record1 = new Record("Nick Drake","River Man",0.02)
     record2 = new Record("Eskobar","On a Train",0.04)
   });

   it('it should have an artist', function () {
      assert.equal("Nick Drake", record1.getartist());
   })
   it('it should have a title', function () {
      assert.equal("River Man", record1.gettitle());
   })
   it('it should have a price', function () {
      assert.equal(0.02, record1.getprice());
   })
})
