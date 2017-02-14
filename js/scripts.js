$(document).ready(function() {
$("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();


   $(".name").text(nameInput);
   $(".date").text(dateInput);
   $(".time").text(timeInput);

   $("#confirm").show();

   event.preventDefault();
  });
});
