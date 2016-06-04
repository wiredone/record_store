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
  },
  // findAccountByOwnerName:function(ownerName){
  //   return _.find(this.accounts, function(account){
  //     return account.owner === ownerName;
  //   })
  // },
  // filteredAccounts: function(type){
  //   if(!type) return this.accounts;
  //   return _.filter(this.accounts, function(account){
  //     return account.type === type
  //   })
  // },
  // totalCash:function(type){
  //   var amounts = _.map(this.filteredAccounts(type), function(account){
  //     return account.amount;
  //   })
  //   return _.sum(amounts)
  // },
  storeStock:function(){
    return this.records.length;
  }
  // accountAverage:function(){
  //   return this.totalCash()/this.accounts.length;
  // }
}


//   setTotal: function(){
//     this.total = 0;
//     // console.log('this is', this);
//     this.records.forEach(function(record){
//       // console.log('this is', this);
//       this.total += account;
//       console.log(this.total);
//     }.bind(this));
//   }
// }

module.exports = RecordStore;
