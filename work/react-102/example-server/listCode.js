let list = ['pi', 3, 1 ,4, 1, 5, 9, 2 ];
const listCode = {
  all: function() {
    return list;
  },
  update: function( item ) {
    list.push(item);
  }
};

module.exports = listCode;
