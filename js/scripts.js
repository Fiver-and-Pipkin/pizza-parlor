var Pizza = {
  inches: 0,
  toppingChoice: "Tofurky Pepperoni",
  numSlices: function() {
    var divideBy;
      if (this.toppingChoice === "Tofurky Pepperoni") {
        divideBy = .5;
      } else {
        divideBy = .8;
      }
    var sliceCount = Math.round(this.inches * divideBy);
    return sliceCount;


    }
  };



$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedTopping = $('select#toppingChoice').val();
    var inputtedInches = parseInt($('input#inches').val());

    var newPizza = Object.create(Pizza);
    newPizza.inches = inputtedInches;
    newPizza.toppingChoice = inputtedTopping;

    $(".response").hide();
      $(".sliceNum").text(newPizza.numSlices());
      $("#yourOrder").show();
    }
  );
});
