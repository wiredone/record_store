var _ = require('lodash');

var Record = function(record){
  this.artist = record.name;
  this.title = record.title;
  this.price = record.price;
  this.getartist = function(){
    return this.artist;
  };
  this.getprice = function(){
    return this.price;
  };
  this.gettitle = function(){
    return this.title;
  };
}


record1 = new Record("Nick Drake","River Man",0.02)
record2 = new Record("Eskobar","On a Train",0.04)

module.exports = Record;
