var _ = require('lodash');

var RecordStore = function(name,city){
  this.name = name;
  this.city = city;
  this.value = 0;
  this.records =new Array();
  this.getartist = function(){
    return this.artist;
  };
  this.getvalue = function(){
    return this.value;
  };
  this.getname = function(){
    return this.name;
  };
  this.getcity = function(){
    return this.city;
  };
}

RecordStore.prototype = {
  addRecord: function(record){
    this.records.push(record);
    this.value += record.getprice()
  },

  storeStock:function(){
    return this.records.length;
  },


    inventory: function(){
      this.stock = "-----* " + this.getname() + "'s Stock: *----- \n";
      record = 0
      for(var record in this.records){
         this.stock = this.stock + "item(" + record + ") " + this.records[record].getartist() + ": " + this.records[record].gettitle() + "\n";
      };
      return this.stock;
    },
    sellRecord: function(record){
      this.records

    }

}


module.exports = RecordStore;
