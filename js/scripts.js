
var Pizza = {
  numSlices: 0,
  inches: function(diameter) {
    this.numSlices = this.numSlices + diameter;
  },
  topping: function(diameter) {
    this.numSlices = this.numSlices + (diameter + 5);
  }
};
