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

var doStuff = function(newToDoItem) {
  $("#to-do-list").prepend('<h4 id="' + newToDoItem.id + '">' + newToDoItem.name + '</h4>')

  for (var i = 0; i < newToDoItem.tasks.length; i++) {
    $('#' + newToDoItem.id).last().append('<div class="format-group" id="' + newToDoItem.tasks[i] + '"' + '><input class="toDos" type="checkbox" name="todotasklist" value="'+ newToDoItem.tasks[i]  + '">' + newToDoItem.tasks[i]  +'</div>');
  }

};

$(document).ready(function() {
  $("#add-list-item").click(function() {
    $("#new-items").append('<div class="new-item">' + '<div class="form-group">' +'<input type="text" class="form-control list-item"' + '</div>' + '</div>')
  });

  $("form#todo").submit(function(event) {
    event.preventDefault();


    var name = $("input#name").val()
    var newToDoItem = new ToDoItem(name);
    var parentId = newToDoItem.id

    $(".new-item").each(function() {
      var task = $(this).find("input.list-item").val();
      newToDoItem.tasks.push(task);

    });

    for (var i = newToDoItem.tasks.length; i >= 0; i -= 1) {
      if (newToDoItem.tasks[i] === "") {
        newToDoItem.tasks.splice(i, 1);
      }
    }

    /*newToDoItem.tasks.forEach(function(element) {
      $("#to-do-list").last().prepend('<div class="format-group" id="' + element + '"' + '><input class="toDos" type="checkbox" name="todotasklist" value="'+ element + '">' + element +'</div>');
    });
    $("#to-do-list").prepend('<h3>'newToDoItem.name'<h3>')
  })*/
    doStuff(newToDoItem);
    resetFields();
  });

  $("form#to-do-list").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=todotasklist]:checked").each(function() {
      var checkedToDoList = $(this).val();
      console.log(checkedToDoList);
      $("#" + checkedToDoList).remove();

    });

  });
});
