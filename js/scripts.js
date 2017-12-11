//backend logic--------------------

var taskId = 1;
function ToDoItem(name) {
  this.name = name;
  this.tasks = [];
  this.id =name + taskId;
  taskId ++;
}



// user interface logic --------------

$(document).ready(function() {

  $("#add-list-item").click(function() {
    $("#new-items").append('<div class="new-item">' + '<div class="form-group">' +'<input type="text" class="form-control list-item"' + '</div>' + '</div>')
  });

  $("form#todo").submit(function(event) {
    event.preventDefault();


    var name = $("input#name").val()
    var newToDoItem = new ToDoItem(name);

    $(".new-item").each(function() {
      var task = $(this).find("input.list-item").val();
      newToDoItem.tasks.push(task);

    });

    for (var i = newToDoItem.tasks.length; i >= 0; i -= 1) {
      debugger;
      if (newToDoItem.tasks[i] === "") {
        newToDoItem.tasks.splice(i, 1);
      }
    }

    $("ol#tasks").append('<li id="' + newToDoItem.id + '">' + newToDoItem.name + '</li>');

    newToDoItem.tasks.forEach(function(element) {
      $("li").last().append('<div class="form-group">' + '<input type="checkbox" name="todotasklist" value="">' + element + '</div>');
    });
  });
});
