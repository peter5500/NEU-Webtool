(()=> {

  const demo = {
    init: function() {
      this.bindInput();
      this.getDefaultList();
    },

    bindInput: function() {
      document.querySelector('button').addEventListener('click', (event) => {
        const value = document.querySelector('input').value;
        this.handleInput(value);
      });
    },

    handleInput: function(value) {
      document.querySelector('input').value = '';
      fetch('/updateList', {
        method: 'POST',
        body: JSON.stringify({ value })
      })
      .then( r => r.json() )
      .then( j => {
        this.renderList(j);
      });
    },

    getDefaultList: function() {
      fetch('/defaultList')
      .then( r => r.json() )
      .then( j => {
        this.renderList(j);
      });
    },

    renderList: function(list) {
      document.querySelector('.list').innerHTML = this.formatList(list);
    },

    formatList: function( list ) {
      return list.map( item => `<li>${item}</li>` ).join('');
    }

  };

  demo.init();

})();
