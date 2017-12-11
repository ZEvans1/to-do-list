//backend logic--------------------

var taskId = 1;
function ToDoItem(name) {
  this.name = name;
  this.tasks = [];
  this.id =name + taskId;
  taskId ++;
}


// user interface logic --------------
function resetFields() {
  $("input#name").val("");
  $("input.list-item").val("");
}


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
      if (newToDoItem.tasks[i] === "") {
        newToDoItem.tasks.splice(i, 1);
      }
    }

    $("ol#tasks").append('<li id="' + newToDoItem.id + '">' + newToDoItem.name + '</li>');

    newToDoItem.tasks.forEach(function(element) {
      $("li").last().append('<div class="form-group">' + '<input class="toDos" type="checkbox" name="todotasklist" value="'+ element '">' + element +'</div>');
    });
    resetFields();
  });

  $("form#to-do-list").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=todotasklist]:checked").each(function() {
      $("#tasks li").remove();
    })
  })
});
