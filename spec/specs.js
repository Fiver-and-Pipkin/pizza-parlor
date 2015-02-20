describe("Pizza", function() {
  describe("numSlices", function() {
    it("will return the number of slices if customer chooses 'meat' topping", function() {
      var newPizza = Object.create(Pizza);
      newPizza.inches = 12;
      newPizza.toppingChoice = "Tofurky Pepperoni";
      expect(newPizza.numSlices()).to.equal(6);
    });

    it("will return the number of slices if customer does not choose 'meat'", function() {
      var newPizza = Object.create(Pizza);
      newPizza.inches = 12;
      newPizza.toppingChoice = "cheese";
      expect(newPizza.numSlices()).to.equal(10);
    });

    it("will prompt for a number if user enters non-integer characters in size field", function() {
      var newPizza = Object.create(Pizza);
      newPizza.inches = "twelve";
      newPizza.toppingChoice = "cheese";
      expect(newPizza.numSlices()).to.eql(NaN);
    });
  });
});
