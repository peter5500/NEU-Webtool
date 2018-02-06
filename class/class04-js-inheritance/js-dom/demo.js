( () => {
  const tasks = [  'Write more code' ];

  function render() {
    document.querySelector('.output ul').innerHTML = generateList();
  }

  function generateList() {
    const list = tasks.map( (element, index) => `<li data-item="${index}">${element} <span class='delete'>X</span></li>` ).join('\n');
    return list;
  }

  function addToList(task) {
    tasks.push(task);
    render();
  }

  function getNewTask() {
    return document.querySelector('.new-task').value;
  }

  function addTask() {
    addToList(getNewTask());
  }

  function addAddListener() {
    document.querySelector('.add').addEventListener('click', addTask);
  }

  function addStyling() {
    document.querySelector('.output').addEventListener('mouseover', event => { showHover(event, true); } );
    document.querySelector('.output').addEventListener('mouseout', event => { showHover(event, false); } );
    document.querySelector('.output').addEventListener('click', toggleComplete );
  }

  function toggleComplete(event) {
    event.target.classList.toggle('complete');
    console.log(event.target.dataset.item);
  }

  function showHover( event, show ) {
    if(show) {
      event.target.classList.add('hovered');
    } else {
      event.target.classList.remove('hovered');
    }
  }

  addAddListener();
  addStyling();
  render();
})();
