var _ = require('lodash');

var Record = function(name,title,price){
  this.artist = name;
  this.title = title;
  this.price = price;
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



module.exports = Record;
