//Business logic for choreList
function ChoreList() {
  this.chores = {};
}

ChoreList.prototype.addToDo = function(chore) {
  //this.chores[chore.task] = chore;
  this.chores = chore;
}

//Business logic for tasks
function ToDo(task, room, complete = false) {
  this.task = task,
  this.room = room,
  this.complete = complete
}

let chore1 = new ToDo("wash dishes", "kitchen");
let chore2 = new ToDo("vacuum", "living room");
let choreList = new ChoreList;
choreList.addToDo(chore1);
choreList.addToDo(chore2);

//User interface Logic
$(document).ready(function () {
  $("#choreList-form").submit(function(event) {
    event.preventDefault();

    let input1 = $('#chore').val();
    let input2 = $('#room').val();
    let input3 = $('#check').is(":checked");

    let chore = new ToDo(input1, input2, input3);

    choreList.addToDo(chore);
    // $("#chore-results").text(chore.task);
    $("#chore-results").append(`
      <li>
        <button type="click" id="done">Done?</button>
        ${chore.task} | ${chore.room} | <span id="complete">${chore.complete}</span>
      </li>
      `)
    console.log(choreList);

    $("#done").click(function() {
      chore.complete = !chore.complete;
      $("#complete").text(chore.complete);
    });
  })

  
})